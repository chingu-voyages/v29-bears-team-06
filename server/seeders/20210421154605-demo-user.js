"use strict";

const faker = require("faker");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		const users = [];
    const NUMBER_OF_USERS = 15;  

		for (let i = 0; i < NUMBER_OF_USERS; i++) {
			users.push({
				first_name: faker.name.firstName(),
				last_name: faker.name.lastName(),
				username: faker.internet.userName(),
				email: faker.internet.email(),
				password: "password",
			});
		}

		await queryInterface.bulkInsert("Users", users, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */

		await queryInterface.bulkDelete("Users", null, {});
	},
};
