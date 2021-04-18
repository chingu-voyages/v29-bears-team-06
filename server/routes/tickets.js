const express = require('express');
const router = express.Router();

const ticketController = require('../controller/ticketController');

/**
 * TICKET ROUTES
 */
router.get('/all', ticketController.getAllTickets);

router.post('/create', ticketController.createNewTicket);

router.get('/id/:id', ticketController.getTicketById);

router.post('/id/:id/update', ticketController.updateTicketById);

router.delete('/delete', ticketController.deleteTicketById);

router.get('/*', ticketController.invalidRoute);

module.exports = router;