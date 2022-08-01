const  { providerClient } = require('../Config/config')





module.exports ={
    async listAlltenants (req,res){
    try {
        let tenants = await providerClient.listTenants();
        res.json({
        message:'Get All list Successful',
        status:200,
        success:true,
         data:tenants
        });

    } catch (err) {
        console.log(err)
        
    }
},


async keyprovide (req,res){
    try {
  let tenantKey= await providerClient.getTenantKeys( req.body.tenantId);
        
        res.json({
        message:'key provide Successful',
        status:200,
        success:true,
         data:tenantKey
        });

    } catch (err) {
        console.log(err)
        
    }
},


}
