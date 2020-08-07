/**
 * @fileoverview utilizado para comprobaciones.
 * 
 * Todavía no puedo solucionar el tema del intercambio
 * entre servidores y pasaje de JSONs,
 * me parece que G enviará queries a T en lugar de body
 */

const https = require('https');
const options = {
  hostname: "https://dashboard.heroku.com/apps/diegommf-themisto",
  port: 443,
  path: '/',
  method: 'GET'
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  });
});

req.on('error', error => {
  console.error(error)
});

req.end();