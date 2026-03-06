const shortid = require('shortid');

const generateShortId = (customAlias = null) => {
  if (customAlias) {
    return customAlias.toLowerCase().replace(/[^a-z0-9]/g, '');
  }
  return shortid.generate().toLowerCase();
};

module.exports = generateShortId;
