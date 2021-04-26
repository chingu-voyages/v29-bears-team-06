const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	development: {
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE,
		host: "127.0.0.1",
		port: 3306,
		dialect: "mysql"
	},
	test: {
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: "database_test",
		host: "127.0.0.1",
		dialect: "mysql"
	},
	production: {
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: "database_production",
		host: "127.0.0.1",
		dialect: "mysql"
	},
	local: {
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE,
		host: "127.0.0.1",
		port: 3306,
		dialect: "mysql"
	}
}
