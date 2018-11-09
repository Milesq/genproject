require('colors');

class Select 
{
    changeSelected (inMinus=true) {
        if(inMinus)
            if(this.selected+1 == this.param.length) this.selected = 0;
            else ++this.selected;
        else
            if(this.selected == 0) this.selected = this.param.length-1;
            else --this.selected;
        this.displayOption();
    }

    displayOption () {
        console.clear();
        console.log(this.ask);
        this.param.forEach((el, i) => {
            let char = ' ';
            if (this.selected == i) char = '>'.red;
            this.io.write(`${char} ` + el + '\n');
        });
    }

    onKeypress (key) {
        if(key.name == 'up') this.changeSelected(false);
        if(key.name == 'down') this.changeSelected(true);
        if(key.name == 'return') this.resolve(this.param[this.selected]);
    }

    constructor (_ask, _param, _io) {
        if(typeof(_param) != typeof([]) || _param.length <= 1) {
            throw 'Incorrect value for param!';
        }

        process.stdin.on('keypress', (ev, key) => {this.onKeypress(key)});

        this.ask = _ask;
        this.param = _param;
        this.io = _io;
        this.selected = 0;

        this.displayOption();
        return new Promise(function (_resolve) {
            this.resolve = _resolve;
        }.bind(this));
    }
}
module.exports = Select;