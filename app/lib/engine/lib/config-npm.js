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
    dependencies: {}
};

function save (cnt, pName) {
    fs.writeFileSync(`${pName}/package.json`, stringify(cnt, null, 2));
}

function main (configFile) {
    package.name = configFile.projectName;
    package.author = configFile.name;
    package.description = configFile.description;

    if (configFile.config.unitTests == 'Karma+Jasmine')
        package.scripts.test = 'karma start & exit 0';

    if (configFile.config.frontLanguage == "TypeScript") {
        package.dependencies['typescript'] = '^2.8.3';
        package.dependencies['gulp-typescript'] = '^4.0.2';
    }

    if (configFile.config.htmlPreProcesor == "Jade")
        package.dependencies['gulp-pug'] = '^4.0.1';

    if (configFile.config.cssPreCompiler != "None") {
        package.dependencies['gulp-sass'] = '^3.1.0';
        package.dependencies['gulp-sourcemaps'] = '^2.6.1';
    }

    save(package, configFile.projectName);
}

module.exports = main;