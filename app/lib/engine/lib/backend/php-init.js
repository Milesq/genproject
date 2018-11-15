const fs = require('fs');

function main (config, pName) {
    switch(config.whyBackend) {
        case 'Jako API':
            fs.mkdirSync(`${pName}/api`);
            break;
        case 'Do renderowania szablonów HTML':
            fs.mkdirSync(`${pName}/dest`);
            fs.writeFileSync(pName+'/dest/index.php', '<?php');
            fs.writeFileSync(pName+'/dest/readme', 'send this folder to server');
            break;
        case 'Staromodnie, do całej witryny':
            fs.writeFileSync(`${pName}/app/index.php`, '<?php');
            break;
    }
}

module.exports = main;