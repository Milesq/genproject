function main ({config}, pName) {
    let possibility = [
        ['PHP', 'php'],
        ['PHP with symfony', 'symfony'],
        ['PHP with the simplest MVC skeleton', 'mf'],
        ['NodeJS', 'nodejs'],
        ['NodeJS with ExpressJS', 'expressjs']
    ];
    
    possibility.forEach(el => {
        if(el[0] == config.backend)
            possibility = el[1];
    });
    require(`./backend/${possibility}-init.js`)(config, pName);
}

module.exports = main;