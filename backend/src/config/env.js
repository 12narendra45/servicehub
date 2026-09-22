const dotenv = require('dotenv');

dotenv.config();

const env = {
  PORT: Number(process.env.PORT) || 5000,
  MONGO_URI:process.env.Mongodb_uri,
  JWT_SECRET: process.env.jwt_sec
};

module.exports = env;
