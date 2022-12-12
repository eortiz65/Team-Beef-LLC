//Main Routes File
const Router = require('express').Router()
const AdminRouter = require('./AdminRouter')
const ClientRouter = require('./ClientRouter')
const ContractRouter = require('./ContractRouter')

Router.use('/admin', AdminRouter)
Router.use('/client', ClientRouter)
Router.use('/contract', ContractRouter)
