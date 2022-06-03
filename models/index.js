const mongoose = require('mongoose')
const ItemSchema = require('./item')
const InventorySchema = require('./inventory')
const VendorSchema = require('./vendor')
const Vendor_ContactSchema = require('./vendor_contact')
const UserSchema = require('./user')

const Item = mongoose.model('Item', ItemSchema)
const Inventory = mongoose.model('Inventory', InventorySchema)
const Vendor = mongoose.model('Vendor', VendorSchema)
const Vendor_Contact = mongoose.model('Vendor_Contact', Vendor_ContactSchema)
const User = mongoose.model('User', UserSchema)

module.exports = {
    Item,
    Inventory,
    Vendor,
    Vendor_Contact,
    User
}