const now = new Date().toLocaleString();
const text = 'Hello Node'
console.log(text);

const fs = require('fs');

const data = `
    Hello, 
    Node and
    JavaScript!
`
fs.writeFileSync('nodejs.txt', data);

let read = fs.readFileSync('nodejs.txt', {encoding: 'utf-8'});
console.log(read);

console.log(__dirname);
console.log(__filename);