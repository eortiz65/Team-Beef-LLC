import Client from './api'

export const RegisterAdmin = async (data) => {
  try {
    const res = await Client.post('/admin/create', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAdmins = async (data) => {
  try {
    const res = await Client.get('/admin', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAdmin = async (data) => {
  try {
    const res = await Client.get('/admin/:admin_id', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateAdmin = async (data) => {
  try {
    const res = await Client.update('/admin/:admin_id', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteAdmin = async (data) => {
  try {
    await Client.destroy('/admin/:admin_id', data)
    return alert('Admin Deleted')
  } catch (error) {
    throw error
  }
}
