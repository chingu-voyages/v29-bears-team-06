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
		const tickets = [];
		const NUMBER_OF_TICKETS = 20;

		for (let i = 0; i < NUMBER_OF_TICKETS; i++) {
			tickets.push({
				title: faker.lorem.sentence(),
				project_id: 1,
				developer_id: 1,
				description: faker.lorem.paragraph(),
				type: "BUG",
				priority: "HIGH",
				status: "ASSIGNED",
				due_date: faker.date.future(),
			});
		}

		await queryInterface.bulkInsert("Tickets", tickets, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("Tickets", null, {});
	},
};
