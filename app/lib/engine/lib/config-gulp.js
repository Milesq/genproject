const fs = require('fs');

function main (config) {
    let pName = config.projectName,
        gulpfile = fs.readFileSync('gulpfile.js');

    fs.writeFileSync(`${pName}/gulpfile.js`, gulpfile);
}

module.exports = main;