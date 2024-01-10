'use strict';

const arr = [10, 222, 31, 13, 5, 6, 7];

arr.sort(compareNum);

console.log(arr);

function compareNum(a, b) {
    console.log(a, 'A');
    console.log(b, 'B');
    console.log('----');
    return a - b;
}

// console.log(arr.pop());
// console.log(arr);

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item}: ${arr}`);
})

console.log(arr.filter(item => item % 2 == 0));

console.log(arr.map(item => item * 2));

const str = prompt('', '');
const products = str.split(',');
products.sort();
console.log(products.join('; '));

function binary (arr, a) {
    let low = 0; 
    let high = arr.length - 1;

    while (low <= high) {
        let mid = parseInt((low + high) / 2);
        if (arr[mid] === a) { return mid; }
        if (arr[mid]> a) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}

console.log(binary([ 1, 3, 5, 7, 9], 7));