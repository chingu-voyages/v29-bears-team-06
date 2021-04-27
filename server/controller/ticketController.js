const models = require("../models/index");
const { body, validationResult } = require("express-validator");

exports.invalidRoute = (req, res, next) => {
	res.send("Invalid route");
};

exports.getAllTickets = async (req, res, next) => {
	const tickets = await models.Ticket.findAll();
	res.send(tickets);
};

exports.getTicketById = async (req, res, next) => {
	const id = req.params.id;

	console.log("getTicketById: [GET] /users/:id");
	try {
		const t = await models.Ticket.findByPk(id);
		console.log("OK getTicketById TICKET: ", t.dataValues);
		return res.status(200).json(t);
	} catch (error) {
		console.log("ERROR in getTicketById " + "TICKET:", error);
		return res.status(500).json(error);
	}
};

exports.createNewTicket = [
	// validate
	body("title")
		.not()
		.isEmpty()
		.withMessage("Title field must not be empty")
		.trim(),
	body("project_id")
		.not()
		.isEmpty()
		.withMessage("Project_id field must not be empty")
		.trim()
		.isNumeric()
		.withMessage("Project_id field must be a number"),
	body("developer_id")
		.not()
		.isEmpty()
		.withMessage("Developer_id field must not be empty")
		.trim()
		.isNumeric()
		.withMessage("Developer_id field must be a number"),
	body("description")
		.not()
		.isEmpty()
		.withMessage("Description field must not be empty")
		.trim(),
	body("type")
		.not()
		.isEmpty()
		.withMessage("Type field must not be empty")
		.isString()
		.withMessage("Type field must be a string"),
	body("priority")
		.not()
		.isEmpty()
		.withMessage("Priority field must not be empty")
		.isString()
		.withMessage("Priority field must be a string"),
	body("status")
		.not()
		.isEmpty()
		.withMessage("Status field must not be empty")
		.isString()
		.withMessage("Status field must be a string"),

	// sanitize
	body("*").escape(),

	async (req, res, next) => {
		// express-validator result
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			// There are errors, send error message to client
			return res.json({ errors: errors.array() });
		} else {
			// No errors. create new ticket
			const {
				title,
				project_id,
				developer_id,
				description,
				type,
				priority,
				status,
				due_date,
			} = req.body;

			await models.Ticket.create({
				title: title,
				project_id: project_id,
				developer_id: developer_id,
				description: description,
				type: type,
				priority: priority,
				status: status,
				due_date: due_date,
			});

			return res.status(200);
		}
	},
];

exports.updateTicketById = [
	// validate
	body("title")
		.not()
		.isEmpty()
		.withMessage("Title field must not be empty")
		.trim(),
	body("project_id")
		.not()
		.isEmpty()
		.withMessage("Project_id field must not be empty")
		.trim()
		.isNumeric()
		.withMessage("Project_id field must be a number"),
	body("developer_id")
		.not()
		.isEmpty()
		.withMessage("Developer_id field must not be empty")
		.trim()
		.isNumeric()
		.withMessage("Developer_id field must be a number"),
	body("description")
		.not()
		.isEmpty()
		.withMessage("Description field must not be empty")
		.trim(),
	body("type")
		.not()
		.isEmpty()
		.withMessage("Type field must not be empty")
		.isString()
		.withMessage("Type field must be a string"),
	body("priority")
		.not()
		.isEmpty()
		.withMessage("Priority field must not be empty")
		.isString()
		.withMessage("Priority field must be a string"),
	body("status")
		.not()
		.isEmpty()
		.withMessage("Status field must not be empty")
		.isString()
		.withMessage("Status field must be a string"),

	// sanitize
	body("*").escape(),

	async (req, res, next) => {
		// express-validator result
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			// There are errors, send error message to client
			return res.json({ errors: errors.array() });
		} else {
			// No errors. update ticket
			const {
				title,
				project_id,
				developer_id,
				description,
				type,
				priority,
				status,
				due_date,
			} = req.body;

			await models.Ticket.update({
				title: title,
				project_id: project_id,
				developer_id: developer_id,
				description: description,
				type: type,
				priority: priority,
				status: status,
				due_date: due_date,
			});

			return res.status(200);
		}
	},
];

exports.updateTicketById = async (req, res, next) => {};

exports.deleteTicketById = async (req, res, next) => {
	console.log("[DELETE] /tickets/:id");

	let { id } = req.body;

	try {
		const t = await models.Ticket.destroy({ where: { id: id } });
		console.log("OK deleteTicketById Ticket: ");
		return res.status(200).json(t);
	} catch (error) {
		console.log("ERROR in deleteTicketById " + "TICKET:", error);
		return res.status(500).json(error);
	}
};
