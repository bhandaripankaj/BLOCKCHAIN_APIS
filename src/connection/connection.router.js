const express = require('express');
require('dotenv').config()

const connectionrouter = express.Router();
const {createconnection,getAllconnection} = require('./connection.controller')



connectionrouter.post('/create-connection',createconnection);
connectionrouter.get('/getall-connection',getAllconnection);






module.exports=connectionrouter