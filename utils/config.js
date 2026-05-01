require('dotenv').config();

module.exports = {
    baseURL: process.env.BASE_URL,
    username: process.env.SAUCE_USERNAME,
    password: process.env.SAUCE_PASSWORD
};