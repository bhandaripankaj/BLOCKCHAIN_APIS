const express = require('express');

const router = express.Router();
const tenantrrouter = require('./PROVIDER-KEY/tenant.router');
const organizationRouter = require('./Organizations/organization.router')
const templateRouter = require('./template/template.router')
const credentialrouter = require('./credentials/credential.router')
const connectionrouter = require('./connection/connection.router')
const walletrouter = require('./wallet/wallet-create/router')
const credentialwalletrouter = require('./wallet/credential/router')
const connectionwalletrouter = require('./wallet/connection/connection.router')
const webhookrouter = require('./webhook/webhook.routes')






router .use('/provide-api',tenantrrouter);
router .use('/organization',organizationRouter);
router .use('/template',templateRouter);
router .use('/credentials',credentialrouter);
router .use('/connection',connectionrouter);
router .use('/wallet',walletrouter);
router .use('/wallet',credentialwalletrouter);
router .use('/wallet',connectionwalletrouter);
router.use('/webhook',webhookrouter)




 module.exports = router