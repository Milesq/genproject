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
    },
    {
        description: 'Wybierz kompilator CSS\'a',
        values: ['Sass'.red, 'Sass(Scss syntax)'.red, 'None'.white]
    },
    {
        description: 'Wybierz tool builder',
        values: ['Gulp'.red, 'None'.white]
    },
    {
        description: 'W czym chcesz pisać testy jednostkowe?',
        values: ['Karma+Jasmine'.red, 'None'.white]
    },
    {
        description: 'Czego będziesz używał do backendu?',
        values: ['PHP'.magenta,
            'PHP with symfony'.black,
            'PHP with my own Freamwork'.yellow,
            'NodeJS'.green,
            'NodeJS with ExpressJS'.green,
            'None'.white
        ]
    },
    {
        description: 'Chcesz używać Doxygen\'a?',
        values: ["Tak".blue, "Nie".white]
    }
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