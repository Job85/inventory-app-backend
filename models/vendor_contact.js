const { Schema } = require('mongoose')

const Vendor_Contact = new Schema(
    {
        first_name: { type: String, require: true },
        last_name: { type: String, require: true },
        phone_number: { type: String, require: true },
        vendor_name: { type: String, require: true }
    },
    { timestamps: true }
)

module.exports = Vendor_Contact