function main() {
    let readline = require('readline');
    let input = require('readline-sync');
    let path = require('path');

    let engine = require('./lib/engine/engine');
    let getConfig = require('./lib/getconfig');
    let ConfigParser = require('./lib/configParse');
    let Select = require('./lib/select');

    require('colors');
    let parser = new ConfigParser();

    parser.content.name = input.question("Imie: ");
    parser.content.description = input.question("Opis projektu: ");
    parser.content.projectName = input.question("Nazwa projektu: ");

    let io = readline.createInterface(process.stdin, process.stdout);

    getConfig(io).then(resp => {
        resp = resp.map(el => el.split('').reverse().splice(5).reverse().splice(5).join(''));
        console.clear();
        parser.load(resp);

        new Select(`Wygenerowana treść dla genProject.conf.json
        ${parser.content}
        Czy tak może wyglądać plik konfiguracyjny?`, ['Tak'.blue, 'Nie'.red], io, 1, 'white').then(resp => {
            io.close();
            if(resp.search('Tak') != -1) {
                parser.save();
                engine(path.resolve('./genProject.conf.json'));
            }
            else process.exit();
        });
    });
}

module.exports = main;