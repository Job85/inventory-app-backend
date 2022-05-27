const { Schema } = require('mongoose')

const Department = new Schema(
    {
        departmentTitle: { type: String, require: true },
    },
    { timestamps: true }
)

module.exports = Department