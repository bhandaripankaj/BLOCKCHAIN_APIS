const  { credentialsClient } = require('../Config/config')


  

  

  module.exports ={

    async createAndofferCredentials (req,res){
        try {
            let connectionId = null; 
            let automaticIssuance = false;
            let credentialValues = {
             name:req.body.name,
             email:req.body.email,
             branch:req.body.branch
  
             };
let credential = await credentialsClient.createCredential({
  definitionId: process.env.CRED_DEF_ID,
  connectionId: connectionId,
  automaticIssuance: automaticIssuance,
  credentialValues: credentialValues
});
res.json({
    message:'Create Credential Successful.....',
    status:200,
    success:true,
     data:credential
    });
        } catch (error) {
            console.log(error)
            
        }
    },

async getallcredentials (req,res){
    try {
        
       let credentials = await credentialsClient.listCredentials({
           connectionId:req.body.connectionId,
            state:req.body.state,
             definitionId:req.body.definitionId,
            });
            res.json({
                message:'Create Credential Successful.....',
                status:200,
                success:true,
                 data:credentials
                });

        
    } catch (error) {
        console.log(error)
    }
}

  }