const express = require('express')
const { orgwebhook } = require('./webhook.controller')




const webhookrouter = express.Router();


// webhookrouter.post('/create-wallet',webhook)
webhookrouter.post('/create-webhook',orgwebhook)



module.exports=webhookrouter
