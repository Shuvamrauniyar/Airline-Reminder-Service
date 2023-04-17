const express = require('express');
const bodyparser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');
const {sendEMail} = require('./service/email-service');
const app = express();
//for smtp server ,here we will use gmail service but you can also look for twilio or sendgrid
const startServer = async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,() => {
        console.log(`server is listening at ${PORT}`);
        sendEMail(
             'shuvamforbackend@gmail.com',
             'shubhamrauniyar48@gmail.com',
             'urgent',
             'hello Suraj,I am learning backend development'
        )
    })
};
startServer();