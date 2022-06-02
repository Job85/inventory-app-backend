const { Schema } = require('mongoose')

const Inventory = new Schema(
    {
        inventory_date: { type: Date, require: true },
        department_name: { type: String, require: true },
        item_name: { type: String, require: true },
        count: { type: Number, require: true }
    },
    { timestamps: true }
)

module.exports = Inventory