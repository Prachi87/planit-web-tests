const fs = require('fs');
const path = require('path');

// Fetch the sample file
const config = fs.readFileSync(path.join(__dirname, '../cypress.json'), { encoding: 'utf8' });

// Adding the username and password from the variable group
const configJson = JSON.parse(config);
configJson.env = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  thirdPartyServer2FAUrl: process.env.THIRDPARTYSERVER2FAURL,
  thirdPartyServerUrl: process.env.THIRDPARTYSERVERURL
};

fs.writeFileSync(path.join(__dirname, '../cypress.json'), JSON.stringify(configJson, null, 2));