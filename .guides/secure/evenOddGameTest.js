const evenOddGame = require('../../evenOddGame');
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let input = process.argv[4].toLowerCase();
let c = input === 'true' ? true : false;
console.log(evenOddGame(a,b,c));