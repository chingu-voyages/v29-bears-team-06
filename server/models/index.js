"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		);
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/**
 * MODELS/TABLES
 */
db.users = require("../models/user")(sequelize, Sequelize);
db.projects = require("../models/project")(sequelize, Sequelize);
db.tickets = require("../models/ticket")(sequelize, Sequelize);

/**
 * RELATIONS
 *
 */
// Project_User
db.users.hasMany(db.projects);
db.projects.hasOne(db.users);

// Ticket_User
db.users.hasMany(db.tickets);
db.tickets.hasOne(db.users);

// Project_Ticket
db.projects.hasMany(db.tickets);
db.tickets.hasOne(db.projects);

module.exports = db;
