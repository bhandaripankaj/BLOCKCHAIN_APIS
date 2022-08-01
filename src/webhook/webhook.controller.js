const {webhookservice} = require('./webhook.service')
require('dotenv').config();
const fetch = require('node-fetch');
 import users from '../Model/model'; 

const express = require('express');
const { CredentialsServiceClient , Credentials } = require("@trinsic/service-clients");
const cache = require('../../model');
//  const serviceurl = "https://api.trinsic.id/credentials/v1/connections";
const url = "https://api.trinsic.id/wallet/v1/api/walletId/connections/connectionId";

const client = new CredentialsServiceClient(
    new Credentials(process.env.ACCESS_TOKEN),
    { noRetryPolicy: true });

module.exports={

    async webhook (req,res){
        try {
            console.log("got webhook" + req + "   type: " + req.body.message_type);
            if (req.body.message_type === 'new_connection') {
              console.log("new connection notification");
              const attribs = cache.get(req.body.object_id)
              if (attribs) {
                let param_obj = JSON.parse(attribs);
                let params = {
                  definitionId: process.env.CRED_DEF_ID,
                  connectionId: req.body.object_id,
                  automaticIssuance: true,
                  credentialValues: {
                    "name": param_obj["name"],
                    "email": param_obj["email"],
                    "branch": param_obj["branch"],
                    "Phoneno": param_obj["Phoneno"],
                
                  }
                }
                await client.createCredential(params);
              }
            }
          }
          catch (e) {
            console.log(e.message || e.toString());
          }
        

    },
    async orgwebhook (req,res){
      const Wallet = users.findOne({})
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/*+json",
          Authorization: process.env.ACCESS_TOKEN,
        },
        body: {
          message_type:req.body.message_type,
          object_id:req.body.object_id,
    data:{
      object_id:"https://api.trinsic.id/credentials/v1/connections",
      Wallet:req.body.WalletId
    }
        },
      };
  
      return await  fetch(url,options)
        .then((res) => res.json())
         .then((json) => {
           console.log(json);
           res.status(200).send(json);
         })
        .catch((err) => {
          console.error("error:" + err);
          //  return err
           res.status(500).send(err.message);
        });
    
    }
}


