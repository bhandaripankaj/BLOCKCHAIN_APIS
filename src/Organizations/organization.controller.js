const  { providerClient } = require('../Config/config')

module.exports ={

async createOrganization (req,res){
    try {
      let tenant = await providerClient.createTenant({
        
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        networkId: req.body.networkId,
        endorserType: req.body.endorserType,
        region: "UnitedStates"
      });
    
          res.json({
            message:'Create Organization Successful.....',
            status:200,
            // success:true,
             data:tenant
            });
        
        
    } catch (error) {
        console.log(error)
    }
},


async getOrganization (req,res){
  try {
    let tenant = await providerClient.getTenant(
      req.body.tenantId
    );
    res.json({
      message:'Get Organization Successful.....',
      status:200,
      success:true,
       data:tenant
      });

  } catch (err) {
    console.log(err)
    
  }
}


}