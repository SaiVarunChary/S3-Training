'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let arr=s.slice(0,-2).split(":").map(Number);
    if(s.includes('AM') && arr[0]===12){
        arr[0]=0
    }
    
    else if(s.includes('PM') && arr[0]!=12){
        
        arr[0]=arr[0]+12;
        
    }
    arr=arr.map((x) => String(x).padStart(2,"0"))
    
    let newString =arr.join(":");
    
    return newString;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
