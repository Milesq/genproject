const dtp = require('directory-to-plain-text');

function main (config, pName) {
    dtp.unpack(require('./MVCTemplate.js'), pName);
    require('fs').renameSync(`${pName}/MVCTemplate`, `${pName}/public`);
    return true;
}

module.exports = main;