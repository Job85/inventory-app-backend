const { User } = require('../models')

const getUser = async (req, res) => {
    try {
        const user = await User.findAll()
        console.log(user)
        res.send(user)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getUser
}