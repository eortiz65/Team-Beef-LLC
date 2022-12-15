import Client from './api'

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

export const updateAdmin = async (data) => {
  try {
    const res = await Client.update('/admin/:admin_id', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteAdmin = async (data) => {
  try {
    await Client.destroy('/admin/:admin_id', data)
    return alert('Admin Deleted')
  } catch (error) {
    throw error
  }
}
