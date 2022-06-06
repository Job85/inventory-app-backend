const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.getUsername)

module.exports = Router