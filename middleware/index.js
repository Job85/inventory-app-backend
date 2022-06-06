const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const asyncHandler = require('express-async-handler')
// const User = require('../models/user')

// const registerUser = asyncHandler(async (req, res) => {
//     const { username, email, password } = req.body

//     if (!username || !email || !password) {
//         res.status(400)
//         throw new Error('Please provide all fields')
//     }

//     const userExists = await User.find({ email })

//     if (userExists) {
//         res.status(400)
//         throw new Error('User already exists')
//     }

//     const salt = await bcrypt.genSalt(12)
//     const hashedPassword = await bcrypt.hash(password, salt)

//     const user = await User.create({
//         username,
//         email,
//         password: hashedPassword
//     })

//     if (user) {
//         res.status(201).json({
//             _id: user.id,
//             username: user.username,
//             email: user.email,
//             token: generateToken(user._id)
//         })
//     } else {
//         res.status(400)
//         throw new Error('Invalid user data')
//     }
// })

require('dotenv').config()
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = `${process.env.APP_SECRET}`

const hashPassword = async (password) => {

    // accepts a password from the request body
    let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

    // creates a hashed password and encrypts it 12 times
    return hashedPassword
}

const comparePassword = async (storedPassword, password) => {
    // accepts the password provided in the login request and the currently stored password
    // compares the two passwords for a match
    let passwordMatch = await bcrypt.compare(password, storedPassword)
    // returns true if the passwords match || false if the passwords are not a match
    return passwordMatch
}

const createToken = (payload) => {
    // accepts a payload with which to create the token
    let token = jwt.sign(payload, APP_SECRET)
    // generates the token and encrypts it, returns the token when the process finishes
    return token
}

const verifyToken = (req, res, next) => {
    const { token } = res.locals
    // gets the token stored in the request lifecycle state
    let payload = jwt.verify(token, APP_SECRET)
    // verifies the token is correct
    if (payload) {
        res.locals.payload = payload // passes the decoded payload to the next function

        // calls the next function if the token is valid
        return next()
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
}

const stripToken = (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(' ')[1]
        // gets the token from the request headers {authorization: Bearer Some-Token}
        // splits the value of the authorization header
        if (token) {
            res.locals.token = token
            // if the token exists we add it to the request lifecycle state
            return next()
        }
    } catch (error) {
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    }
}

module.exports = {
    // registerUser,
    stripToken,
    verifyToken,
    createToken,
    comparePassword,
    hashPassword
}