// config.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  NETFLIX_URL: process.env.NETFLIX_URL,
  NETFLIX_USERNAME: process.env.NETFLIX_USERNAME,
  NETFLIX_PASSWORD: process.env.NETFLIX_PASSWORD,
};