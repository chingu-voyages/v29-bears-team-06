"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Projects", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			manager_id: {
				type: Sequelize.INTEGER,
			},
			description: {
				type: Sequelize.TEXT,
			},
			priority: {
				type: Sequelize.ENUM("HIGH", "MEDIUM", "LOW"),
				defaultValue: "HIGH",
				allowNull: true,
			},
			status: {
				type: Sequelize.ENUM("ASSIGNED", "IN_PROGRESS", "COMPLETED", "CLOSED"),
				defaultValue: "ASSIGNED",
				allowNull: true,
			},
			due_date: {
				type: Sequelize.DATE,
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
		await queryInterface.dropTable("Projects");
	},
};
