const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router =require('./src/router')
require('dotenv').config()
const fetch = require('node-fetch');


const port = 3001
require('./src/Config/config.DB');



app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

  

app.use('/api',router);


app.listen(port,()=>{
    console.log(`listening port ${port}`)
});



module.exports = app