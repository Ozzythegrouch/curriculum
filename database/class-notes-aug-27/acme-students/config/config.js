// require('dotenv').config();

module.exports = {
  "development": {
    "username": "admin",
    "password": "admin",
    "database": "acme",
    "host": process.env.DEV_DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.TEST_DB_USER,
    "password": process.env.TEST_DB_PASS,
    "database": process.env.TEST_DB_NAME,
    "host": process.env.TEST_DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.PROD_DB_USER,
    "password": process.env.PROD_DB_PASS,
    "database": process.env.PROD_DB_NAME,
    "host": process.env.PROD_DB_HOST,
    "dialect": "postgres",
    "dialectOptions": {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
  }
}