"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Tickets", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			project_id: {
				type: Sequelize.INTEGER,
			},
			developer_id: {
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.TEXT,
			},
			type: {
				type: Sequelize.ENUM("BUG", "FEATURE", "OTHER"),
				defaultValue: "BUG",
			},
			priority: {
				type: Sequelize.ENUM("HIGH", "MEDIUM", "LOW"),
				defaultValue: "HIGH",
			},
			status: {
				type: Sequelize.ENUM("ASSIGNED", "IN_PROGRESS", "COMPLETED", "CLOSED"),
				defaultValue: "ASSIGNED",
			},
			due_date: {
				type: Sequelize.DATE,
				defaultValue: new Date(),
			},
			createdAt: {
				type: Sequelize.DATE,
				defaultValue: new Date(),
			},
			updatedAt: {
				type: Sequelize.DATE,
				defaultValue: new Date(),
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Tickets");
	},
};
