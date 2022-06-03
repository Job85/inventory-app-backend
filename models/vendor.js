const { Schema } = require('mongoose')

const Vendor = new Schema(
    {
        _id: { type: Schema.Types.ObjectId, default: null },
        user: {
            type: Schema.Types.ObjectId,
            require: true,
            ref: 'User'
        },
        vendor_name: { type: String, require: true },
        vendor_phone: { type: String, require: true },
        vendor_address: { type: String, require: true }
    },
    { timestamps: true }
)

module.exports = Vendor