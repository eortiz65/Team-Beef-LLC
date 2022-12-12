const { Client } = require('../models')
const { Contract } = require('../models')

const GetClientWithContracts = async (req, res) => {
  try {
    const client = await Client.findAll({
      include: [{ model: Contract, as: 'associated_contracts' }]
    })
    res.send(client)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetClientWithContracts
}
