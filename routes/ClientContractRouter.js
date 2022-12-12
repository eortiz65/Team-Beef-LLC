const router = require('express').Router()
const controller = require('../controllers/ClientContractController')

router.get('/:client_id', controller.GetClientWithContracts)
