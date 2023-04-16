// config.js
const dotenv = require('dotenv');
dotenv.config({ debug: true });

module.exports = {
  env: {
    NETFLIXURL: process.env.NETFLIX_URL,
    NETFLIXUSERNAME: process.env.NETFLIX_USERNAME,
    NETFLIXPASSWORD: process.env.NETFLIX_PASSWORD
  }
}