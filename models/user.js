const { Schema } = require('mongoose')

const User = new Schema(
    {
        _id: { type: Schema.Types.ObjectId, default: null },
        username: { type: String, require: true },
        passwordDigest: { type: Text, require: true }
    }
)