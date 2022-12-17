import Client from './api'

//Admin Axios
export const registerAdmin = async (data) => {
  try {
    const res = await Client.post('/admin/create', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getAdmins = async (data) => {
  try {
    const res = await Client.get('/admin', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getAdmin = async (data) => {
  try {
    const res = await Client.get('/admin/:admin_id', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateAdmin = async (id, data) => {
  try {
    const res = await Client.put(`/admin/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteAdmin = async (data) => {
  try {
    await Client.delete(`/admin/${data}`)
    return alert('Admin Deleted')
  } catch (error) {
    throw error
  }
}

//Client Axios

export const createClient = async (data) => {
  try {
    const res = await Client.post('/client/create', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getClients = async (data) => {
  try {
    const res = await Client.get('/client', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getClient = async (data) => {
  try {
    const res = await Client.get('/client/:client_id', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateClient = async (id, data) => {
  try {
    const res = await Client.put(`/client/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteClient = async (data) => {
  try {
    await Client.delete(`/client/${data}`)
    return alert('Client Deleted')
  } catch (error) {
    throw error
  }
}
