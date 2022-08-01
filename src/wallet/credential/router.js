const express = require('express');


const credentialwalletrouter = express.Router();
const {acceptcredential,getcredentialForconnection,getcredentials} = require('./service')


credentialwalletrouter.post('/accept-credential',acceptcredential);
credentialwalletrouter.get('/getall-credential-for-connection',getcredentialForconnection);
credentialwalletrouter.get('/get-credential',getcredentials);











module.exports=credentialwalletrouter