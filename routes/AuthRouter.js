const Router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

Router.post('/register', controller.Register)
Router.post('/login', controller.Login)
Router.put('/update/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdatePassword)

module.exports = Router