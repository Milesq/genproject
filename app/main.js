#!/usr/bin/env node

const engine = require('./lib/engine/engine');
const path = require('path');

function flag(flag) {
    switch (flag) {
        case 'version':
        case 'ver':
        case 'v':
            let {readFileSync} = require('fs');
                globalModules = require('global-modules'),
                pcgJSON = readFileSync(globalModules+'/genproject/package.json', 'utf-8');
            console.log("genproject in version: " + JSON.parse(pcgJSON).version);
            process.exit();
            break;
    }
}

process.argv.forEach(el => {
    if(/^\-\-?(.+)/.exec(el) != null) {
        flag(/^\-\-?(.+)/.exec(el)[1]);
    }
});

if (process.argv.length > 2) {
    if (require('fs').existsSync(process.argv[2])) {
        engine(path.resolve(process.argv[2]));
    } else {
        console.error("File is not exists");
    }
} else {
    require('./createConfig')();
}