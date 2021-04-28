"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Ticket extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Ticket.init(
		{
			project_id: DataTypes.INTEGER,
			developer_id: DataTypes.INTEGER,
			title: DataTypes.STRING,
			description: DataTypes.TEXT,
			type: DataTypes.ENUM("BUG", "FEATURE", "OTHER"),
			priority: DataTypes.ENUM("HIGH", "MEDIUM", "LOW"),
			status: DataTypes.ENUM("ASSIGNED", "IN_PROGRESS", "COMPLETED", "CLOSED"),
			due_date: DataTypes.DATE,
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "Ticket",
		}
	);
	return Ticket;
};
