//Main Routes File
const router = require('express').Router()
const AdminRouter = require('./AdminRouter')
const ClientRouter = require('./ClientRouter')
const ContractRouter = require('./ContractRouter')
const ClientContractController = require('./ClientContractRouter')

router.use('/admin', AdminRouter)
router.use('/client', ClientRouter)
router.use('/contract', ContractRouter)
router.use('/client_contract', ClientContractController)

module.exports = router
