const Router = require('express').Router()
const controller = require('../controllers/VendorController')

Router.get('/', controller.getVendor)
Router.get('/:id', controller.getVendorById)
Router.post('/create', controller.createVendor)
Router.put('/update/:id', controller.updateVendor)
Router.delete('/delete/:id', controller.deleteVendorById)

module.exports = Router