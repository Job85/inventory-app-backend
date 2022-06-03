const { Schema } = require('mongoose')

const User = new Schema(
    {
        username: {
            type: String,
            require: [true, 'Please add a username']
        },
        email: {
            type: String,
            require: [true, 'Please add an email'],
            unique: true
        },
        password: {
            type: String,
            require: [true, 'Please add a password']
        }
    },
    { timestamps: true }
)

module.exports = User