const Router = require('express').Router()
const VendorRouter = require('./VendorRouter')
const ItemRouter = require('./ItemRouter')
const InventoryRouter = require('./InventoryRouter')
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')

Router.use('/vendor', VendorRouter)
Router.use('/item', ItemRouter)
Router.use('/inventory', InventoryRouter)
Router.use('/auth', AuthRouter)
Router.use('/user', UserRouter)


module.exports = Router