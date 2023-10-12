const validVoltage = require('../../validVoltage');
let n = parseFloat(process.argv[2]);
let x = parseInt(process.argv[3]);
console.log(validVoltage(n, x));