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
		const projects = [];
		const NUMBER_OF_PROJECTS = 10;

		for (let i = 0; i < NUMBER_OF_PROJECTS; i++) {
			projects.push({
				title: faker.lorem.sentence(),
				manager_id: 1,
				description: faker.lorem.paragraph(),
				priority: "HIGH",
				status: "ASSIGNED",
				due_date: faker.date.future(),
			});
		}

		await queryInterface.bulkInsert("Projects", projects, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
