const VER = '0.0.1';

//let sys = require('node-cmd');
let colors = require('colors');
let readline = require('readline');

let getConfig = require('./getconfig');

let io = readline.createInterface(process.stdin, process.stdout);

getConfig(io).then(resp => {
    resp = resp.map(el => el.split('').reverse().splice(5).reverse().splice(5).join(''));
    console.log(resp);
    io.close();
});