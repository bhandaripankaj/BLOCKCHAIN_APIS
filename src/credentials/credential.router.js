const express = require('express');
require('dotenv').config()

const credentialrouter = express.Router();
const {createAndofferCredentials,getallcredentials} = require('./credential.controller')

credentialrouter.post('/create-offer',createAndofferCredentials);
credentialrouter.get('/get-credentials',getallcredentials);









module.exports=credentialrouter