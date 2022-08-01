const {walletClient} =require('../../Config/config');
 const wallet =  require('../../Model/model')


module.exports={
    async createWallet (req,res){
        try {
            // let ownerName = null; 
// let walletId = null; 
let walletcreate = await wallet.create({
    ownerName: req.body.ownerName,
    walletId: req.body.walletId
});
res.json({
    message:'Create Credential Successful.....',
    status:200,
    success:true,
     data:walletcreate
    });
        } catch (error) {
            console.log(error)
        }
    }
}