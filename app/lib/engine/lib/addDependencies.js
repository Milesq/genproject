function main(pck, config) {
    let ts = config.frontLanguage == 'TypeScript',
        jade = config.htmlPreProcesor == 'Jade',
        sass = config.cssPreProcesor == 'Sass',
        scss = config.cssPreProcesor == 'Sass(Scss syntax)';
    let pckToAdd = [
        ["gulp-pug", "^4.0.1", jade],//last el = what mus be to add this package
        ["gulp-sass", "^4.0.2", sass||scss],
        ["gulp-sourcemaps", "^2.6.4", sass||scss||ts],
        ["gulp-typescript", "^5.0.0-alpha.3", ts],
        ["node-sass", "^4.10.0", sass||scss],
        ["typescript", "^3.1.6", ts]
    ].filter(e => e[2]);
    
    pckToAdd.forEach(el => {
        pck.devDependencies[el[0]] = el[1];
    });

    return pck;
}

module.exports = main;