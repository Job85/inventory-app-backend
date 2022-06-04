const Router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

Router.post('/register', controller.register)
Router.post('/login', controller.login)
Router.put('/update/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.updatePassword)

module.exports = Router