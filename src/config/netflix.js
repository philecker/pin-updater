// config.js
const dotenv = require('dotenv');
dotenv.config({ path: './netflix.env' });

module.exports = {
  url: process.env.URL,
  username: process.env.USER_ID,
  password: process.env.PASSWORD,
};