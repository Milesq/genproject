const fs = require('fs');

function main (config) {
    let pName = config.projectName,
        gulpfile = '';
    gulpfile += require('./config-gulp-headers')(config.config) + '\n\n';
    gulpfile += require('./config-gulp-sources')(config.config) + '\n\n';
    // gulpfile += require('./config-gulp-default-task')(config.config) + '\n\n';

    // fs.writeFileSync(`${pName}/gulpfile.js`, gulpfile);
    fs.writeFileSync(`gulpfile.js`, gulpfile);
}

module.exports = main;