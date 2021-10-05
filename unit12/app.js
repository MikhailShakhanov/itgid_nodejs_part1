const config = require('./config');

const randomInt = require('./rand');

const config2 = require('./config2');

const indexArray = require('./indexArray');

const hash = require('./hash');

console.log(config);

console.log(randomInt(4, 10));

console.log(config2);

const a = [ 
    { id : 24, name : 'Test', age : 23},
    { id : 34, name : 'User', age : 33}
]

console.log(indexArray(a, 'id'));

console.log(indexArray(a, 'name'));

console.log(hash(5));