const { Admin } = require('../models')

const GetAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll()
    res.send(admins)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOne({
      where: {
        id: req.params.admin_id
      }
    })
    res.send(admin)
  } catch (error) {
    throw error
  }
}

const CreateAdmin = async (req, res) => {
  try {
    const admin = await Admin.create({ ...req.body })
    res.send(admin)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateAdmin = async (req, res) => {
  try {
    const admin = await Admin.update(
      { ...req.body },
      { where: { id: req.params.admin_id }, returning: true }
    )
    res.send(admin)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteAdmin = async (req, res) => {
  try {
    await Admin.destroy({ where: { id: req.params.admin_id } })
    res.send({ msg: 'Admin Deleted', status: 'Ok' })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetAdmins,
  GetAdmin,
  CreateAdmin,
  UpdateAdmin,
  DeleteAdmin
}
