require('dotenv').config;
const jwt = require('jsonwebtoken');

const jwtSecret = `${process.env.JWT_SECRET}`;

function generateToken({ id, role }) {
    return jwt.sign({ id: id, role }, jwtSecret, { expiresIn: '4h' });
}

module.exports = { generateToken };