const mongoose = require('mongoose')
const ItemSchema = require('./item')
const InventorySchema = require('./inventory')
const VendorSchema = require('./vendor')

const Item = mongoose.model('Item', ItemSchema)
const Inventory = mongoose.model('Inventory', InventorySchema)
const Vendor = mongoose.model('Vendor', VendorSchema)

module.exports = {
    Item,
    Inventory,
    Vendor
}