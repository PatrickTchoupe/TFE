const env = require("./environment");

module.exports = {
    dev: {
        dialect: 'mysql',
        username: env.DB_USER,
        password: env.MYSQL_ROOT_PASSWORD,
        database: env.MYSQL_DATABASE,
        host: env.MYSQL_HOST,
    }
}
