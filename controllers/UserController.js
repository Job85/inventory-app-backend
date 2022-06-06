const { User } = require('../models')

const getUsername = async (req, res) => {
    try {
        const username = await User.find({}).select('username')
        console.log(username)
        res.send(username)
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
    getUsername,
    deleteUser
}