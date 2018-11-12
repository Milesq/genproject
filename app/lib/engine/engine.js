const fs = require('fs');
const sys = require('node-cmd').run;
const config = {
    npm: require('./lib/config-npm'),
    karma: require('./lib/karma.conf.js'),
    gulp: require('./lib/config-gulp')
};

function main(path) {
    let file = JSON.parse(fs.readFileSync(path)),
        pName = file.projectName; // project name
    
    fs.mkdirSync(pName);
    fs.mkdirSync(pName + '/app');
    fs.writeFileSync(pName + '/README.md', '# new project');
    fs.writeFileSync(pName + '/.gitignore', 'node_modules/\ndist/');

    if(file.config.unitTests != 'None') {
        fs.mkdirSync(`${pName}/spec`);
        fs.writeFileSync(`${pName}/karma.conf.js`, config.karma);
        
        if(file.config.unitTests == 'Karma+Jasmine') {
            console.log('Installing Karma');
            sys(`npm i karma -g`);
            console.log('Installing Karma chrome launcher');
            sys(`npm i karma-chrome-launcher -g`);
            console.log('Installing Karma Jasmine');
            sys(`npm i karma-jasmine -g`);
        }
    }
    
    if (file.config.doxygen == "Tak") {
        sys(`cd ${pName} & doxygen -g`);
    }
    config.npm(file);
    config.gulp(file);
}

module.exports = main;