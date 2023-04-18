const express= require('express');
const router = express.Router();
const reminderController = require('../../controllers/reminder-controller');
router.post('/createTicket',reminderController.createTicket);

module.exports = router;

