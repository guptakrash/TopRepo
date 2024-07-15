const prompt = require('prompt-sync')();
const age=+prompt("enter your age:");
result=((age>=18 && age<60)?"eligible for vote":
        (age>=59)?"senior citizen":
        (age>=13)?"school student":
        (age>=6)?"children":
        (age>3)?"kids":"not valid");
console.log(result);

