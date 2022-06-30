const { User } = require('../models')

const getUser = async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id }).select('username email')
        // const user = await User.find({}).select('username')
        console.log("Got User")
        res.send(user)
    } catch (error) {
        throw error
    }
}

const deleteUser = async (req, res) => {
    try {
        const username = await User.deleteOne({})
        res.send(username)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getUser,
    deleteUser
}