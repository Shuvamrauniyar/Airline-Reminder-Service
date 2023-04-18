const express = require('express');
const bodyparser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');
const cron  = require('node-cron');

//const {sendEMail} = require('./service/email-service');
const emailService = require('./service/email-service');
const jobs = require('./utils/cronjobs');

const apiRoutes = require('./routes/index');
const app = express();

//for smtp server ,here we will use gmail service but you can also look for twilio or sendgrid
const startServer = async()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);

    app.listen(PORT,() => {
        //use cron guru website to understand the meaning of below like lines
        // cron.schedule('*/10 * * * * *', ()=>{
        //     console.log('cron is running');
        // })
        console.log(`server is listening at ${PORT}`);
        jobs();
        // sendEMail(
        //      'shuvamforbackend@gmail.com',
        //      'shubhamrauniyar48@gmail.com',
        //      'urgent',
        //      'hello Suraj,I am learning backend development'
        // )
    })
};
startServer();