const {NotificationTicket} = require('../models/index');

class ReminderTicketRepo {
    async createTicket(data)
    {
        try {
            const response = await NotificationTicket.create(data);
        return response;
        } catch (error) {
            console.log('error is repo layer while creating');
            throw error;
        }
        
    }
    async getAll()
    {
        try {
            const response = await NotificationTicket.findAll();
            return response;
        } catch (error) {
            console.log('error is repo layer while fetching');
            throw error;
        }
    }
};
module.exports = ReminderTicketRepo;
