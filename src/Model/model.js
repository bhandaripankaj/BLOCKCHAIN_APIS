const mongoose = require('mongoose')
const mongodb = require('../Config/config.DB')

var Schema = mongoose.Schema;



const walletSchema  = new Schema({ 
    ownerName: {type:String},
    walletId: {
     type: String,
     unique: true,
     }
});
module.exports = mongoose.model('wallets',walletSchema);

const userSchema  = new Schema({ 
walletId: {type: String,unique: true},
phoneNumber:{type:Number},
authToken:{type:String},
refreshToken:{type:String},
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now },

});
module.exports = mongoose.model('users',walletSchema);