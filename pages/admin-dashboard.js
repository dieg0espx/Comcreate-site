import { useState, useEffect } from 'react';
import Head from 'next/head';
import { projectService, stageService, updateService, noteService, invoiceService } from '../lib/database';

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [newUpdate, setNewUpdate] = useState('');
  const [newNote, setNewNote] = useState('');

  // Load projects on component mount
  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = await projectService.getProjects();
      setProjects(data);
    } catch (err) {
      setError(err.message);
      console.error('Error loading projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const addUpdate = async (projectId) => {
    if (!newUpdate.trim()) return;
    
    try {
      const updateData = {
        project_id: projectId,
        message: newUpdate,
        author: "Admin"
      };

      const newUpdateRecord = await updateService.createUpdate(updateData);
      
      setProjects(projects.map(project => 
        project.id === projectId 
          ? { ...project, project_updates: [newUpdateRecord, ...project.project_updates] }
          : project
      ));
      setNewUpdate('');
    } catch (err) {
      setError(err.message);
      console.error('Error adding update:', err);
    }
  };

  const addNote = async (projectId) => {
    if (!newNote.trim()) return;
    
    try {
      const noteData = {
        project_id: projectId,
        content: newNote,
        author: "Admin"
      };

      const newNoteRecord = await noteService.createNote(noteData);
      
      setProjects(projects.map(project => 
        project.id === projectId 
          ? { ...project, project_notes: [newNoteRecord, ...project.project_notes] }
          : project
      ));
      setNewNote('');
    } catch (err) {
      setError(err.message);
      console.error('Error adding note:', err);
    }
  };

  const updateStageStatus = async (projectId, stageId, newStatus) => {
    try {
      const now = new Date().toISOString();
      const startedAt = newStatus === 'in_progress' ? now : null;
      const completedAt = newStatus === 'completed' ? now : null;

      await stageService.updateStageStatus(stageId, newStatus, startedAt, completedAt);
      
      setProjects(projects.map(project => 
        project.id === projectId 
          ? {
              ...project,
              project_stages: project.project_stages.map(stage => 
                stage.id === stageId 
                  ? { 
                      ...stage, 
                      status: newStatus,
                      started_at: startedAt,
                      completed_at: completedAt
                    }
                  : stage
              )
            }
          : project
      ));
    } catch (err) {
      setError(err.message);
      console.error('Error updating stage:', err);
    }
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-magenta-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto"></div>
          <p className="text-white mt-4 text-lg">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-magenta-900 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-6 max-w-md">
            <p className="text-red-300 text-lg mb-4">Error loading dashboard</p>
            <p className="text-gray-300 text-sm">{error}</p>
            <button 
              onClick={loadProjects}
              className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

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
                    <span className="text-magenta-300 text-sm">Active: {projects.filter(p => p.status === 'in_progress').length}</span>
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
                        <h3 className="font-medium text-white">{project.client_name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                          project.status === 'in_progress' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {project.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{project.project_name}</p>
                                              <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>${project.budget?.toLocaleString() || 0}</span>
                          <span>{project.progress || 0}%</span>
                        </div>
                                              <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-magenta-500 h-1 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress || 0}%` }}
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
                        <h2 className="text-2xl font-bold text-white">{selectedProject.project_name}</h2>
                        <p className="text-purple-300">{selectedProject.client_name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm">Budget</p>
                        <p className="text-white font-semibold">${selectedProject.budget?.toLocaleString() || 0}</p>
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
                            <p className="text-white">{selectedProject.start_date ? new Date(selectedProject.start_date).toLocaleDateString() : 'Not set'}</p>
                          </div>
                          <div className="bg-gray-800/50 rounded-lg p-4">
                            <p className="text-gray-400 text-sm">End Date</p>
                            <p className="text-white">{selectedProject.end_date ? new Date(selectedProject.end_date).toLocaleDateString() : 'Not set'}</p>
                          </div>
                        </div>
                        
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-white mb-3">Recent Updates</h3>
                          <div className="space-y-3">
                            {selectedProject.project_updates?.slice(0, 3).map((update) => (
                              <div key={update.id} className="border-l-2 border-purple-500 pl-4">
                                <p className="text-white text-sm">{update.message}</p>
                                <p className="text-gray-400 text-xs mt-1">{new Date(update.created_at).toLocaleDateString()} by {update.author}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'stages' && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Project Stages</h3>
                        {selectedProject.project_stages?.map((stage) => (
                          <div key={stage.id} className="bg-gray-800/50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-medium text-white">{stage.name}</h4>
                              <div className="flex items-center space-x-2">
                                <span className={`w-3 h-3 rounded-full ${getStatusColor(stage.status)}`}></span>
                                <span className={`text-sm font-medium ${getStatusTextColor(stage.status)}`}>
                                  {stage.status.replace('_', ' ')}
                                </span>
                                <select
                                  value={stage.status}
                                  onChange={(e) => updateStageStatus(selectedProject.id, stage.id, e.target.value)}
                                  className="bg-gray-700 text-white text-sm rounded px-2 py-1 border border-gray-600"
                                >
                                  <option value="pending">Pending</option>
                                  <option value="in_progress">In Progress</option>
                                  <option value="completed">Completed</option>
                                </select>
                              </div>
                            </div>
                            {stage.completed_at && (
                              <p className="text-gray-400 text-sm">Completed: {new Date(stage.completed_at).toLocaleDateString()}</p>
                            )}
                            {stage.started_at && stage.status === 'in_progress' && (
                              <p className="text-gray-400 text-sm">Started: {new Date(stage.started_at).toLocaleDateString()}</p>
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
                          {selectedProject.project_updates?.map((update) => (
                            <div key={update.id} className="bg-gray-800/50 rounded-lg p-4">
                              <p className="text-white">{update.message}</p>
                              <div className="flex items-center justify-between mt-2">
                                <p className="text-gray-400 text-sm">by {update.author}</p>
                                <p className="text-gray-400 text-sm">{new Date(update.created_at).toLocaleDateString()}</p>
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
                          {selectedProject.project_notes?.map((note) => (
                            <div key={note.id} className="bg-gray-800/50 rounded-lg p-4">
                              <p className="text-white">{note.content}</p>
                              <div className="flex items-center justify-between mt-2">
                                <p className="text-gray-400 text-sm">by {note.author}</p>
                                <p className="text-gray-400 text-sm">{new Date(note.created_at).toLocaleDateString()}</p>
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
                          {selectedProject.invoices?.map((invoice) => (
                            <div key={invoice.id} className="bg-gray-800/50 rounded-lg p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-medium text-white">{invoice.invoice_number}</h4>
                                  <p className="text-gray-400 text-sm">Due: {new Date(invoice.due_date).toLocaleDateString()}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-white font-semibold">${invoice.amount?.toLocaleString() || 0}</p>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    invoice.status === 'paid' ? 'bg-green-500/20 text-green-300' :
                                    invoice.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300' :
                                    'bg-gray-500/20 text-gray-300'
                                  }`}>
                                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                                  </span>
                                </div>
                              </div>
                              {invoice.paid_date && (
                                <p className="text-gray-400 text-sm mt-2">Paid: {new Date(invoice.paid_date).toLocaleDateString()}</p>
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