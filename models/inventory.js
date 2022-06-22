const { Schema } = require('mongoose')
const { Item } = require('.')

const Inventory = new Schema(
    {
        _id: { type: Schema.Types.ObjectId, default: null },
        user: {
            type: Schema.Types.ObjectId,
            require: true,
            ref: 'User'
        },
        inventory_date: { type: Date, require: true },
        department_name: { type: String, require: true },
        items: [
            {
                type: [Item],
                default: undefined
            }
        ],
        count: { type: Number, require: true }
    },
    { timestamps: true }
)

module.exports = Inventory