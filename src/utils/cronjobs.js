const cron = require('node-cron');
const sender = require('../config/emailConfig');
const emailService = require('../service/email-service');

const jobs = () => {
     //use cron guru website to understand the meaning of below like lines
    cron.schedule('*/20 * * * * *',async () => {
        console.log('cron running');

        const response = await emailService.fetchPendingEmails({status:'PENDING'});
        console.log(response);
        response.forEach((email) => {
            sender.sendMail({
                //from:
                to: email.recipientEmail,
                subject: email.subject,
                text: email.content
            }, async(err,data) =>{ ///this is the predefined callback we get in sendMail method(sendmail is also predefined)
                if(err)
                {
                    console.log(err);
                }
                else{
                     await emailService.update(email.id,{status:'SUCCESS'});
                    
                }
            })

        });
        //console.log(response);
    });
};
module.exports = jobs;