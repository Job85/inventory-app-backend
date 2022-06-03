const Router = require('express').Router()
const controller = require('../controllers/UserController')
const { protect } = require('../middleware/Auth')

Router.post('/', controller.registerUser)
Router.post('/login', controller.loginUser)
Router.get('/me', protect, controller.getMe)

module.exports = Router