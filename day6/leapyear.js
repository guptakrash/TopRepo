const prompt = require('prompt-sync')();
const year = +prompt("enter a year:");
leapyear =(year%100!==0 && year%4===0 || year%400===0)?("this year is leap year"):("not a leap year");
console.log(leapyear);