const fs = require('fs');
const sys = require('node-cmd').run;
const config = {
    npm: require('./lib/config-npm'),
    karma: require('./lib/karma.conf.js'),
    gulp: require('./lib/config-gulp'),
    backend: require('./lib/config-backend')
};

function moduleExist (name) {
    return fs.existsSync(`${require('global-modules')}/${name}`);
}

function main(path) {
    let file = JSON.parse(fs.readFileSync(path)),
        pName = file.projectName; // project name
        
    config.npm(file);
    return false;
    if(fs.existsSync(pName)) {
        console.error(`Directory already '${pName}/' exists!`);
        process.exit();
    }
    //#region making directories
    fs.mkdirSync(pName);
    fs.mkdirSync(pName + '/app');
    fs.writeFileSync(pName + '/README.md', '# new project');
    fs.writeFileSync(pName + '/.gitignore', 'node_modules/\ndist/');

    if(file.config.backend != 'None')
        fs.mkdirSync(`${pName}/api`);

    if (file.config.frontLanguage == 'js')
        fs.mkdirSync(`${pName}/app/js`);
    else
        fs.mkdirSync(`${pName}/app/ts`);

    if (file.config.cssPreProcesor == 'css')
        fs.mkdirSync(`${pName}/app/css`);
    else
        fs.mkdirSync(`${pName}/app/sass`);

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
    
    if (file.config.doxygen == "Tak")
        sys(`cd ${pName} & doxygen -g`);
    config.npm(file);
    config.gulp(file);
    // config.backend(file);
}

module.exports = main;