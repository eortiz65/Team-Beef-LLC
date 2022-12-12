const router = require('express').Router()
const controller = require('../controllers/AdminController')

router.get('/', controller.GetAdmins)
router.get('/:admin_id', controller.GetAdmin)
router.post('/create', controller.CreateAdmin)
router.put('/:admin_id', controller.UpdateAdmin)
router.delete('/:admin_id', controller.DeleteAdmin)

module.exports = router
