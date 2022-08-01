const  { credentialsClient } = require('../Config/config')







  module.exports={
async createconnection (req,res){
    try {
        let name = null;
let connectionId = null;
let multiParty = false;
let connection = await credentialsClient.createConnection({
  name: req.body.name,
  connectionId: req.body.connectionId,
  multiParty:req.body. multiParty
});
res.json({
    message:'Create Connection Successful.....',
    status:200,
    success:true,
     data:connection
    });
    } catch (error) {
        console.log(error)
    }
},


async getAllconnection (req,res){
    try {
      // console.log("hiii",state)
         let state = null; 
let connections = await credentialsClient.listConnections(state);
res.json({
    message:'Get All Connection Successful.....',
    status:200,
    success:true,
     data:connections
    });
    } catch (error) {
       console.log(error) 
    }
}
  }