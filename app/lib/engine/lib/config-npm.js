const fs = require('fs');
const stringify = require('json-beautify');

let package = {
    name: "",
    version: "0.0.1",
    description: "",
    main: "",
    scripts: {
        test: "exit 0"
    },
    keywords: [],
    author: "",
    license: "ISC",
    devDependencies: {}
};

function save(cnt, pName) {
    fs.writeFileSync(`${pName}/package.json`, stringify(cnt, null, 2));
}

function main(configFile) {
    package.name = configFile.projectName;
    package.author = configFile.name;
    package.description = configFile.description;

    if (configFile.config.unitTests == 'Karma+Jasmine')
        package.scripts.test = 'karma start & exit 0';

    save(package, configFile.projectName);
}

module.exports = main;