const mongoose = require('mongoose')
const ItemSchema = require('./item')
const InventorySchema = require('./inventory')
const DepartmentSchema = require('./department')

const Item = mongoose.model('Item', ItemSchema)
const Inventory = mongoose.model('Inventory', InventorySchema)
const Department = mongoose.model('Department', DepartmentSchema)

module.exports = {
    Item,
    Inventory,
    Department
}