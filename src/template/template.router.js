const express = require('express');
const templateRouter = express.Router();
const {createTemplate,getalltemplate,gettemplate} = require('./template.controller')


templateRouter.post('/create-template',createTemplate);
templateRouter.get('/getAll-template',getalltemplate);
templateRouter.get('/get-template',gettemplate);









 module.exports=templateRouter