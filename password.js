const readline = require('readline');
const { isNumberObject } = require('util/types');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("welcome to the password validator tool\nplease make sure your password is at least 10 characters long and contains a number");

reader.question("Please enter your password: ", function(input){
    let pw = input;
    let pwlen = false;
    let conNum = false;

    for (let i = 0; i < pw.length; i++) {
        if (i >= 10) {
            pwlen = true;
        }
        if (!isNaN(pw[i])) {
            conNum = true;
        }
    }

    if (pwlen && conNum) {
        console.log("password is valid");
    } else if (!(pwlen || conNum)) {
        console.log("Password is too short and does not contain a number");
    } else if (!pwlen) {
        console.log("password is not long enough");
    } else {
        console.log("password does not contain a number");
    }

    reader.close();
}); 