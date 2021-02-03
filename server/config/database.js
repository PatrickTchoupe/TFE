const Sequelize = require("sequelize");

const env = require("./environment");

let dbConnection = ''

if (env.NODE_ENV === 'test') {
    dbConnection = new Sequelize(
        'test',
        'mysql',
        'mysql',
        {
            host: 'localhost',
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
} else if (env.NODE_ENV === 'dev') {
    dbConnection = new Sequelize(
        env.MYSQL_DATABASE,
        env.DB_USER,
        env.MYSQL_ROOT_PASSWORD, {
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
} else if (env.NODE_ENV === 'production') {
    dbConnection = new Sequelize(env.DATABASE_URL, {
        ssl: true,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    })
}

module.exports = dbConnection;
