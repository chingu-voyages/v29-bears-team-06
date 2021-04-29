"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Project extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Project.belongsTo(models.User);
			Project.hasMany(models.Ticket);
		}
	}
	Project.init(
		{
			title: DataTypes.STRING,
			manager_id: DataTypes.STRING,
			description: DataTypes.STRING,
			priority: DataTypes.ENUM("HIGH", "MEDIUM", "LOW"),
			status: DataTypes.ENUM("ASSIGNED", "IN_PROGRESS", "COMPLETED"),
			due_date: DataTypes.DATE,
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "Project",
		}
	);
	return Project;
};
