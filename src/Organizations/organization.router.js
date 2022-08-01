const express = require('express');
require('dotenv').config()

const organizationRouter = express.Router();
const {createOrganization,getOrganization} =require('./organization.controller')



organizationRouter.post('/create-organization',createOrganization);
organizationRouter.get('/get-organization',getOrganization);









module.exports=organizationRouter