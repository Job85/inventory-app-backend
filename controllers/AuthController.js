const { User } = require('../models')
const middleware = require('../middleware')

const login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: { email: req.body.email },
            raw: true
        })
        console.log(user.passwordDigest)
        if (
            user &&
            (await middleware.comparePassword(user.passwordDigest, req.body.password))
        ) {
            let payload = {
                id: user._id,
                name: `${user.username}`,
                email: user.email
            }
            let token = middleware.createToken(payload)
            return res.send({ user: payload, token })
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    } catch (error) {
        throw error
    }
}

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        let passwordDigest = await middleware.hashPassword(password)
        const user = await User.create({ username, email, passwordDigest })
        res.send(user)
    } catch (error) {
        throw error
    }
}

const updatePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body
        const user = await User.findById(req.params.user_id)
        console.log(user)
        console.log(req.params)
        if (
            user &&
            (await middleware.comparePassword(
                user.passwordDigest,
                oldPassword
            ))
        ) {
            let passwordDigest = await middleware.hashPassword(newPassword)
            await user.update({ passwordDigest })
            return res.send({ status: 'Ok', payload: user })
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    } catch (error) {
        throw error
    }
}

const checkSession = async (req, res) => {
    const { payload } = res.locals
    res.send(payload)
}

module.exports = {
    login,
    register,
    updatePassword,
    checkSession
}