const fs = require('fs');

function main({config}, pName) {
    let cssExt = {
        'sass(scss syntax)': 'scss',
        'sass': 'sass',
        'none': 'css'
    };

    let langs = {
        js: config.frontLanguage[0].toLowerCase() + 's',
        css: cssExt[config.cssPreProcesor.toLowerCase()],
        html: config.htmlPreProcesor.toLowerCase()
    };

    fs.writeFileSync(pName + `/app/index.${langs.html}`, 'kod ' + langs.html);
    fs.writeFileSync(pName + `/app/css/style.${langs.css}`, 'kod ' + langs.css);
    fs.writeFileSync(pName + `/app/js/main.${langs.js}`, 'kod ' + langs.js);
}

module.exports = main;