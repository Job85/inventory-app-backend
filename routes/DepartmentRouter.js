const Router = require('express').Router()
const controller = require('../controllers/DepartmentController')

Router.get('/', controller.getDepartment)
Router.get('/:id', controller.getDepartmentById)
Router.post('/create', controller.createDepartment)
Router.put('/update/:id', controller.updateDepartment)
Router.delete('/delete/:id', controller.deleteDepartmentById)

module.exports = Router