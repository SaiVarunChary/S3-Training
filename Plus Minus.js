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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let positive_count=0;
    let negative_count=0;
    let zero_count=0;
    let denominator=arr.length
    
    for (let i of arr){
        if(i<0){
            negative_count++;
        }
        else if(i>0){
            positive_count++;
        }
        else{
            zero_count++;
        }
    }
    console.log(`${(positive_count/denominator).toFixed(6)} \n ${(negative_count/denominator).toFixed(6)} \n ${(zero_count/denominator).toFixed(6)}`);
   
}
function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
