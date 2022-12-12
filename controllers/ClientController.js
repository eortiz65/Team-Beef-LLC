const { Client } = require('../models')

const GetClients = async (req, res) => {
  try {
    const clients = await Client.findAll()
    res.send(clients)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetClient = async (req, res) => {
  try {
    const client = await Client.findOne({
      where: {
        id: req.params.client_id
      }
    })
    res.send(client)
  } catch (error) {
    throw error
  }
}

const CreateClient = async (req, res) => {
  try {
    const client = await Client.create({ ...req.body })
    res.send(client)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateClient = async (req, res) => {
  try {
    const client = await Client.update(
      { ...req.body },
      { where: { id: req.params.client_id }, returning: true }
    )
    res.send(client)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteClient = async (req, res) => {
  try {
    await Client.destroy({ where: { id: req.params.client_id } })
    res.send({ msg: 'Client Deleted', status: 'Ok' })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetClients,
  GetClient,
  CreateClient,
  UpdateClient,
  DeleteClient
}
