const express = require('express');
const router = express.Router();

const ticketController = require('../controller/ticketController');

//Get and Submit ticket
router.get('/all', ticketController.getAllTickets);
router.post('/submit', ticketController.createNewTicket);

router.get('/id/:id', ticketController.getTicketById);

router.delete('/delete', ticketController.deleteTicketById);

router.get('/*', ticketController.invalidRoute);

module.exports = router;