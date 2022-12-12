const { Contract } = require('../models')

const GetContracts = async (req, res) => {
  try {
    const contracts = await Contract.findAll()
    res.send(contracts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetContract = async (req, res) => {
  try {
    const contract = await Contract.findOne({
      where: {
        id: req.params.contract_id
      }
    })
    res.send(contract)
  } catch (error) {
    throw error
  }
}

const CreateContract = async (req, res) => {
  try {
    const contract = await Contract.create({ ...req.body })
    res.send(contract)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateContract = async (req, res) => {
  try {
    const contract = await Contract.update(
      { ...req.body },
      { where: { id: req.params.contract_id }, returning: true }
    )
    res.send(contract)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteContract = async (req, res) => {
  try {
    await Contract.destroy({ where: { id: req.params.contract_id } })
    res.send({ msg: 'Contract Deleted', status: 'Ok' })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetContracts,
  GetContract,
  CreateContract,
  UpdateContract,
  DeleteContract
}
