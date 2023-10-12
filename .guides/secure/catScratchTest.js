const catScratch = require('../../catScratch');
let input = process.argv[2].toLowerCase();
let b = input === 'true' ? true : false;
let x = parseInt(process.argv[3]);
console.log(catScratch(b, x));