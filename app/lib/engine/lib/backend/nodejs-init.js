const fs = require('fs');

function main (config, pName) {
    switch(config.whyBackend) {
        case 'As API':
            fs.mkdirSync(`${pName}/api`);
            break;
        case 'To render HTML templates':
            fs.mkdirSync(`${pName}/dest`);
            fs.mkdirSync(`${pName}/dest/web`);
            fs.writeFileSync(pName+'/dest/index.js', '<?php');
            fs.writeFileSync(pName+'/dest/readme', 'send this folder to server');
            break;
        case 'Inline scripts':
            fs.writeFileSync(`${pName}/app/index.js`, '');
            break;
    }
}

module.exports = main;