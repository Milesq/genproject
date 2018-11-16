const fs = require('fs'),
      Select = require('./../select'),
      del = require('del'),
      sys = require('node-cmd').run;

const config = {
    npm: require('./lib/config-npm'),
    karma: require('./lib/karma.conf.js'),
    gulp: require('./lib/config-gulp'),
    backend: require('./lib/config-backend'),
    primaryFiles: require('./primaryFiles')
};

function moduleExist (name) {
    return fs.existsSync(`${require('global-modules')}/${name}`);
}

function engine(path) {
    let file = JSON.parse(fs.readFileSync(path)),
        pName = file.projectName; // project name

    //#region making directories
    fs.mkdirSync(pName);
    fs.mkdirSync(pName + '/app');
    fs.writeFileSync(pName + '/README.md', '# new project');
    fs.writeFileSync(pName + '/.gitignore', 'node_modules/\ndist/');
    sys(`cd ${pName} && git init`);

    if(file.config.backend != 'None' && file.config.whyBackend == 'To render HTML templates') {
        fs.mkdirSync(`${pName}/backend`);
        fs.writeFileSync(`${pName}/backend/readme.txt`,
         'Copy content of dist/ to this directory');
    }

    fs.mkdirSync(`${pName}/app/js`);
    fs.mkdirSync(`${pName}/app/css`);

    //#endregion
    if(file.config.unitTests != 'None') {
        fs.mkdirSync(`${pName}/spec`);
        fs.writeFileSync(`${pName}/karma.conf.js`, config.karma);
        
        if (file.config.unitTests == 'Karma+Jasmine') {
            if (!moduleExist('karma')) {
                console.log('Installing Karma');
                sys(`npm i karma -g`);
            }

            if (!moduleExist('karma-jasmine')) {
                console.log('Installing Karma Jasmine');
                sys(`npm i karma-jasmine -g`);
            }

            if (!moduleExist('karma-chrome-launcher')) {
                console.log('Installing Karma chrome launcher');
                sys(`npm i karma-chrome-launcher -g`);
            }
        }
    }
    
    if (file.config.doxygen == "Yes")
        sys(`cd ${pName} & doxygen -g`);
    config.primaryFiles(file, pName);
    config.npm(file);
    config.gulp(file);
    if(file.config.backend != 'None')
        config.backend(file, pName);
}

function main(path) {
    let file = JSON.parse(fs.readFileSync(path)),
        pName = file.projectName,
        readline = require('readline'),
        rli = readline.createInterface(process.stdin, process.stdout);


    if (fs.existsSync(pName)) {
        new Select("Directory already exists!\nDelete `" + pName + "` directory?",
        ['Yes', 'No'],
        rli,
        1).then(resp => {
            rli.close();
            if(resp == "No") process.exit();
            else {
                del(pName+'/').then(() => {
                    engine(path);
                });
            }
        });
    } else {
        rli.close();
        engine(path);
    }
}

module.exports = main;