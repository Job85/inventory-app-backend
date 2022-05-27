const Router = require('express').Router()
const DepartmentRouter = require('./DepartmentRouter')
const ItemRouter = require('./ItemRouter')
const InventoryRouter = require('./InventoryRouter')

Router.use('/department', DepartmentRouter)
Router.use('/item', ItemRouter)
Router.use('/inventory', InventoryRouter)


module.exports = Router