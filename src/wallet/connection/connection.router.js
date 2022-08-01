const express = require('express');
require('dotenv').config()

const connectionwalletrouter = express.Router();
const {acceptconnection} = require('./connection.controller')


connectionwalletrouter.post('/accept-connection',acceptconnection)





module.exports=connectionwalletrouter