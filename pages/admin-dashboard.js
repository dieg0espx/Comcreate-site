import { useState, useEffect } from 'react';
import Head from 'next/head';
import { projectService, stageService, updateService, noteService, invoiceService } from '../lib/database';

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [newUpdate, setNewUpdate] = useState('');
  const [newNote, setNewNote] = useState('');
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [newProject, setNewProject] = useState({
    client_name: '',
    project_name: '',
    description: '',
    budget: '',
    start_date: '',
    end_date: ''
  });
  const [editingProject, setEditingProject] = useState(false);
  const [newInvoice, setNewInvoice] = useState({
    invoice_number: '',
    amount: '',
    description: '',
    due_date: ''
  });
  const [showCreateStage, setShowCreateStage] = useState(false);
  const [newStage, setNewStage] = useState({
    name: '',
    description: '',
    estimated_duration: '',
    order_index: 0
  });
  const [editingStage, setEditingStage] = useState(null);
  const [updatingStage, setUpdatingStage] = useState(null);

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
      setSuccess('Update added successfully!');
      setTimeout(() => setSuccess(null), 3000);
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
      setSuccess('Note added successfully!');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.message);
      console.error('Error adding note:', err);
    }
  };

  const updateStageStatus = async (projectId, stageId, newStatus) => {
    try {
      setUpdatingStage(stageId);
      const now = new Date().toISOString();
      const startedAt = newStatus === 'in_progress' ? now : null;
      const completedAt = newStatus === 'completed' ? now : null;

      await stageService.updateStageStatus(stageId, newStatus, startedAt, completedAt);
      
      // Update projects state
      const updatedProjects = projects.map(project => 
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
      );
      
      setProjects(updatedProjects);
      
      // Update selected project state immediately
      if (selectedProject && selectedProject.id === projectId) {
        const updatedSelectedProject = updatedProjects.find(p => p.id === projectId);
        setSelectedProject(updatedSelectedProject);
      }
      
      setSuccess(`Stage status updated to ${newStatus.replace('_', ' ')}!`);
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.message);
      console.error('Error updating stage:', err);
    } finally {
      setUpdatingStage(null);
    }
  };

  const createProject = async () => {
    try {
      const projectData = {
        ...newProject,
        budget: parseFloat(newProject.budget) || 0,
        status: 'planning',
        progress: 0
      };

      const createdProject = await projectService.createProject(projectData);
      setProjects([createdProject, ...projects]);
      setShowCreateProject(false);
      setNewProject({
        client_name: '',
        project_name: '',
        description: '',
        budget: '',
        start_date: '',
        end_date: ''
      });
      setSuccess('Project created successfully!');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.message);
      console.error('Error creating project:', err);
    }
  };

  const updateProject = async (projectId, updates) => {
    try {
      const updatedProject = await projectService.updateProject(projectId, updates);
      setProjects(projects.map(project => 
        project.id === projectId ? updatedProject : project
      ));
      setSelectedProject(updatedProject);
      setEditingProject(false);
    } catch (err) {
      setError(err.message);
      console.error('Error updating project:', err);
    }
  };

  const createInvoice = async (projectId) => {
    try {
      const invoiceData = {
        project_id: projectId,
        invoice_number: newInvoice.invoice_number,
        amount: parseFloat(newInvoice.amount) || 0,
        description: newInvoice.description,
        due_date: newInvoice.due_date,
        status: 'draft'
      };

      const createdInvoice = await invoiceService.createInvoice(invoiceData);
      
      setProjects(projects.map(project => 
        project.id === projectId 
          ? { ...project, invoices: [createdInvoice, ...(project.invoices || [])] }
          : project
      ));
      
      setNewInvoice({
        invoice_number: '',
        amount: '',
        description: '',
        due_date: ''
      });
    } catch (err) {
      setError(err.message);
      console.error('Error creating invoice:', err);
    }
  };

  const updateInvoiceStatus = async (projectId, invoiceId, status) => {
    try {
      const paidDate = status === 'paid' ? new Date().toISOString() : null;
      await invoiceService.updateInvoiceStatus(invoiceId, status, paidDate);
      
      setProjects(projects.map(project => 
        project.id === projectId 
          ? {
              ...project,
              invoices: project.invoices.map(invoice => 
                invoice.id === invoiceId 
                  ? { ...invoice, status, paid_date: paidDate }
                  : invoice
              )
            }
          : project
      ));
    } catch (err) {
      setError(err.message);
      console.error('Error updating invoice:', err);
    }
  };

  const createStage = async (projectId) => {
    try {
      const stageData = {
        project_id: projectId,
        name: newStage.name,
        description: newStage.description,
        estimated_duration: parseInt(newStage.estimated_duration) || 0,
        order_index: parseInt(newStage.order_index) || 0,
        status: 'pending'
      };

      const createdStage = await stageService.createStage(stageData);
      
      // Update projects state
      const updatedProjects = projects.map(project => 
        project.id === projectId 
          ? { 
              ...project, 
              project_stages: [...(project.project_stages || []), createdStage].sort((a, b) => a.order_index - b.order_index)
            }
          : project
      );
      
      setProjects(updatedProjects);
      
      // Update selected project state immediately
      if (selectedProject && selectedProject.id === projectId) {
        const updatedSelectedProject = updatedProjects.find(p => p.id === projectId);
        setSelectedProject(updatedSelectedProject);
      }
      
      setShowCreateStage(false);
      setNewStage({
        name: '',
        description: '',
        estimated_duration: '',
        order_index: 0
      });
      setSuccess('Stage created successfully!');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.message);
      console.error('Error creating stage:', err);
    }
  };

  const updateStage = async (projectId, stageId, updates) => {
    try {
      const updatedStage = await stageService.updateStage(stageId, updates);
      
      // Update projects state
      const updatedProjects = projects.map(project => 
        project.id === projectId 
          ? {
              ...project,
              project_stages: project.project_stages.map(stage => 
                stage.id === stageId ? updatedStage : stage
              )
            }
          : project
      );
      
      setProjects(updatedProjects);
      
      // Update selected project state immediately
      if (selectedProject && selectedProject.id === projectId) {
        const updatedSelectedProject = updatedProjects.find(p => p.id === projectId);
        setSelectedProject(updatedSelectedProject);
      }
      
      setEditingStage(null);
      setSuccess('Stage updated successfully!');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.message);
      console.error('Error updating stage:', err);
    }
  };

  const deleteStage = async (projectId, stageId) => {
    if (!confirm('Are you sure you want to delete this stage?')) return;
    
    try {
      await stageService.deleteStage(stageId);
      
      // Update projects state
      const updatedProjects = projects.map(project => 
        project.id === projectId 
          ? {
              ...project,
              project_stages: project.project_stages.filter(stage => stage.id !== stageId)
            }
          : project
      );
      
      setProjects(updatedProjects);
      
      // Update selected project state immediately
      if (selectedProject && selectedProject.id === projectId) {
        const updatedSelectedProject = updatedProjects.find(p => p.id === projectId);
        setSelectedProject(updatedSelectedProject);
      }
      
      setSuccess('Stage deleted successfully!');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.message);
      console.error('Error deleting stage:', err);
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
                <button 
                  onClick={() => setShowCreateProject(true)}
                  className="group px-4 py-2 rounded-full border-2 border-purple-400 text-white text-sm font-medium bg-transparent hover:border-transparent transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">+ New Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-magenta-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button 
                  onClick={() => window.open('/test-connection', '_blank')}
                  className="group px-4 py-2 rounded-full border-2 border-blue-400 text-white text-sm font-medium bg-transparent hover:border-transparent transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Test DB</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Success/Error Messages */}
          {success && (
            <div className="mb-6 bg-green-500/20 border border-green-500/40 rounded-lg p-4">
              <p className="text-green-300">{success}</p>
            </div>
          )}
          {error && (
            <div className="mb-6 bg-red-500/20 border border-red-500/40 rounded-lg p-4">
              <p className="text-red-300">{error}</p>
              <button 
                onClick={() => setError(null)}
                className="text-red-400 hover:text-red-300 text-sm mt-2"
              >
                Dismiss
              </button>
            </div>
          )}
          
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
                          <p className="text-gray-400 text-sm mt-1">{selectedProject.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-2">
                            <button
                              onClick={() => setEditingProject(!editingProject)}
                              className="text-purple-400 hover:text-purple-300 transition-colors"
                            >
                              {editingProject ? 'Cancel' : 'Edit'}
                            </button>
                          </div>
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
                        {editingProject ? (
                          <div className="bg-gray-800/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-4">Edit Project</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-gray-300 text-sm mb-2">Project Name</label>
                                <input
                                  type="text"
                                  defaultValue={selectedProject.project_name}
                                  className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                  id="edit-project-name"
                                />
                              </div>
                              <div>
                                <label className="block text-gray-300 text-sm mb-2">Client Name</label>
                                <input
                                  type="text"
                                  defaultValue={selectedProject.client_name}
                                  className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                  id="edit-client-name"
                                />
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-gray-300 text-sm mb-2">Description</label>
                                <textarea
                                  defaultValue={selectedProject.description}
                                  className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none resize-none"
                                  rows="3"
                                  id="edit-description"
                                />
                              </div>
                              <div>
                                <label className="block text-gray-300 text-sm mb-2">Budget</label>
                                <input
                                  type="number"
                                  defaultValue={selectedProject.budget}
                                  className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                  id="edit-budget"
                                />
                              </div>
                              <div>
                                <label className="block text-gray-300 text-sm mb-2">Progress (%)</label>
                                <input
                                  type="number"
                                  min="0"
                                  max="100"
                                  defaultValue={selectedProject.progress}
                                  className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                  id="edit-progress"
                                />
                              </div>
                              <div>
                                <label className="block text-gray-300 text-sm mb-2">Start Date</label>
                                <input
                                  type="date"
                                  defaultValue={selectedProject.start_date}
                                  className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                  id="edit-start-date"
                                />
                              </div>
                              <div>
                                <label className="block text-gray-300 text-sm mb-2">End Date</label>
                                <input
                                  type="date"
                                  defaultValue={selectedProject.end_date}
                                  className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                  id="edit-end-date"
                                />
                              </div>
                              <div>
                                <label className="block text-gray-300 text-sm mb-2">Status</label>
                                <select
                                  defaultValue={selectedProject.status}
                                  className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                  id="edit-status"
                                >
                                  <option value="planning">Planning</option>
                                  <option value="in_progress">In Progress</option>
                                  <option value="completed">Completed</option>
                                  <option value="on_hold">On Hold</option>
                                </select>
                              </div>
                            </div>
                            <div className="flex gap-3 mt-4">
                              <button
                                onClick={() => {
                                  const updates = {
                                    project_name: document.getElementById('edit-project-name').value,
                                    client_name: document.getElementById('edit-client-name').value,
                                    description: document.getElementById('edit-description').value,
                                    budget: parseFloat(document.getElementById('edit-budget').value) || 0,
                                    progress: parseInt(document.getElementById('edit-progress').value) || 0,
                                    start_date: document.getElementById('edit-start-date').value,
                                    end_date: document.getElementById('edit-end-date').value,
                                    status: document.getElementById('edit-status').value
                                  };
                                  updateProject(selectedProject.id, updates);
                                }}
                                className="bg-gradient-to-r from-purple-500 to-magenta-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-magenta-600 transition-all duration-300"
                              >
                                Save Changes
                              </button>
                              <button
                                onClick={() => setEditingProject(false)}
                                className="border-2 border-gray-600 text-white px-4 py-2 rounded-lg hover:border-gray-500 transition-all duration-300"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <>
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
                          </>
                        )}
                      </div>
                    )}

                    {activeTab === 'stages' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-white">Project Stages</h3>
                          <button 
                            onClick={() => setShowCreateStage(true)}
                            className="group px-4 py-2 rounded-full border-2 border-purple-400 text-white text-sm font-medium bg-transparent hover:border-transparent transition-all duration-300 relative overflow-hidden"
                          >
                            <span className="relative z-10">+ Add Stage</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-magenta-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </button>
                        </div>

                        {/* Create Stage Modal */}
                        {showCreateStage && (
                          <div className="bg-gray-800/50 rounded-lg p-4">
                            <h4 className="text-lg font-semibold text-white mb-4">Add New Stage</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-gray-300 text-sm mb-2">Stage Name</label>
                                <input
                                  type="text"
                                  value={newStage.name}
                                  onChange={(e) => setNewStage({...newStage, name: e.target.value})}
                                  className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                  placeholder="e.g., Design Phase"
                                />
                              </div>
                              <div>
                                <label className="block text-gray-300 text-sm mb-2">Order Index</label>
                                <input
                                  type="number"
                                  value={newStage.order_index}
                                  onChange={(e) => setNewStage({...newStage, order_index: e.target.value})}
                                  className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                  placeholder="1"
                                />
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-gray-300 text-sm mb-2">Description</label>
                                <textarea
                                  value={newStage.description}
                                  onChange={(e) => setNewStage({...newStage, description: e.target.value})}
                                  className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none resize-none"
                                  rows="3"
                                  placeholder="Describe what this stage involves..."
                                />
                              </div>
                              <div>
                                <label className="block text-gray-300 text-sm mb-2">Estimated Duration (days)</label>
                                <input
                                  type="number"
                                  value={newStage.estimated_duration}
                                  onChange={(e) => setNewStage({...newStage, estimated_duration: e.target.value})}
                                  className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                  placeholder="7"
                                />
                              </div>
                            </div>
                            <div className="flex gap-3 mt-4">
                              <button
                                onClick={() => createStage(selectedProject.id)}
                                className="bg-gradient-to-r from-purple-500 to-magenta-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-magenta-600 transition-all duration-300"
                              >
                                Create Stage
                              </button>
                              <button
                                onClick={() => setShowCreateStage(false)}
                                className="border-2 border-gray-600 text-white px-4 py-2 rounded-lg hover:border-gray-500 transition-all duration-300"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Stages List */}
                        <div className="space-y-4">
                          {selectedProject.project_stages?.length === 0 ? (
                            <div className="text-center py-8">
                              <p className="text-gray-400">No stages created yet. Add your first stage to get started!</p>
                            </div>
                          ) : (
                            selectedProject.project_stages?.map((stage) => (
                              <div key={stage.id} className="bg-gray-800/50 rounded-lg p-4">
                                {editingStage === stage.id ? (
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="block text-gray-300 text-sm mb-2">Stage Name</label>
                                        <input
                                          type="text"
                                          defaultValue={stage.name}
                                          className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                          id={`edit-stage-name-${stage.id}`}
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-gray-300 text-sm mb-2">Order Index</label>
                                        <input
                                          type="number"
                                          defaultValue={stage.order_index}
                                          className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                          id={`edit-stage-order-${stage.id}`}
                                        />
                                      </div>
                                      <div className="md:col-span-2">
                                        <label className="block text-gray-300 text-sm mb-2">Description</label>
                                        <textarea
                                          defaultValue={stage.description}
                                          className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none resize-none"
                                          rows="3"
                                          id={`edit-stage-description-${stage.id}`}
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-gray-300 text-sm mb-2">Estimated Duration (days)</label>
                                        <input
                                          type="number"
                                          defaultValue={stage.estimated_duration}
                                          className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                          id={`edit-stage-duration-${stage.id}`}
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-gray-300 text-sm mb-2">Status</label>
                                        <select
                                          defaultValue={stage.status}
                                          className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                          id={`edit-stage-status-${stage.id}`}
                                        >
                                          <option value="pending">Pending</option>
                                          <option value="in_progress">In Progress</option>
                                          <option value="completed">Completed</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="flex gap-3">
                                      <button
                                        onClick={() => {
                                          const updates = {
                                            name: document.getElementById(`edit-stage-name-${stage.id}`).value,
                                            description: document.getElementById(`edit-stage-description-${stage.id}`).value,
                                            order_index: parseInt(document.getElementById(`edit-stage-order-${stage.id}`).value) || 0,
                                            estimated_duration: parseInt(document.getElementById(`edit-stage-duration-${stage.id}`).value) || 0,
                                            status: document.getElementById(`edit-stage-status-${stage.id}`).value
                                          };
                                          updateStage(selectedProject.id, stage.id, updates);
                                        }}
                                        className="bg-gradient-to-r from-purple-500 to-magenta-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-magenta-600 transition-all duration-300"
                                      >
                                        Save Changes
                                      </button>
                                      <button
                                        onClick={() => setEditingStage(null)}
                                        className="border-2 border-gray-600 text-white px-4 py-2 rounded-lg hover:border-gray-500 transition-all duration-300"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <div>
                                    <div className="flex items-center justify-between mb-3">
                                      <div className="flex items-center space-x-3">
                                        <h4 className="font-medium text-white">{stage.name}</h4>
                                        <span className="text-gray-400 text-sm">#{stage.order_index}</span>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <span className={`w-3 h-3 rounded-full ${getStatusColor(stage.status)}`}></span>
                                        <span className={`text-sm font-medium ${getStatusTextColor(stage.status)}`}>
                                          {stage.status.replace('_', ' ')}
                                        </span>
                                        <select
                                          value={stage.status}
                                          onChange={(e) => updateStageStatus(selectedProject.id, stage.id, e.target.value)}
                                          disabled={updatingStage === stage.id}
                                          className={`bg-gray-700 text-white text-sm rounded px-2 py-1 border border-gray-600 ${
                                            updatingStage === stage.id ? 'opacity-50 cursor-not-allowed' : ''
                                          }`}
                                        >
                                          <option value="pending">Pending</option>
                                          <option value="in_progress">In Progress</option>
                                          <option value="completed">Completed</option>
                                        </select>
                                        {updatingStage === stage.id && (
                                          <div className="ml-2">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-500"></div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                    
                                    {stage.description && (
                                      <p className="text-gray-300 text-sm mb-2">{stage.description}</p>
                                    )}
                                    
                                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                                      {stage.estimated_duration > 0 && (
                                        <span>Est. Duration: {stage.estimated_duration} days</span>
                                      )}
                                      <div className="flex items-center space-x-2">
                                        <button
                                          onClick={() => setEditingStage(stage.id)}
                                          className="text-purple-400 hover:text-purple-300 transition-colors"
                                        >
                                          Edit
                                        </button>
                                        <button
                                          onClick={() => deleteStage(selectedProject.id, stage.id)}
                                          className="text-red-400 hover:text-red-300 transition-colors"
                                        >
                                          Delete
                                        </button>
                                      </div>
                                    </div>
                                    
                                    {stage.completed_at && (
                                      <p className="text-green-400 text-sm">✅ Completed: {new Date(stage.completed_at).toLocaleDateString()}</p>
                                    )}
                                    {stage.started_at && stage.status === 'in_progress' && (
                                      <p className="text-blue-400 text-sm">🔄 Started: {new Date(stage.started_at).toLocaleDateString()}</p>
                                    )}
                                  </div>
                                )}
                              </div>
                            ))
                          )}
                        </div>
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
                          <button 
                            onClick={() => setActiveTab('create-invoice')}
                            className="group px-4 py-2 rounded-full border-2 border-purple-400 text-white text-sm font-medium bg-transparent hover:border-transparent transition-all duration-300 relative overflow-hidden"
                          >
                            <span className="relative z-10">+ Create Invoice</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-magenta-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </button>
                        </div>
                        
                        {/* Create Invoice Form */}
                        {activeTab === 'create-invoice' && (
                          <div className="bg-gray-800/50 rounded-lg p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-gray-300 text-sm mb-2">Invoice Number</label>
                                <input
                                  type="text"
                                  value={newInvoice.invoice_number}
                                  onChange={(e) => setNewInvoice({...newInvoice, invoice_number: e.target.value})}
                                  className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                  placeholder="INV-001"
                                />
                              </div>
                              <div>
                                <label className="block text-gray-300 text-sm mb-2">Amount</label>
                                <input
                                  type="number"
                                  value={newInvoice.amount}
                                  onChange={(e) => setNewInvoice({...newInvoice, amount: e.target.value})}
                                  className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                                  placeholder="0.00"
                                />
                              </div>
                            </div>
                            <div className="mt-4">
                              <label className="block text-gray-300 text-sm mb-2">Description</label>
                              <textarea
                                value={newInvoice.description}
                                onChange={(e) => setNewInvoice({...newInvoice, description: e.target.value})}
                                className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none resize-none"
                                rows="2"
                                placeholder="Invoice description"
                              />
                            </div>
                            <div className="mt-4">
                              <label className="block text-gray-300 text-sm mb-2">Due Date</label>
                              <input
                                type="date"
                                value={newInvoice.due_date}
                                onChange={(e) => setNewInvoice({...newInvoice, due_date: e.target.value})}
                                className="w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                              />
                            </div>
                            <div className="flex gap-3 mt-4">
                              <button
                                onClick={() => createInvoice(selectedProject.id)}
                                className="bg-gradient-to-r from-purple-500 to-magenta-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-magenta-600 transition-all duration-300"
                              >
                                Create Invoice
                              </button>
                              <button
                                onClick={() => setActiveTab('invoices')}
                                className="border-2 border-gray-600 text-white px-4 py-2 rounded-lg hover:border-gray-500 transition-all duration-300"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        )}
                        
                        <div className="space-y-3">
                          {selectedProject.invoices?.map((invoice) => (
                            <div key={invoice.id} className="bg-gray-800/50 rounded-lg p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-medium text-white">{invoice.invoice_number}</h4>
                                  <p className="text-gray-400 text-sm">Due: {new Date(invoice.due_date).toLocaleDateString()}</p>
                                  {invoice.description && (
                                    <p className="text-gray-400 text-sm mt-1">{invoice.description}</p>
                                  )}
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
                                  <div className="mt-2">
                                    <select
                                      value={invoice.status}
                                      onChange={(e) => updateInvoiceStatus(selectedProject.id, invoice.id, e.target.value)}
                                      className="bg-gray-700 text-white text-xs rounded px-2 py-1 border border-gray-600"
                                    >
                                      <option value="draft">Draft</option>
                                      <option value="pending">Pending</option>
                                      <option value="paid">Paid</option>
                                    </select>
                                  </div>
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

      {/* Create Project Modal */}
      {showCreateProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black/90 backdrop-blur-lg rounded-2xl border border-purple-500/20 p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Create New Project</h3>
              <button
                onClick={() => setShowCreateProject(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Client Name</label>
                <input
                  type="text"
                  value={newProject.client_name}
                  onChange={(e) => setNewProject({...newProject, client_name: e.target.value})}
                  className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                  placeholder="Enter client name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm mb-2">Project Name</label>
                <input
                  type="text"
                  value={newProject.project_name}
                  onChange={(e) => setNewProject({...newProject, project_name: e.target.value})}
                  className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                  placeholder="Enter project name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm mb-2">Description</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none resize-none"
                  rows="3"
                  placeholder="Enter project description"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Budget</label>
                  <input
                    type="number"
                    value={newProject.budget}
                    onChange={(e) => setNewProject({...newProject, budget: e.target.value})}
                    className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                    placeholder="0.00"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Start Date</label>
                  <input
                    type="date"
                    value={newProject.start_date}
                    onChange={(e) => setNewProject({...newProject, start_date: e.target.value})}
                    className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm mb-2">End Date</label>
                <input
                  type="date"
                  value={newProject.end_date}
                  onChange={(e) => setNewProject({...newProject, end_date: e.target.value})}
                  className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-600 focus:border-purple-500 focus:outline-none"
                />
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                onClick={createProject}
                className="flex-1 bg-gradient-to-r from-purple-500 to-magenta-500 text-white py-3 rounded-lg hover:from-purple-600 hover:to-magenta-600 transition-all duration-300"
              >
                Create Project
              </button>
              <button
                onClick={() => setShowCreateProject(false)}
                className="flex-1 border-2 border-gray-600 text-white py-3 rounded-lg hover:border-gray-500 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 