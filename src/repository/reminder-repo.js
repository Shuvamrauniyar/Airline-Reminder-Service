const {NotificationTicket} = require('../models/index');
const {Op} = require('sequelize');
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
    async getbyFilter(filter)
    {
        try {
            const response  = await NotificationTicket.findAll({
                where:{
                    status: filter.status,
                    notificationTime:{
                        [Op.lte]: new Date()
                    }
                }
            })
            return response;
        } catch (error) {
            console.log('error is repo layer while filtering');
            throw error;
        }
    }
    async update(ticketId,data)
    {
        try {
            const response  = await NotificationTicket.findByPk(ticketId);
            if(data.status)
            {
                response.status = data.status;
            }
            await response.save();
            return response;
        } catch (error) {
            console.log('error is repo layer while updating ticket');
            throw error;
        }
    }
};
module.exports = ReminderTicketRepo;
