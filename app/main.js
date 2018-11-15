#!/usr/bin/env node

const engine = require('./lib/engine/engine');
const path = require('path');

if (process.argv.length > 2) {
    if (require('fs').existsSync(process.argv[2])) {
        engine(path.resolve(process.argv[2]));
    } else {
        console.error("File is not exists");
    }
} else {
    require('./createConfig')();
}