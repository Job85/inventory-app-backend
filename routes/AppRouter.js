const Router = require('express').Router()
const VendorRouter = require('./VendorRouter')
const ItemRouter = require('./ItemRouter')
const InventoryRouter = require('./InventoryRouter')

Router.use('/vendor', VendorRouter)
Router.use('/item', ItemRouter)
Router.use('/inventory', InventoryRouter)


module.exports = Router