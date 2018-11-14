let beautify = require('json-beautify');

class ConfigFile {
    constructor(_name = "./genProject.conf.json") {
        this.name = _name;
        this.content = {};
    }

    load(tab) {
        this.content.config = {
            frontLanguage: tab[0],
            frontFreamwork: tab[1],
            htmlPreProcesor: tab[2],
            cssPreProcesor: tab[3],
            unitTests: tab[4],
            backend: tab[5],
            whyBackend: tab[6],
            doxygen: tab[7]
        };
        this.content = beautify(this.content, null, 2);
    }

    save() {
        require('fs').writeFileSync(this.name, this.content);
    }
}

module.exports = ConfigFile;