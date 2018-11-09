const Select = require('./select');
require('colors');

let cnfTemplate = [
    {
        description: 'Wybierz język do frontendu',
        values: ['JavaScript'.blue, 'TypeScript'.blue]
    },
    {
        description: 'Wybierz frontendowy freamwork',
        values: ['Vue'.green, 'None'.white]
    }//,
    // {
    //     description: 'Wybierz kompilator CSS\'a',
    //     values: ['Sass'.red, 'Sass(Scss syntax)'.red, 'None'.white]
    // },
    // {
    //     description: 'Wybierz tool builder',
    //     values: ['Gulp'.red, 'None'.white]
    // },
    // {
    //     description: 'W czym chcesz pisać testy jednostkowe?',
    //     values: ['Karma+Jasmine', 'None'.white]
    // },
    // {
    //     description: 'Czego będziesz używał do backendu?',
    //     values: ['PHP'.cyan,
    //         'PHP with symfony'.bgBlack.white,
    //         'PHP with my own Freamwork'.rainbow,
    //         'NodeJS'.bgGreen.black,
    //         'NodeJS with ExpressJS',
    //         'None'.zebra
    //     ]
    // }
];

let answers = [];

function getConfig(io) {
    return new Promise(resolve => {
        let current = cnfTemplate.shift();
        new Select(current.description, current.values, io).then(resp => {
            answers.push(resp);
            if (cnfTemplate.length > 0) {
                getConfig(io).then(resp => {resolve(resp)})
            } else {
                resolve(answers);
            }
        });
    });
}

module.exports = getConfig;