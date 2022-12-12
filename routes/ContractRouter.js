const router = require('express').Router()
const controller = require('../controllers/ContractController')

router.get('/', controller.GetContracts)
router.get('/:contract_id', controller.GetContract)
router.post('/create', controller.CreateContract)
router.put('/:contract_id', controller.UpdateContract)
router.delete('/:contract_id', controller.DeleteContract)

module.exports = router
