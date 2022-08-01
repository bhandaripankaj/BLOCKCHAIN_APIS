const express = require('express');
require('dotenv').config()

const tenantrrouter = express.Router();
const {listAlltenants,keyprovide} = require('./tenants.controller')

tenantrrouter.get('/Get-allList',listAlltenants);
tenantrrouter.get('/get-key',keyprovide);











module.exports = tenantrrouter