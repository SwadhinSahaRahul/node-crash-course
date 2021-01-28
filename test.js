/*const name = 'Rahul';

console.log(name);*/

const greet = (name) => {
    console.log(`hello ${name}`);
};

greet('rahul');

console.log(global);

setTimeout(() => {
    console.log(`In time out`);
    clearInterval(int)
}, 3000);

const int = setInterval(() => {
    console.log('In interval');
}, 1000);

console.log(__dirname);
console.log(__filename);

const {people, ages} = require('./people');

console.log(people, ages);

const os = require('os');

console.log(os.platform(), os.homedir());