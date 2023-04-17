const sender = require('../config/emailConfig');

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
module.exports = {
    sendEMail
};