const Sequelize = require("sequelize");

const env = require("./environment");

let dbConnection = ''


if (env.NODE_ENV === 'dev') {
    dbConnection = new Sequelize(
        env.MYSQL_DATABASE,
        env.DB_USER,
        env.MYSQL_ROOT_PASSWORD,
        {
            host: env.MYSQL_HOST,
            dialect: 'mysql',
            logging: false,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }
    )
}

module.exports = dbConnection;
