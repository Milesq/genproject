const VER = '0.0.1';

let colors = require('colors');
let readline = require('readline');

const engine = require('./lib/engine/engine');

let getConfig = require('./lib/getconfig');
let ConfigParser = require('./lib/configParse');
let Select = require('./lib/select');

let io = readline.createInterface(process.stdin, process.stdout);

getConfig(io).then(resp => {
    resp = resp.map(el => el.split('').reverse().splice(5).reverse().splice(5).join(''));
    console.clear();

    let parser = new ConfigParser();
    parser.load(resp);

    new Select(`Wygenerowana treść dla genProject.conf.json
    ${parser.content}
    Czy tak może wyglądać plik konfiguracyjny?`, ['Tak'.blue, 'Nie'.red], io, 1, 'white').then(resp => {
        io.close();
        if(resp.search('Tak') != -1) {
            parser.save();
            engine('realpathToConf.json');
        }
        else process.exit();
    });
});