function main() {
    let readline = require('readline');
    let input = require('readline-sync');
    let path = require('path');

    let engine = require('./lib/engine/engine');
    let getConfig = require('./lib/getconfig');
    let ConfigParser = require('./lib/configParse');
    let Select = require('./lib/select');

    require('colors');
    let parser = new ConfigParser;

    parser.content.name = input.question("Author name: ");
    parser.content.description = input.question("Project description: ");
    let projectName = input.question("Project name: ");
    parser.content.projectName = projectName;

    let io = readline.createInterface(process.stdin, process.stdout);

    getConfig(io).then(resp => {
        resp = resp.map(el => el.split('').reverse().splice(5).reverse().splice(5).join(''));
        console.clear();
        parser.load(resp);

        new Select(`Generated content of genProject.conf.json
        ${parser.content}
        Could this be the configuration file?`, ['Yes'.blue, 'No'.red], io, 1, 'white').then(resp => {
            io.close();
            if(resp.search('Yes') != -1) {
                parser.save();
                engine(path.resolve(`./genProject-${projectName}.conf.json`));
            }
            else process.exit();
        });
    });
}

module.exports = main;