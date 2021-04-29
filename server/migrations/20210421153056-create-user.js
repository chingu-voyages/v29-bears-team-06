"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			first_name: {
				type: Sequelize.STRING,
			},
			last_name: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			username: {
				type: Sequelize.STRING,
			},
			password: {
				type: Sequelize.STRING,
			},
			avatar: {
				type: Sequelize.BLOB,
				allowNull: true,
			},
			remember_token: {
				type: Sequelize.STRING,
        allowNull: true,
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
		await queryInterface.dropTable("Users");
	},
};
