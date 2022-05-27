const Router = require('express').Router()
const controller = require('../controllers/InventoryController')

Router.get('/', controller.getInventory)
Router.post(`/create`, controller.postInventory)
Router.put(`/update/:id/:departmentId`, controller.putInventory)
Router.delete(`/delete/:id`, controller.deleteInventoryById)

module.exports = Router