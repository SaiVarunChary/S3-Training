'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    arr.sort((a,b)=>a-b);
    let a = arr.slice(0, arr.length - 1);
    let sum = a.reduce((total, num) => total + num, 0);
    let b=arr.slice(1,arr.length);
    let bsum= b.reduce((total,num) => total+num, 0)

    console.log(sum,bsum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
