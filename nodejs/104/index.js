const dns = require('node:dns'); //imports dns modules

const options = {
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

dns.lookup('google.com', options, (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family)
});