require('dotenv').config;
const bcrypt = require('bcrypt');

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);

async function hashPassword(password) {
    return await bcrypt.hash(password, saltRounds);
}

async function passwordCompare(password, hash) {
    return await bcrypt.compare(password, hash);
}

module.exports = { hashPassword, passwordCompare };