
// hashing passwords

const crypto = require('crypto');

const hashpassword = (plainText) => {
  return crypto.createHmac('sha256', 'secret key')
    .update(plainText)
    .digest('hex');
}

modules.exports = { hashpassword };
