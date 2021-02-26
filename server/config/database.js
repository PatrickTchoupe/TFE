const Sequelize = require("sequelize");

const env = require("./environment");

let dbConnection = ''


if (env.NODE_ENV === 'dev') {
    dbConnection = new Sequelize(env.DATABASE_URL, {
        ssl: true,
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        },
        define: {
            timestamps: false
        }
      })
}

module.exports = dbConnection;
