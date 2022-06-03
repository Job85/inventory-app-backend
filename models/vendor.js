const { Schema } = require('mongoose')

const Vendor = new Schema(
    {
        vendor_name: { type: String, require: true },
        vendor_phone: { type: String, require: true },
        vendor_address: { type: String, require: true }
    },
    { timestamps: true }
)

module.exports = Vendor