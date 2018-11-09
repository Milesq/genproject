let sys = require('node-cmd');
let rd = require('readline-sync').question;
let ut = require('./utility.js');
const colors = require('colors');
let log = ut.log;

log(`Project generator ${ut.ver}
Front-end language`.blue);
rd('What will you use?\n');
log('JS\nTS');