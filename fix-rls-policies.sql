-- Fix RLS Policies for Admin Dashboard Access
-- Run this in your Supabase SQL editor

-- Drop existing policies first
DROP POLICY IF EXISTS "Admin can view all projects" ON projects;
DROP POLICY IF EXISTS "Clients can view their projects" ON projects;
DROP POLICY IF EXISTS "Admin can view all stages" ON project_stages;
DROP POLICY IF EXISTS "Clients can view project stages" ON project_stages;
DROP POLICY IF EXISTS "Admin can view all updates" ON project_updates;
DROP POLICY IF EXISTS "Clients can view project updates" ON project_updates;
DROP POLICY IF EXISTS "Admin can view all notes" ON project_notes;
DROP POLICY IF EXISTS "Clients can view project notes" ON project_notes;
DROP POLICY IF EXISTS "Admin can view all deliverables" ON project_deliverables;
DROP POLICY IF EXISTS "Clients can view project deliverables" ON project_deliverables;
DROP POLICY IF EXISTS "Admin can view all invoices" ON invoices;
DROP POLICY IF EXISTS "Clients can view project invoices" ON invoices;

-- Create new policies that allow public access (for admin dashboard)
CREATE POLICY "Allow public access to projects" ON projects FOR ALL USING (true);
CREATE POLICY "Allow public access to stages" ON project_stages FOR ALL USING (true);
CREATE POLICY "Allow public access to updates" ON project_updates FOR ALL USING (true);
CREATE POLICY "Allow public access to notes" ON project_notes FOR ALL USING (true);
CREATE POLICY "Allow public access to deliverables" ON project_deliverables FOR ALL USING (true);
CREATE POLICY "Allow public access to invoices" ON invoices FOR ALL USING (true);

-- Note: These policies allow full access to all data
-- In production, you should implement proper authentication and more restrictive policies 