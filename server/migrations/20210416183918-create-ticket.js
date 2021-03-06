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
				allowNull: true,
			},
			developer_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			description: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			type: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			priority: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			status: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			due_date: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			createdAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Tickets");
	},
};
