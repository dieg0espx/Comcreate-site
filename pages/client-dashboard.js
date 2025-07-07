import { useState } from 'react';
import Head from 'next/head';

// Test data for client projects
const testClientProjects = [
  {
    id: 1,
    projectName: "E-commerce Website Redesign",
    status: "In Progress",
    progress: 65,
    startDate: "2024-01-15",
    endDate: "2024-03-15",
    budget: 15000,
    paidAmount: 10000,
    description: "Complete redesign of our e-commerce platform with modern UI/UX, improved checkout process, and mobile optimization.",
    stages: [
      { id: 1, name: "Discovery & Planning", status: "completed", completedAt: "2024-01-20", description: "Project requirements gathered and planning completed" },
      { id: 2, name: "Design & Wireframes", status: "completed", completedAt: "2024-01-30", description: "UI/UX design approved and wireframes completed" },
      { id: 3, name: "Development", status: "in-progress", startedAt: "2024-02-01", description: "Frontend development in progress" },
      { id: 4, name: "Testing & QA", status: "pending", description: "Comprehensive testing and quality assurance" },
      { id: 5, name: "Launch", status: "pending", description: "Final deployment and go-live" }
    ],
    updates: [
      { id: 1, date: "2024-02-10", message: "Frontend development completed. Moving to backend integration.", author: "Comcreate Team" },
      { id: 2, date: "2024-02-08", message: "Design approval received. Starting development phase.", author: "Comcreate Team" },
      { id: 3, date: "2024-02-05", message: "Wireframes completed and ready for your review.", author: "Comcreate Team" }
    ],
    invoices: [
      { id: 1, number: "INV-001", amount: 5000, status: "paid", dueDate: "2024-01-25", paidDate: "2024-01-24", description: "Project initiation and planning" },
      { id: 2, number: "INV-002", amount: 5000, status: "pending", dueDate: "2024-02-25", description: "Design phase completion" },
      { id: 3, number: "INV-003", amount: 5000, status: "draft", dueDate: "2024-03-25", description: "Development phase completion" }
    ],
    deliverables: [
      "Responsive e-commerce website",
      "Admin dashboard",
      "Payment gateway integration",
      "SEO optimization",
      "Mobile app (optional)"
    ]
  },
  {
    id: 2,
    projectName: "Brand Identity Package",
    status: "Completed",
    progress: 100,
    startDate: "2023-12-01",
    endDate: "2024-01-15",
    budget: 8000,
    paidAmount: 8000,
    description: "Complete brand identity including logo design, brand guidelines, and marketing materials.",
    stages: [
      { id: 1, name: "Brand Research", status: "completed", completedAt: "2023-12-10", description: "Market research and competitor analysis completed" },
      { id: 2, name: "Logo Design", status: "completed", completedAt: "2023-12-20", description: "Logo design approved and finalized" },
      { id: 3, name: "Brand Guidelines", status: "completed", completedAt: "2024-01-05", description: "Complete brand guidelines document created" },
      { id: 4, name: "Final Delivery", status: "completed", completedAt: "2024-01-15", description: "All deliverables provided" }
    ],
    updates: [
      { id: 1, date: "2024-01-15", message: "Project completed successfully. All deliverables sent to client.", author: "Comcreate Team" },
      { id: 2, date: "2024-01-10", message: "Brand guidelines document ready for review.", author: "Comcreate Team" }
    ],
    invoices: [
      { id: 1, number: "INV-001", amount: 4000, status: "paid", dueDate: "2023-12-15", paidDate: "2023-12-14", description: "Initial payment" },
      { id: 2, number: "INV-002", amount: 4000, status: "paid", dueDate: "2024-01-15", paidDate: "2024-01-15", description: "Final payment" }
    ],
    deliverables: [
      "Primary logo design",
      "Secondary logo variations",
      "Brand guidelines document",
      "Business card design",
      "Letterhead design",
      "Social media templates"
    ]
  }
];

export default function ClientDashboard() {
  const [projects, setProjects] = useState(testClientProjects);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'pending': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-500';
      case 'in-progress': return 'text-blue-500';
      case 'pending': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const handlePayment = (invoiceId) => {
    // Simulate payment processing
    setProjects(projects.map(project => ({
      ...project,
      invoices: project.invoices.map(invoice => 
        invoice.id === invoiceId 
          ? { ...invoice, status: 'paid', paidDate: new Date().toISOString().split('T')[0] }
          : invoice
      )
    })));
  };

  return (
    <>
      <Head>
        <title>Client Dashboard - Comcreate</title>
        <meta name="description" content="Client dashboard for project tracking and payments" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-magenta-900">
        {/* Header */}
        <div className="bg-black/50 backdrop-blur-lg border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-magenta-400 bg-clip-text text-transparent">
                  Client Dashboard
                </h1>
                <p className="text-gray-300 mt-1">Track your projects, view updates, and manage payments</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/20 px-4 py-2 rounded-lg">
                  <span className="text-purple-300 text-sm">Total Projects: {projects.length}</span>
                </div>
                <div className="bg-magenta-500/20 px-4 py-2 rounded-lg">
                  <span className="text-magenta-300 text-sm">Active: {projects.filter(p => p.status === 'In Progress').length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Projects List */}
            <div className="lg:col-span-1">
              <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-purple-500/20 p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Your Projects</h2>
                <div className="space-y-3">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                        selectedProject?.id === project.id
                          ? 'bg-gradient-to-r from-purple-500/20 to-magenta-500/20 border border-purple-500/40'
                          : 'bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-white">{project.projectName}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
                          project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{project.description.substring(0, 60)}...</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>${project.budget.toLocaleString()}</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-magenta-500 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Details */}
            {selectedProject && (
              <div className="lg:col-span-2">
                <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-purple-500/20 p-6">
                  {/* Project Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-white">{selectedProject.projectName}</h2>
                        <p className="text-purple-300">{selectedProject.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm">Budget</p>
                        <p className="text-white font-semibold">${selectedProject.budget.toLocaleString()}</p>
                        <p className="text-gray-400 text-sm">Paid</p>
                        <p className="text-green-400 font-semibold">${selectedProject.paidAmount.toLocaleString()}</p>
                      </div>
                    </div>
                    
                    {/* Tabs */}
                    <div className="flex space-x-1 bg-gray-800/50 rounded-lg p-1">
                      {['overview', 'scope', 'updates', 'invoices'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                            activeTab === tab
                              ? 'bg-gradient-to-r from-purple-500 to-magenta-500 text-white'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="min-h-[500px]">
                    {activeTab === 'overview' && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="bg-gray-800/50 rounded-lg p-4">
                            <p className="text-gray-400 text-sm">Progress</p>
                            <p className="text-2xl font-bold text-white">{selectedProject.progress}%</p>
                          </div>
                          <div className="bg-gray-800/50 rounded-lg p-4">
                            <p className="text-gray-400 text-sm">Start Date</p>
                            <p className="text-white">{selectedProject.startDate}</p>
                          </div>
                          <div className="bg-gray-800/50 rounded-lg p-4">
                            <p className="text-gray-400 text-sm">End Date</p>
                            <p className="text-white">{selectedProject.endDate}</p>
                          </div>
                          <div className="bg-gray-800/50 rounded-lg p-4">
                            <p className="text-gray-400 text-sm">Remaining</p>
                            <p className="text-white">${(selectedProject.budget - selectedProject.paidAmount).toLocaleString()}</p>
                          </div>
                        </div>
                        
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-white mb-3">Recent Updates</h3>
                          <div className="space-y-3">
                            {selectedProject.updates.slice(0, 3).map((update) => (
                              <div key={update.id} className="border-l-2 border-purple-500 pl-4">
                                <p className="text-white text-sm">{update.message}</p>
                                <p className="text-gray-400 text-xs mt-1">{update.date} by {update.author}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-white mb-3">Project Deliverables</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {selectedProject.deliverables.map((deliverable, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-gray-300 text-sm">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'scope' && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Project Scope & Stages</h3>
                        {selectedProject.stages.map((stage) => (
                          <div key={stage.id} className="bg-gray-800/50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-medium text-white">{stage.name}</h4>
                              <div className="flex items-center space-x-2">
                                <span className={`w-3 h-3 rounded-full ${getStatusColor(stage.status)}`}></span>
                                <span className={`text-sm font-medium ${getStatusTextColor(stage.status)}`}>
                                  {stage.status.replace('-', ' ')}
                                </span>
                              </div>
                            </div>
                            <p className="text-gray-400 text-sm mb-2">{stage.description}</p>
                            {stage.completedAt && (
                              <p className="text-green-400 text-sm">✓ Completed: {stage.completedAt}</p>
                            )}
                            {stage.startedAt && stage.status === 'in-progress' && (
                              <p className="text-blue-400 text-sm">🔄 Started: {stage.startedAt}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'updates' && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Project Updates</h3>
                        <div className="space-y-4">
                          {selectedProject.updates.map((update) => (
                            <div key={update.id} className="bg-gray-800/50 rounded-lg p-4">
                              <p className="text-white">{update.message}</p>
                              <div className="flex items-center justify-between mt-2">
                                <p className="text-gray-400 text-sm">by {update.author}</p>
                                <p className="text-gray-400 text-sm">{update.date}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'invoices' && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Invoices & Payments</h3>
                        <div className="space-y-3">
                          {selectedProject.invoices.map((invoice) => (
                            <div key={invoice.id} className="bg-gray-800/50 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <h4 className="font-medium text-white">{invoice.number}</h4>
                                  <p className="text-gray-400 text-sm">{invoice.description}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-white font-semibold">${invoice.amount.toLocaleString()}</p>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    invoice.status === 'paid' ? 'bg-green-500/20 text-green-300' :
                                    invoice.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300' :
                                    'bg-gray-500/20 text-gray-300'
                                  }`}>
                                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <p className="text-gray-400 text-sm">Due: {invoice.dueDate}</p>
                                {invoice.status === 'pending' && (
                                  <button
                                    onClick={() => handlePayment(invoice.id)}
                                    className="bg-gradient-to-r from-purple-500 to-magenta-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-magenta-600 transition-all duration-300 text-sm"
                                  >
                                    Pay Now
                                  </button>
                                )}
                                {invoice.status === 'paid' && (
                                  <p className="text-green-400 text-sm">✓ Paid: {invoice.paidDate}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 