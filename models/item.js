const { Schema } = require('mongoose')

const Item = new Schema(
    {
        _id: { type: Schema.Types.ObjectId, default: null },
        location: { type: String, require: true },
        category: { type: String, require: true },
        item_name: { type: String, require: true },
        description: { type: String, require: true },
        unit_measure: { type: String, require: true },
        case_size: { type: String, require: true },
        vendor_name: { type: String, require: true },
        vendor_code: { type: String }
    },
    { timestamps: true }
)

module.exports = Item