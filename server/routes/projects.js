const express = require('express');
const router = express.Router();

const projectController = require('../controller/projectController');

/**
 * PROJECT ROUTES
 */
router.get('/all', projectController.getAllProjects);

router.post('/create', projectController.createNewProject);

router.get('/id/:id', projectController.getProjectById);

router.post('/id/:id/update', projectController.updateProjectById);

router.delete('/delete', projectController.deleteProjectById);

router.get('/*', projectController.invalidRoute);

module.exports = router;