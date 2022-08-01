const {walletClient} =require('../../Config/config');


module.exports={
    async acceptconnection (req,res){
        try {
            
            let connection = await walletClient.acceptInvitation(req.body.walletId, req.body.invitation);

res.json({
    message:'Create Credential Successful.....',
    status:200,
    success:true,
     data:connection
    });
        } catch (error) {
            console.log(error)
        }
    }
}