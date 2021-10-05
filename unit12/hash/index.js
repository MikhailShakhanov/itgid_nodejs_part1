const symbols = require('./config');
module.exports = function (a) {
    let hash = '';
    for (let i=0; i<a; i++) {
        hash += symbols[Math.floor(Math.random() * (symbols.length))];
    }
    return hash;
}