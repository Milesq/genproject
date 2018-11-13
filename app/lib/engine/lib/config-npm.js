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
    devDependencies: {
        "@babel/core": "^7.1.5",
        "@babel/preset-env": "^7.1.5",
        "browser-sync": "^2.26.3",
        "del": "^3.0.0",
        "gulp": "^3.9.1",
        "gulp-babel": "^8.0.0",
        "gulp-cssmin": "^0.2.0",
        "gulp-htmlmin": "^5.0.1",
        "gulp-imagemin": "^5.0.3",
        "gulp-uglify": "^3.0.1"
    }
};

function save(pName) {
    fs.writeFileSync(`${pName}/package.json`, stringify(package, null, 2));
}

function main(configFile) {
    package.name = configFile.projectName;
    package.author = configFile.name;
    package.description = configFile.description;

    if (configFile.config.unitTests == 'Karma+Jasmine')
        package.scripts.test = 'karma start & exit 0';
    
    package = require('./addDependencies')(package, configFile.config);

    save(configFile.projectName);
}

module.exports = main;