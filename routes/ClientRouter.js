const router = require('express').Router()
const controller = require('../controllers/ClientController')

router.get('/', controller.GetClients)
router.get('/:client_id', controller.GetClient)
router.post('/create', controller.CreateClient)
router.put('/:client_id', controller.UpdateClient)
router.delete('/:client_id', controller.DeleteClient)

module.exports = router
