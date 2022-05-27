const Router = require('express').Router()
const controller = require('../controllers/ItemController')

Router.get('/', controller.getItems)
Router.get(`/:id`, controller.getItemById)
Router.post('/create', controller.postItem)
Router.put('/update/:id', controller.putItemById)
Router.delete('/delete/:id', controller.deleteItemById)


module.exports = Router