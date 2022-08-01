const express = require('express')

const walletrouter = express.Router();
const {createWallet} = require('./service')


walletrouter.post('/create-wallet',createWallet)





module.exports=walletrouter