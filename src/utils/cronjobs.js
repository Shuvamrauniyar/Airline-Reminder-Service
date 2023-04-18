const cron = require('node-cron');
const emailService = require('../service/email-service');

const jobs = () => {
     //use cron guru website to understand the meaning of below like lines
    cron.schedule('*/2 * * * *',async () => {
        console.log('cron running');
        const response = await emailService.fetchPendingEmails();
        console.log(response);
    });
};
module.exports = jobs;