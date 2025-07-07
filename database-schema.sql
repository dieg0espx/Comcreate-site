-- Comcreate Dashboard Database Schema
-- Run this in your Supabase SQL editor

-- Create custom types
CREATE TYPE project_status AS ENUM ('planning', 'in_progress', 'completed', 'on_hold');
CREATE TYPE stage_status AS ENUM ('pending', 'in_progress', 'completed');
CREATE TYPE invoice_status AS ENUM ('draft', 'pending', 'paid', 'overdue');

-- Projects table
CREATE TABLE projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    project_name VARCHAR(255) NOT NULL,
    description TEXT,
    status project_status DEFAULT 'planning',
    progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
    start_date DATE,
    end_date DATE,
    budget DECIMAL(10,2) DEFAULT 0,
    paid_amount DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project stages table
CREATE TABLE project_stages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    status stage_status DEFAULT 'pending',
    order_index INTEGER DEFAULT 0,
    estimated_duration INTEGER DEFAULT 0,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project updates table
CREATE TABLE project_updates (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project notes table
CREATE TABLE project_notes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project deliverables table
CREATE TABLE project_deliverables (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Invoices table
CREATE TABLE invoices (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    invoice_number VARCHAR(50) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    description TEXT,
    status invoice_status DEFAULT 'draft',
    due_date DATE,
    paid_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Users table (for authentication)
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'client' CHECK (role IN ('admin', 'client')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Client projects relationship table
CREATE TABLE client_projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, project_id)
);

-- Create indexes for better performance
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_client_name ON projects(client_name);
CREATE INDEX idx_project_stages_project_id ON project_stages(project_id);
CREATE INDEX idx_project_stages_status ON project_stages(status);
CREATE INDEX idx_project_updates_project_id ON project_updates(project_id);
CREATE INDEX idx_project_notes_project_id ON project_notes(project_id);
CREATE INDEX idx_invoices_project_id ON invoices(project_id);
CREATE INDEX idx_invoices_status ON invoices(status);
CREATE INDEX idx_client_projects_user_id ON client_projects(user_id);
CREATE INDEX idx_client_projects_project_id ON client_projects(project_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_project_stages_updated_at BEFORE UPDATE ON project_stages FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_invoices_updated_at BEFORE UPDATE ON invoices FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_stages ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_deliverables ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_projects ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Allow public access to projects for admin dashboard (temporary)
CREATE POLICY "Allow public access to projects" ON projects FOR ALL USING (true);

-- Admin can see all projects
CREATE POLICY "Admin can view all projects" ON projects FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- Clients can only see their own projects
CREATE POLICY "Clients can view their projects" ON projects FOR SELECT USING (
    EXISTS (
        SELECT 1 FROM client_projects cp 
        WHERE cp.project_id = projects.id 
        AND cp.user_id = auth.uid()
    )
);

-- Similar policies for other tables
-- Allow public access for admin dashboard (temporary)
CREATE POLICY "Allow public access to stages" ON project_stages FOR ALL USING (true);
CREATE POLICY "Allow public access to updates" ON project_updates FOR ALL USING (true);
CREATE POLICY "Allow public access to notes" ON project_notes FOR ALL USING (true);
CREATE POLICY "Allow public access to deliverables" ON project_deliverables FOR ALL USING (true);
CREATE POLICY "Allow public access to invoices" ON invoices FOR ALL USING (true);

CREATE POLICY "Admin can view all stages" ON project_stages FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Clients can view project stages" ON project_stages FOR SELECT USING (
    EXISTS (
        SELECT 1 FROM client_projects cp 
        WHERE cp.project_id = project_stages.project_id 
        AND cp.user_id = auth.uid()
    )
);

CREATE POLICY "Admin can view all updates" ON project_updates FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Clients can view project updates" ON project_updates FOR SELECT USING (
    EXISTS (
        SELECT 1 FROM client_projects cp 
        WHERE cp.project_id = project_updates.project_id 
        AND cp.user_id = auth.uid()
    )
);

CREATE POLICY "Admin can view all notes" ON project_notes FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Clients can view project notes" ON project_notes FOR SELECT USING (
    EXISTS (
        SELECT 1 FROM client_projects cp 
        WHERE cp.project_id = project_notes.project_id 
        AND cp.user_id = auth.uid()
    )
);

CREATE POLICY "Admin can view all deliverables" ON project_deliverables FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Clients can view project deliverables" ON project_deliverables FOR SELECT USING (
    EXISTS (
        SELECT 1 FROM client_projects cp 
        WHERE cp.project_id = project_deliverables.project_id 
        AND cp.user_id = auth.uid()
    )
);

CREATE POLICY "Admin can view all invoices" ON invoices FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Clients can view project invoices" ON invoices FOR SELECT USING (
    EXISTS (
        SELECT 1 FROM client_projects cp 
        WHERE cp.project_id = invoices.project_id 
        AND cp.user_id = auth.uid()
    )
);

-- Insert sample data
INSERT INTO projects (client_name, project_name, description, status, progress, start_date, end_date, budget, paid_amount) VALUES
('TechStart Inc.', 'E-commerce Website Redesign', 'Complete redesign of our e-commerce platform with modern UI/UX, improved checkout process, and mobile optimization.', 'in_progress', 65, '2024-01-15', '2024-03-15', 15000.00, 10000.00),
('Green Solutions', 'Brand Identity Package', 'Complete brand identity including logo design, brand guidelines, and marketing materials.', 'completed', 100, '2023-12-01', '2024-01-15', 8000.00, 8000.00),
('Fitness Pro', 'SEO Optimization Campaign', 'Comprehensive SEO campaign to improve search rankings and organic traffic.', 'planning', 15, '2024-02-01', '2024-05-01', 12000.00, 3000.00);

-- Insert project stages
INSERT INTO project_stages (project_id, name, description, status, order_index, estimated_duration, started_at, completed_at) VALUES
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'Discovery & Planning', 'Project requirements gathered and planning completed', 'completed', 1, 5, '2024-01-15', '2024-01-20'),
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'Design & Wireframes', 'UI/UX design approved and wireframes completed', 'completed', 2, 10, '2024-01-20', '2024-01-30'),
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'Development', 'Frontend development in progress', 'in_progress', 3, 20, '2024-02-01', NULL),
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'Testing & QA', 'Comprehensive testing and quality assurance', 'pending', 4, 7, NULL, NULL),
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'Launch', 'Final deployment and go-live', 'pending', 5, 3, NULL, NULL);

-- Insert project updates
INSERT INTO project_updates (project_id, message, author) VALUES
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'Frontend development completed. Moving to backend integration.', 'Comcreate Team'),
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'Design approval received. Starting development phase.', 'Comcreate Team'),
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'Wireframes completed and ready for your review.', 'Comcreate Team');

-- Insert project notes
INSERT INTO project_notes (project_id, content, author) VALUES
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'Client requested additional payment gateway integration', 'Admin'),
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'Need to schedule client meeting for final review', 'Admin');

-- Insert project deliverables
INSERT INTO project_deliverables (project_id, name, description) VALUES
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'Responsive e-commerce website', 'Fully responsive website with modern design'),
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'Admin dashboard', 'Backend admin panel for content management'),
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'Payment gateway integration', 'Secure payment processing system'),
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'SEO optimization', 'Search engine optimization implementation'),
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'Mobile app (optional)', 'Native mobile application');

-- Insert invoices
INSERT INTO invoices (project_id, invoice_number, amount, description, status, due_date, paid_date) VALUES
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'INV-001', 5000.00, 'Project initiation and planning', 'paid', '2024-01-25', '2024-01-24'),
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'INV-002', 5000.00, 'Design phase completion', 'pending', '2024-02-25', NULL),
((SELECT id FROM projects WHERE project_name = 'E-commerce Website Redesign'), 'INV-003', 5000.00, 'Development phase completion', 'draft', '2024-03-25', NULL);

-- Insert sample users
INSERT INTO users (email, full_name, role) VALUES
('admin@comcreate.org', 'Admin User', 'admin'),
('client@techstart.com', 'TechStart Client', 'client'),
('client@greensolutions.com', 'Green Solutions Client', 'client');

-- Link clients to projects
INSERT INTO client_projects (user_id, project_id) VALUES
((SELECT id FROM users WHERE email = 'client@techstart.com'), (SELECT id FROM projects WHERE client_name = 'TechStart Inc.')),
((SELECT id FROM users WHERE email = 'client@greensolutions.com'), (SELECT id FROM projects WHERE client_name = 'Green Solutions')); 