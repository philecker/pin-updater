// config.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  url: process.env.NETFLIX_URL,
  username: process.env.NETFLIX_USERNAME,
  password: process.env.NETFLIX_PASSWORD,
};