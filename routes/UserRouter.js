const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/:id', controller.getUser)
Router.delete('/delete', controller.deleteUser)

module.exports = Router