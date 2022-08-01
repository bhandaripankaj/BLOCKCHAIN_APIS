const  { credentialsClient } = require('../Config/config')





  module.exports= {
 async createTemplate (req,res){
      
    try {
        let attributes = ["name", "email","branch"];
let credentialDefinition = await credentialsClient.createCredentialDefinition({
  name:req.body.name,
  version: "1.0", 
  attributes: attributes,
  supportRevocation: false,
  tag:req.body.tag
})
res.json({
    message:'Create Template Successful.....',
    status:200,
    success:true,
     data:credentialDefinition
    });
    } catch (error) {
        console.log(error)
    }


 },


 async getalltemplate (req,res){
     try {
        let getalltemplate = await credentialsClient.listCredentialDefinitions();
        res.json({
            message:'Get All Template Successful.....',
            status:200,
            success:true,
             data:getalltemplate
            });
     } catch (er) {
         console.log(er)
         
     }
 },

 async gettemplate (req,res){
     try {
        let gettemplate = await credentialsClient.getCredentialDefinition(req.body.process.env.CRED_DEF_ID
        );
        res.json({
            message:'Get  Template Successful.....',
            status:200,
            success:true,
             data:gettemplate
            });
     } catch (error) {
         console.log(error)
     }
 }
  }