import Client from './api'

export const RegisterAdmin = async (data) => {
  try {
    const res = await Client.post('/admin/create', data)
    return res.data
  } catch (error) {
    throw error
  }
}
