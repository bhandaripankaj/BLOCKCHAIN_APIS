require('dotenv').config()
 const {
    CredentialsServiceClient,
    ProviderServiceClient,
    WalletServiceClient,
    Credentials,
    ProviderCredentials 
  } = require("@trinsic/service-clients");

 

  
  module.exports.providerClient = new ProviderServiceClient(
    new ProviderCredentials(process.env.API_KEY),
    { noRetryPolicy: true }
);

module.exports. credentialsClient = new CredentialsServiceClient(
    new Credentials(process.env.ACCESS_TOKEN),
    { noRetryPolicy: true }
);

module.exports. walletClient = new WalletServiceClient(
    new Credentials(process.env.ACCESS_TOKEN),
    { noRetryPolicy: true }
);