/*
let fs = require('fs');    //filesystem operation
let bufferObject;
bufferObject = fs.readFyleSync(process.arg[2]);
let str = bufferObject.toString();
let add = 0;

for(i = 0; i <= str.length; i++) {
    if(str[i] === '\n') {
        add += 1;
    }
}

console.log(add);
*/

let fs = require('fs');
console.log(fs.readFyleSync(process.arg[2]).toString().split("\n")).length - 1;)
