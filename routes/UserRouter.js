const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.getUsername)
Router.delete('/delete', controller.deleteUser)

module.exports = Router