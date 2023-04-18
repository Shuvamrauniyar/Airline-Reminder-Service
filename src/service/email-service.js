const ReminderTicketRepo = require('../repository/reminder-repo');
const sender = require('../config/emailConfig');

const reminderRepo = new ReminderTicketRepo();

const sendEMail = (mailFrom,mailTo, mailSubject, mailBody) => {
    //try to use try catch here to handle any kind of error while sending mail
    //i am not using here await bcz i need to continuously sendmail and i dont  need any reply
    try {
        const response = sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        })
        //console.log(response);
    } catch (error) {
        throw (error);
    }
    
};
async function fetchPendingEmails(){
    try {
        const response = await reminderRepo.getAll();
        // we have all the mails now we need to segregate those are pending and need to be sent by now 
        return response;
    } catch (error) {
        console.log('something went wrong in service layer while fetching');
        throw error;
    }
} 

//for now we are manually creating tickets in databases but lateron we will be making entries from booking service 
const createTicket = async (data)=> {
    try {
        const response = await reminderRepo.createTicket(data);
        return response;
    } catch (error) {
        console.log('something went wrong in service layer while creating ticket');
        throw error;
    }
}

module.exports = {
    sendEMail,
    fetchPendingEmails,
    createTicket
};