const crypto = require('crypto');

/**
 *
 * @param {String} data
 * @returns Buffer
 */
function sha1(data) {
  var hash = crypto.createHash('sha1');
  hash.update(data);
  return hash.digest();
}

/**
 *
 * @param {String} data
 * @returns String
 */
function sha1_base64(data) {
  return sha1(data).toString('base64');
}

/**
 *
 * @param {String} data
 * @returns String
 */
function sha1_hex(data) {
  return sha1(data).toString('hex');
}

/**
 *
 * @param {String} data
 * @param {String} encoding base64|hex
 * @returns
 */
function sha1prng(data, encoding) {
  var hash = sha1(sha1(data)).subarray(0, 16);
  if (encoding) {
    return hash.toString(encoding);
  }
  return hash;
}

module.exports.sha1 = sha1;
module.exports.sha1_base64 = sha1_base64;
module.exports.sha1_hex = sha1_hex;
module.exports.sha1prng = sha1prng;
