class ConfigFile {
    constructor(_name = "./genProject.conf.json") {
        this.name = _name;
        this.content = '';
    }

    load(tab) {
        this.content = `{
               "frontLanguage": "${tab[0]}",
               "frontFreamwork": "${tab[1]}",
               "cssPreCompiler": "${tab[2]}",
               "toolBuilder": "${tab[3]}",
               "unitTests": "${tab[4]}",
               "backend": "${tab[5]}"
           }`;
    }

    save() {
        require('fs').writeFileSync(this.name, this.content);
    }
}

module.exports = ConfigFile;