//Main Routes File
const Router = require('express').Router()
const AdminRouter = require('./AdminRouter')
const ClientRouter = require('./ClientRouter')
Router.use('/admin', AdminRouter)
Router.use('/client', ClientRouter)
