const Select = require('./select');
require('colors');

function getConfig() {
    let cnfTemplate = {
        frontLanguage: {
            values: ['JavaScript'.blue, 'TypeScript'.blue]
        },
        frontFreamwork: {
            values: ['Vue'.green, 'None'.white]
        },
        cssPrecompiler: {
            values: ['Sass'.red, 'Sass(Scss syntax)'.red, 'None'.white]
        },
        buildTool: {
            values: ['Gulp'.red, 'None'.white]
        },
        unitTests: {
            values: ['Karma+Jasmine', 'None'.white]
        },
        backend: {
            values: ['PHP'.cyan,
                'PHP with symfony',
                'PHP with my own Freamwork',
                'NodeJS',
                'NodeJS with ExpressJS',
                'None'
            ]
        }
    };
}

module.exports = getConfig;