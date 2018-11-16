const Select = require('./select');
require('colors');

let cnfTemplate = [{
        description: 'Choose frontend language',
        values: ['JavaScript'.blue, 'TypeScript'.blue]
    },
    {
        description: 'Choose frontend freamwork',
        values: ['Vue'.green, 'None'.white]
    },
    {
        description: 'Choose type of documents',
        values: ['HTML'.red, 'Jade'.white]
    },
    {
        description: 'Choose preprocesor CSS\'a',
        values: ['Sass'.red, 'Sass(Scss syntax)'.red, 'None'.white]
    },
    {
        description: 'Where do you want to write unit tests?',
        values: ['Karma+Jasmine'.red, 'None'.white]
    },
    {
        description: 'What will you use to write backend?',
        values: ['PHP'.magenta,
            'PHP with symfony'.white,
            'PHP with the simplest MVC skeleton'.white,
            'NodeJS'.green,
            'NodeJS with ExpressJS'.green,
            'None'.white
        ]
    },
    {
        description: 'Why you will be using backend?',
        values: ['To render HTML templates'.magenta,
            'As API'.white,
            'Inline scripts'.red
        ]
    },
    {
        description: 'Will you use it? Doxygen\'a?',
        values: ["Yes".blue, "No".white]
    }
];

let answers = [];

function getConfig(io) {
    return new Promise(resolve => {
        let current = cnfTemplate.shift();
        new Select(current.description, current.values, io).then(resp => {
            answers.push(resp);
            if (cnfTemplate.length > 0) {
                getConfig(io).then(resp => {
                    resolve(resp)
                })
            } else {
                resolve(answers);
            }
        });
    });
}

module.exports = getConfig;