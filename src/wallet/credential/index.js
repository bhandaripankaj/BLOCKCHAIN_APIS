// const express = require('express');
// const router = express.Router();
// const { CredentialsServiceClient , Credentials } = require("@trinsic/service-clients");
// const  cache = require('../../model');
// const fetch = require('node-fetch');


// const client = new CredentialsServiceClient(
//     new Credentials(process.env.ACCESSTOK),
//     { noRetryPolicy: true });





//     module.exports={
//         async createoffer (req,res){

//           try {
//             const url = 'https://api.trinsic.id/credentials/v1/credentials';
//             const options = {
//               method: 'POST',
//               headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/*+json',
//                 Authorization: req.headers.token
//               },
//               body:JSON.stringify(req.body)
//               //  '{"credentialValues":{"name":"pankaj singh ","email":"pankajbhandari933@gmail.com","d.o.b":"30/04/1999","brance":"cse"},"definitionId":"9PeRFAwieeNsafCe3R6fTq:3:CL:211147:Default","automaticIssuance":false}'
//             };
            
//             fetch(url, options)
//               .then(res => res.json())
//               .then(json => res.send(json))
//               .catch(err => console.error('error:' + err));




            
//               // const attribs = cache.get(req.body.object_id)
//               // if (attribs) {
//               //    let param_obj = JSON.parse(attribs);
//               //   let params = {
//               //     definitionId: process.env.CRED_DEF_ID,
//               //     connectionId: req.body.object_id,
//               //     automaticIssuance: true,
//               //     credentialValues: {
//               //       "name": param_obj["name"],
//               //       "email": param_obj["email"],
                
//               //       "d.o.b": param_obj["d.o.b"],
//               //       "brance": param_obj["brance"]
//               //     }
                
//               //   }
//               //   await client.createCredential(params);
//               // }
//             }
//           catch (e) {
//             console.log(e.message || e.toString());
//           }
//         },
//     }
