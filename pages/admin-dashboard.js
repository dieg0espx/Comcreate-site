import { useState } from 'react';
import Head from 'next/head';

// Test data for projects
const testProjects = [
  {
    id: 1,
    clientName: "TechStart Inc.",
    projectName: "E-commerce Website Redesign",
    status: "In Progress",
    progress: 65,
    startDate: "2024-01-15",
    endDate: "2024-03-15",
    budget: 15000,
    stages: [
      { id: 1, name: "Discovery & Planning", status: "completed", completedAt: "2024-01-20" },
      { id: 2, name: "Design & Wireframes", status: "completed", completedAt: "2024-01-30" },
      { id: 3, name: "Development", status: "in-progress", startedAt: "2024-02-01" },
      { id: 4, name: "Testing & QA", status: "pending" },
      { id: 5, name: "Launch", status: "pending" }
    ],
    updates: [
      { id: 1, date: "2024-02-10", message: "Frontend development completed. Moving to backend integration.", author: "Admin" },
      { id: 2, date: "2024-02-08", message: "Design approval received from client. Starting development phase.", author: "Admin" }
    ],
    notes: [
      { id: 1, date: "2024-02-10", content: "Client requested additional payment gateway integration", author: "Admin" },
      { id: 2, date: "2024-02-05", content: "Need to schedule client meeting for final review", author: "Admin" }
    ],
    invoices: [
      { id: 1, number: "INV-001", amount: 5000, status: "paid", dueDate: "2024-01-25", paidDate: "2024-01-24" },
      { id: 2, number: "INV-002", amount: 5000, status: "pending", dueDate: "2024-02-25" },
      { id: 3, number: "INV-003", amount: 5000, status: "draft", dueDate: "2024-03-25" }
    ]
  },
  {
    id: 2,
    clientName: "Green Solutions",
    projectName: "Brand Identity Package",
    status: "Completed",
    progress: 100,
    startDate: "2023-12-01",
    endDate: "2024-01-15",
    budget: 8000,
    stages: [
      { id: 1, name: "Brand Research", status: "completed", completedAt: "2023-12-10" },
      { id: 2, name: "Logo Design", status: "completed", completedAt: "2023-12-20" },
      { id: 3, name: "Brand Guidelines", status: "completed", completedAt: "2024-01-05" },
      { id: 4, name: "Final Delivery", status: "completed", completedAt: "2024-01-15" }
    ],
    updates: [
      { id: 1, date: "2024-01-15", message: "Project completed successfully. All deliverables sent to client.", author: "Admin" }
    ],
    notes: [
      { id: 1, date: "2024-01-15", content: "Client very satisfied with final results", author: "Admin" }
    ],
    invoices: [
      { id: 1, number: "INV-001", amount: 4000, status: "paid", dueDate: "2023-12-15", paidDate: "2023-12-14" },
      { id: 2, number: "INV-002", amount: 4000, status: "paid", dueDate: "2024-01-15", paidDate: "2024-01-15" }
    ]
  },
  {
    id: 3,
    clientName: "Fitness Pro",
    projectName: "SEO Optimization Campaign",
    status: "Planning",
    progress: 15,
    startDate: "2024-02-01",
    endDate: "2024-05-01",
    budget: 12000,
    stages: [
      { id: 1, name: "SEO Audit", status: "completed", completedAt: "2024-02-05" },
      { id: 2, name: "Keyword Research", status: "in-progress", startedAt: "2024-02-06" },
      { id: 3, name: "Content Strategy", status: "pending" },
      { id: 4, name: "Implementation", status: "pending" },
      { id: 5, name: "Monitoring", status: "pending" }
    ],
    updates: [
      { id: 1, date: "2024-02-05", message: "SEO audit completed. Found 15 critical issues to address.", author: "Admin" }
    ],
    notes: [
      { id: 1, date: "2024-02-05", content: "Client wants to focus on local SEO for gym locations", author: "Admin" }
    ],
    invoices: [
      { id: 1, number: "INV-001", amount: 3000, status: "paid", dueDate: "2024-02-01", paidDate: "2024-02-01" },
      { id: 2, number: "INV-002", amount: 3000, status: "pending", dueDate: "2024-03-01" },
      { id: 3, number: "INV-003", amount: 3000, status: "draft", dueDate: "2024-04-01" },
      { id: 4, number: "INV-004", amount: 3000, status: "draft", dueDate: "2024-05-01" }
    ]
  }
];

export default function AdminDashboard() {
  const [projects, setProjects] = useState(testProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [newUpdate, setNewUpdate] = useState('');
  const [newNote, setNewNote] = useState('');

  const addUpdate = (projectId) => {
    if (!newUpdate.trim()) return;
    
    const update = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      message: newUpdate,
      author: "Admin"
    };

    setProjects(projects.map(project => 
      project.id === projectId 
        ? { ...project, updates: [update, ...project.updates] }
        : project
    ));
    setNewUpdate('');
  };

  const addNote = (projectId) => {
    if (!newNote.trim()) return;
    
    const note = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      content: newNote,
      author: "Admin"
    };

    setProjects(projects.map(project => 
      project.id === projectId 
        ? { ...project, notes: [note, ...project.notes] }
        : project
    ));
    setNewNote('');
  };

  const updateStageStatus = (projectId, stageId, newStatus) => {
    setProjects(projects.map(project => 
      project.id === projectId 
        ? {
            ...project,
            stages: project.stages.map(stage => 
              stage.id === stageId 
                ? { 
                    ...stage, 
                    status: newStatus,
                    ...(newStatus === 'completed' && { completedAt: new Date().toISOString().split('T')[0] }),
                    ...(newStatus === 'in-progress' && { startedAt: new Date().toISOString().split('T')[0] })
                  }
                : stage
            )
          }
        : project
    ));
  };

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

  return (
    <>
      <Head>
        <title>Admin Dashboard - Comcreate</title>
        <meta name="description" content="Admin dashboard for project management" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-magenta-900">
        {/* Header */}
        <div className="bg-black/50 backdrop-blur-lg border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-magenta-400 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-gray-300 mt-1">Manage projects, updates, and client communications</p>
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
                <h2 className="text-xl font-semibold text-white mb-4">Projects</h2>
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
                        <h3 className="font-medium text-white">{project.clientName}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
                          project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{project.projectName}</p>
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
                        <p className="text-purple-300">{selectedProject.clientName}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm">Budget</p>
                        <p className="text-white font-semibold">${selectedProject.budget.toLocaleString()}</p>
                      </div>
                    </div>
                    
                    {/* Tabs */}
                    <div className="flex space-x-1 bg-gray-800/50 rounded-lg p-1">
                      {['overview', 'stages', 'updates', 'notes', 'invoices'].map((tab) => (
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      </div>
                    )}

                    {activeTab === 'stages' && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Project Stages</h3>
                        {selectedProject.stages.map((stage) => (
                          <div key={stage.id} className="bg-gray-800/50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-medium text-white">{stage.name}</h4>
                              <div className="flex items-center space-x-2">
                                <span className={`w-3 h-3 rounded-full ${getStatusColor(stage.status)}`}></span>
                                <span className={`text-sm font-medium ${getStatusTextColor(stage.status)}`}>
                                  {stage.status.replace('-', ' ')}
                                </span>
                                <select
                                  value={stage.status}
                                  onChange={(e) => updateStageStatus(selectedProject.id, stage.id, e.target.value)}
                                  className="bg-gray-700 text-white text-sm rounded px-2 py-1 border border-gray-600"
                                >
                                  <option value="pending">Pending</option>
                                  <option value="in-progress">In Progress</option>
                                  <option value="completed">Completed</option>
                                </select>
                              </div>
                            </div>
                            {stage.completedAt && (
                              <p className="text-gray-400 text-sm">Completed: {stage.completedAt}</p>
                            )}
                            {stage.startedAt && stage.status === 'in-progress' && (
                              <p className="text-gray-400 text-sm">Started: {stage.startedAt}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'updates' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-white">Project Updates</h3>
                        </div>
                        
                        {/* Add Update Form */}
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <textarea
                            value={newUpdate}
                            onChange={(e) => setNewUpdate(e.target.value)}
                            placeholder="Add a new update..."
                            className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none resize-none"
                            rows="3"
                          />
                          <button
                            onClick={() => addUpdate(selectedProject.id)}
                            className="mt-3 bg-gradient-to-r from-purple-500 to-magenta-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-magenta-600 transition-all duration-300"
                          >
                            Add Update
                          </button>
                        </div>

                        {/* Updates List */}
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

                    {activeTab === 'notes' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-white">Project Notes</h3>
                        </div>
                        
                        {/* Add Note Form */}
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <textarea
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            placeholder="Add a new note..."
                            className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none resize-none"
                            rows="3"
                          />
                          <button
                            onClick={() => addNote(selectedProject.id)}
                            className="mt-3 bg-gradient-to-r from-purple-500 to-magenta-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-magenta-600 transition-all duration-300"
                          >
                            Add Note
                          </button>
                        </div>

                        {/* Notes List */}
                        <div className="space-y-4">
                          {selectedProject.notes.map((note) => (
                            <div key={note.id} className="bg-gray-800/50 rounded-lg p-4">
                              <p className="text-white">{note.content}</p>
                              <div className="flex items-center justify-between mt-2">
                                <p className="text-gray-400 text-sm">by {note.author}</p>
                                <p className="text-gray-400 text-sm">{note.date}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'invoices' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-white">Invoices</h3>
                          <button className="bg-gradient-to-r from-purple-500 to-magenta-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-magenta-600 transition-all duration-300">
                            Create Invoice
                          </button>
                        </div>
                        
                        <div className="space-y-3">
                          {selectedProject.invoices.map((invoice) => (
                            <div key={invoice.id} className="bg-gray-800/50 rounded-lg p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-medium text-white">{invoice.number}</h4>
                                  <p className="text-gray-400 text-sm">Due: {invoice.dueDate}</p>
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
                              {invoice.paidDate && (
                                <p className="text-gray-400 text-sm mt-2">Paid: {invoice.paidDate}</p>
                              )}
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