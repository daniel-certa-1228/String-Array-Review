"use strict";
console.log("arrays.js");

let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

numbers.forEach( (number) => {
    console.log("Number:", number);
});

for (let i = (numbers.length-1); i > 0; i--) {
    console.log("Number:", numbers[i]);
} 

let revNums = numbers.reverse();
console.log(revNums);

let lessThan4 = numbers.filter((number) => {
    return number < 4;
});
console.log("less than four:",lessThan4 )

let sum = numbers.reduce( (prev,curr) => {
    return prev + curr;
} );
console.log(sum);

let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let chains = integers
    .sort ((a,b) => { return b -a} )
    .filter((num)=> { return num < 19} )
    .map((num) => {return (num * 2 - 1)})
    .reduce((prev, curr) => { return prev + curr});

console.log(chains);


