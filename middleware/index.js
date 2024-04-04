const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
    // Set expiration time to  1  hour from current time
    const expirationTime = Math.floor(Date.now() / 1000) + (60 * 60);

    //  Add expiration time to the payload
    payload.exp = expirationTime;

    // Generate the token with the payload and secret
    const token = jwt.sign(payload, APP_SECRET, { algorithm: 'HS256' });

    return token;
}

const verifyToken = (req, res, next) => {
    const { token } = res.locals

    try {
        const payload = jwt.verify(token, APP_SECRET, { algorithm: 'HS256' });

        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (payload.exp && payload.exp < currentTimestamp) {
            return res.status(401).json({ status: 'Error', msg: 'Token has expired' });
        }
        res.locals.payload = payload // passes the decoded payload to the next function
        return next();
    } catch (error) {
        console.error('Error in verifyToken middleware:', error);
        return res.status(401).json({ status: 'Error', msg: 'Invalid token', error: error.message });
    }
}

const stripToken = (req, res, next) => {
    try {
        const authorizationHeader = req.headers['authorization'];
        if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
            const token = authorizationHeader.split(' ')[1];
            res.locals.token = token
            // if the token exists we add it to the request lifecycle state
            return next();
        }
        throw new Error('Authorization header is missing or invalid');
    } catch (error) {
        console.error('Error in stripToken middleware:', error);
        res.status(401).send({ status: 'Error', message: 'Unauthorized', error: error.message });
    }
}

const authorizeUser = async (req, res, next) => {
    try {
        // fetch item based on provided user ID
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ msg: 'Item not found' });
        }
        // check if current user is owner of item
        if (item.user.toString() !== req.user.id) {
            return res.status(403).json({ msg: 'Forbidden - You do not have permission to perform this action' });
        }
        // if user is owner, proceed
        next();
    } catch (error) {
        console.error('Authorization error:', error.message);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = {
    stripToken,
    verifyToken,
    createToken,
    comparePassword,
    hashPassword,
    authorizeUser
}