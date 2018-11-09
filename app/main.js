const VER = '0.0.1';

//let sys = require('node-cmd');
let colors = require('colors');
let readline = require('readline');

let getConfig = require('./getconfig');

let io = readline.createInterface(process.stdin, process.stdout);
getConfig();