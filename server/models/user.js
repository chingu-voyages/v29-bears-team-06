"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.hasMany(models.Project);
			User.hasMany(models.Ticket);
		}
	}
	User.init(
		{
			first_name: DataTypes.STRING,
			last_name: DataTypes.STRING,
			username: DataTypes.STRING,
			email: DataTypes.STRING,
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			avatar: DataTypes.TEXT,
			remember_token: DataTypes.STRING,
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	return User;
};
