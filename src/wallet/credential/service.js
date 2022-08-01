const {walletClient} =require('../../Config/config');




module.exports={
    async acceptcredential (req,res){
        try {
            let credential = await walletClient.acceptCredentialOffer(req.body.walletId, req.body.credentialId);
            console.log("hiiiiiiiiiiisdfsdf",credential)
            res.json({
                message:'Create Credential Successful.....',
                status:200,
                success:true,
                 data:credential
                });
        } catch (error) {
            
        }
    },


    async getcredentialForconnection (req,res){
        try {

            let data = await walletClient.listCredentialsForConnectionId(req.body.walletId, req.body.connectionId);
            console.log("hiiiiiiiiiiii",data)
                
            res.json({
                message:'Get Credential Successful.....',
                status:200,
                success:true,
                 data:data
                });

        } catch (error) {
            console.log(error)
        }
    },

    async getcredentials (req,res){
        try {
            let credentials = await walletClient.listCredentials(req.body.walletId);
            res.json({
                message:'accept  Credential Successful.....',
                status:200,
                success:true,
                 data:credentials
                });
        } catch (error) {
            console.log(error)
        }
    },
}