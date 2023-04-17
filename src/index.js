const express = require('express');
const bodyparser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');
const app = express();

const startServer = async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,() => {
        console.log(`server is listening at ${PORT}`);
    })
};
startServer();