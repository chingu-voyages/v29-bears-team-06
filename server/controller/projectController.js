const models = require("../models/index");
const { body, validationResult } = require("express-validator");

exports.invalidRoute = (req, res, next) => {
	res.send("Invalid route");
};

exports.getAllProjects = async (req, res, next) => {
	const projects = await models.Project.findAll();
	res.send(projects);
};

exports.getProjectById = async (req, res, next) => {
	const id = req.params.id;

	console.log("getProjectById: [GET] /users/:id");
	try {
		const t = await models.Project.findByPk(id);
		console.log("OK getProjectById PROJECT: ", t.dataValues);
		return res.status(200).json(t);
	} catch (error) {
		console.log("ERROR in getProjectById " + "PROJECT:", error);
		return res.status(500).json(error);
	}
};

exports.createNewProject = [
	// validate
	body("title")
		.not()
		.isEmpty()
		.withMessage("Title field must not be empty")
		.trim(),
	body("manager_id")
		.not()
		.isEmpty()
		.withMessage("Manager_id field must not be empty")
		.trim()
		.isNumeric()
		.withMessage("Manager_id field must be a number"),
	body("description")
		.not()
		.isEmpty()
		.withMessage("Description field must not be empty")
		.trim(),
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
			// No errors. create new project
			const {
				title,
				manager_id,
				description,
				priority,
				status,
				due_date,
			} = req.body;

			await models.Project.create({
				title: title,
				manager_id: manager_id,
				description: description,
				priority: priority,
				status: status,
				due_date: due_date,
			});

			return res.status(200);
		}
	},
];

exports.updateProjectById = [
	// validate
	body("title")
		.not()
		.isEmpty()
		.withMessage("Title field must not be empty")
		.trim(),
	body("manager_id")
		.not()
		.isEmpty()
		.withMessage("Manager_id field must not be empty")
		.trim()
		.isNumeric()
		.withMessage("Manager_id field must be a number"),
	body("description")
		.not()
		.isEmpty()
		.withMessage("Description field must not be empty")
		.trim(),
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
			// No errors. update project
			const {
				title,
				manager_id,
				description,
				priority,
				status,
				due_date,
			} = req.body;

			await models.Project.update({
				title: title,
				manager_id: manager_id,
				description: description,
				priority: priority,
				status: status,
				due_date: due_date,
			});

			return res.status(200);
		}
	},
];

exports.deleteProjectById = async (req, res, next) => {
	console.log("[DELETE] /project/:id");

	let { id } = req.body;

	try {
		const t = await models.Project.destroy({ where: { id: id } });
		console.log("OK deleteProjectById Project: ");
		return res.status(200).json(t);
	} catch (error) {
		console.log("ERROR in deleteProjectById " + "PROJECT:", error);
		return res.status(500).json(error);
	}
};
