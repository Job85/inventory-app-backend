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
        vendor_address: [
            {
                street: { type: String, require: true },
                street2: { type: String },
                city: { type: String, require: true },
                state: { type: String, require: true },
                zip_code: { type: String, require: true }
            }
        ]
    },
    { timestamps: true }
)

module.exports = Vendor