const { Schema } = require('mongoose')

const User = new Schema(
    {
        _id: { type: Schema.Types.ObjectId, default: null },
        username: {
            type: String,
            require: [true, 'Please add username']
        },
        email: {
            type: String,
            require: [true, 'Please add email'],
            unique: true
        },
        password: {
            type: String,
            require: [true, 'Please add password']
        }
    },
    {
        timestamps: true
    }
)

module.exports = User