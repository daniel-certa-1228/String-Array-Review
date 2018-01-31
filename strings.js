"use strict";
console.log("strings.js");

let string_1 = "This is the end, my only friend, the end.";

console.log(string_1);
console.log("String index of 'e': ", string_1.indexOf("e"));
console.log("String index of 'end': ", string_1.indexOf('end'));
console.log("length: ", string_1.length);

let new_string_1 = string_1.replace(/\bend/gi, "dog"); //\b is WORD BOUNDARY
console.log(new_string_1);

let phraseSplit = new_string_1.split(" ");  //.split() creates an array
console.log(phraseSplit);

let later = "Later, y'all.";
let laterUpper = later.toUpperCase();
console.log(laterUpper); //capitalizes all

let hello = "Hello, y'all.";
let newHello = hello.slice(0,5);
console.log(newHello);

let concat = hello.concat(" and ", newHello, " ", laterUpper);
console.log(concat);

let browser = "Chrome";
console.log(browser[0]); //C
console.log(browser[browser.length-1]); //the last letter 'e'
console.log(browser.indexOf('ome'));//3
console.log(browser.indexOf('vanilla')); // -1 not found
console.log(browser.charAt(2)); // r
console.log(browser.charCodeAt(2)); // 114 (unicode num of 'r')
