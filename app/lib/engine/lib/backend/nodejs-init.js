const fs = require('fs');

function main (config, pName) {
    switch(config.whyBackend) {
        case 'Jako API':
            fs.mkdirSync(`${pName}/api`);
            break;
        case 'Do renderowania szablonów HTML':
            fs.mkdirSync(`${pName}/dest`);
            fs.mkdirSync(`${pName}/dest/web`);
            fs.writeFileSync(pName+'/dest/index.js', '<?php');
            fs.writeFileSync(pName+'/dest/readme', 'send this folder to server');
            break;
        case 'Staromodnie, do całej witryny':
            fs.writeFileSync(`${pName}/app/index.js`, '');
            break;
    }
}

module.exports = main;