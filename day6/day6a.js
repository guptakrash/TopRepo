//const prompt = require('prompt-sync')();
const num =+prompt("enter a number:");
result=(num%8===0 && num%10===8)?("number is valid "):("number is not valid");
console.log(result);