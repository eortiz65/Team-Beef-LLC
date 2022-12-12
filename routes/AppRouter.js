//Main Routes File
const Router = require('express').Router()
const AdminRouter = require('./AdminRouter')
const ClientRouter = require('./ClientRouter')
const ContractRouter = require('./ContractRouter')
const ClientContractController = require('./ClientContractRouter')

Router.use('/admin', AdminRouter)
Router.use('/client', ClientRouter)
Router.use('/contract', ContractRouter)
Router.use('/client_contract', ClientContractController)
