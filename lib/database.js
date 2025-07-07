import { supabase } from './supabase'

// Project operations
export const projectService = {
  // Get all projects (admin) or user's projects (client)
  async getProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        project_stages(*),
        project_updates(*),
        project_notes(*),
        project_deliverables(*),
        invoices(*)
      `)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Get single project with all related data
  async getProject(id) {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        project_stages(*),
        project_updates(*),
        project_notes(*),
        project_deliverables(*),
        invoices(*)
      `)
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  },

  // Create new project
  async createProject(projectData) {
    const { data, error } = await supabase
      .from('projects')
      .insert(projectData)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Update project
  async updateProject(id, updates) {
    const { data, error } = await supabase
      .from('projects')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Delete project
  async deleteProject(id) {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)

    if (error) throw error
  }
}

// Stage operations
export const stageService = {
  // Get stages for a project
  async getProjectStages(projectId) {
    const { data, error } = await supabase
      .from('project_stages')
      .select('*')
      .eq('project_id', projectId)
      .order('order_index', { ascending: true })

    if (error) throw error
    return data
  },

  // Update stage status
  async updateStageStatus(stageId, status, startedAt = null, completedAt = null) {
    const updates = { status }
    
    if (status === 'in_progress' && startedAt) {
      updates.started_at = startedAt
    }
    
    if (status === 'completed' && completedAt) {
      updates.completed_at = completedAt
    }

    const { data, error } = await supabase
      .from('project_stages')
      .update(updates)
      .eq('id', stageId)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Create new stage
  async createStage(stageData) {
    const { data, error } = await supabase
      .from('project_stages')
      .insert(stageData)
      .select()
      .single()

    if (error) throw error
    return data
  }
}

// Update operations
export const updateService = {
  // Get updates for a project
  async getProjectUpdates(projectId) {
    const { data, error } = await supabase
      .from('project_updates')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Create new update
  async createUpdate(updateData) {
    const { data, error } = await supabase
      .from('project_updates')
      .insert(updateData)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Delete update
  async deleteUpdate(id) {
    const { error } = await supabase
      .from('project_updates')
      .delete()
      .eq('id', id)

    if (error) throw error
  }
}

// Note operations
export const noteService = {
  // Get notes for a project
  async getProjectNotes(projectId) {
    const { data, error } = await supabase
      .from('project_notes')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Create new note
  async createNote(noteData) {
    const { data, error } = await supabase
      .from('project_notes')
      .insert(noteData)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Delete note
  async deleteNote(id) {
    const { error } = await supabase
      .from('project_notes')
      .delete()
      .eq('id', id)

    if (error) throw error
  }
}

// Deliverable operations
export const deliverableService = {
  // Get deliverables for a project
  async getProjectDeliverables(projectId) {
    const { data, error } = await supabase
      .from('project_deliverables')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: true })

    if (error) throw error
    return data
  },

  // Update deliverable completion status
  async updateDeliverableStatus(id, isCompleted) {
    const { data, error } = await supabase
      .from('project_deliverables')
      .update({ is_completed: isCompleted })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Create new deliverable
  async createDeliverable(deliverableData) {
    const { data, error } = await supabase
      .from('project_deliverables')
      .insert(deliverableData)
      .select()
      .single()

    if (error) throw error
    return data
  }
}

// Invoice operations
export const invoiceService = {
  // Get invoices for a project
  async getProjectInvoices(projectId) {
    const { data, error } = await supabase
      .from('invoices')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Create new invoice
  async createInvoice(invoiceData) {
    const { data, error } = await supabase
      .from('invoices')
      .insert(invoiceData)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Update invoice status
  async updateInvoiceStatus(id, status, paidDate = null) {
    const updates = { status }
    
    if (status === 'paid' && paidDate) {
      updates.paid_date = paidDate
    }

    const { data, error } = await supabase
      .from('invoices')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Delete invoice
  async deleteInvoice(id) {
    const { error } = await supabase
      .from('invoices')
      .delete()
      .eq('id', id)

    if (error) throw error
  }
}

// User operations
export const userService = {
  // Get current user
  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) throw error
    return user
  },

  // Get user profile
  async getUserProfile(userId) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single()

    if (error) throw error
    return data
  },

  // Create user profile
  async createUserProfile(profileData) {
    const { data, error } = await supabase
      .from('users')
      .insert(profileData)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Update user profile
  async updateUserProfile(userId, updates) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .select()
      .single()

    if (error) throw error
    return data
  }
}

// Client project relationship operations
export const clientProjectService = {
  // Link client to project
  async linkClientToProject(userId, projectId) {
    const { data, error } = await supabase
      .from('client_projects')
      .insert({ user_id: userId, project_id: projectId })
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Get client's projects
  async getClientProjects(userId) {
    const { data, error } = await supabase
      .from('client_projects')
      .select(`
        project_id,
        projects(*)
      `)
      .eq('user_id', userId)

    if (error) throw error
    return data.map(item => item.projects)
  },

  // Remove client from project
  async removeClientFromProject(userId, projectId) {
    const { error } = await supabase
      .from('client_projects')
      .delete()
      .eq('user_id', userId)
      .eq('project_id', projectId)

    if (error) throw error
  }
} 