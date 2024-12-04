////// Tutorial 03 //////

//// Exercise 1 ////
//// Initialise access to a 2D array
////Create 2D array of integers
////DONE////
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// // access & print the elements in the 2nd & 3rd row
// console.log(`Elements in 2nd Row: ${arr[1]}`);
// console.log(`Elements in 3rd Row: ${arr[2]}`);

// //Change value of the element
// arr[1] = [3, 3, 3];
// arr[2] = [4, 4, 4];

// //Print the entire array
// for (item in arr) {
//     console.log(arr[item]);
// }

//// Exercise 2 ////
//// Remove elements from an array
//// Done ////

// let arr1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// // let result = "";

// // Print 2D array
// // for (item in arr1) {
// //     for (itemItem in arr1[item]) {
// //         result += arr1[item][itemItem] + " ";
// //     }
// //     console.log(result);
// //     result = "";
// // }

// //Print element's coordinates and values
// console.log("");
// console.log("//**** Print co-ordinates and values ****//");
// console.log("");
// for (item in arr1) {
//     for (itemItem in arr1[item]) {
//         console.log(`(${item},${itemItem}) -> ${arr1[item][itemItem]}`);
//     }
// }
//// Exercise 3 ////
//// Done ////
// let arr2 = [
//     ["Elphie", "Glinda", "Fieyro", "Dillamond"],
//     ["Mario", "Luigi", "Rosalind", "Luma"],
//     ["Bambi", "Flounder", "Sebastian", "Navi"],
//     ["Andy", "Woody", "Lightyear", "Potato"],
//     ["Kelly", "Andrew", "Ashley", "Isa"],
// ];

// //Swap Student's seats, swap "Andrew" with "Navi"
// let temp = "";

// temp = arr2[2][3];
// arr2[2][3] = arr2[4][1];
// arr2[4][1] = temp;

// // Print updated seating plan
// let result = "";

// console.log("Row  :[Col 1], [Col 2], [Col 3], [Col 4]");
// for (item in arr2) {
//     result = `Row ${item}: `;
//     for (itemItem in arr2[item]) {
//         result += arr2[item][itemItem] + " ";
//     }
//     console.log(result);
//     result = "";
// }

// // alternative way to print 2D-array seating plan
// console.table(arr2);

//// Exercise 4 ////
//// Find sum of all elements in a 2D-array
/// Done ///
// let arr3 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// //Find sum
// let arrSum = 0;

// for (row in arr3) {
//     for (col in arr3[row]) {
//         arrSum += arr3[row][col];
//     }
// }

// console.log(`Sum of array = ${arrSum}`);

//// Exercise 5 ////
//// Printing Diagonal Elements
/// Done ///
// let n = 3;
// let arr4 = [];
// let result = "";

// for (let row = 0; row < n; row++) {
//     for (let col = 0; col < n; col++) {
//         if (col === row) {
//             result += "* ";
//         } else {
//             result += "  ";
//         }
//     }
//     console.log(result);
//     result = "";
// }

// //Printing Secondary Diagonal
// for (let row = 0; row < n; row++) {
//     for (let col = 0; col < n; col++) {
//         if (col === n - 1 - row) {
//             result += "* ";
//         } else {
//             result += "  ";
//         }
//     }
//     console.log(result);
//     result = "";
// }

//// Exercise 6 ////
//// Find the largest number in each row
/// Done ///
// let arr4 = [
//     [10, 2, 3],
//     [4, 15, 6],
//     [7, 8, 19],
// ];

// let largestNo = 0;

// //Find the largest number for each row:
// for (let row = 0; row < arr4.length; row++) {
//     for (let col = 0; col < arr4.length; col++) {
//         if (largestNo < arr4[row][col]) {
//             largestNo = arr4[row][col];
//         }
//     }
//     console.log(`The largest number in Row ${row + 1} = ${largestNo}`);
//     largestNo = 0;
// }

//// Exercise 7 ////
//// Product Inventory Grid
//// Done ////
// let arr5 = [
//     ["Chlorox", 5, 10],
//     ["Kleenex pack of 5", 10, 20],
//     ["Ayataka", 2, 50],
//     ["Tomato", 1.5, 52],
// ];
// // Update Quantity of product
// arr5[3][2] = 40;

// // Print updated inventory
// console.log(arr5);

//// Exercise 8 ////
//// Basic IIFE Usage
//// Done ////
// // Traditional function syntax
// (function () {
//     console.log("IIFE traditional function syntax executed");
// })();

// // Arrow function syntax
// (() => {
//     console.log("IIFE array function syntax executed");
// })();

//// Exercise 9 ////
//// IIFE w parameters
//// Done ////
// let a = 4;
// let b = 10;

// let sum = (function (input_1, input_2) {
//     let result = input_1 + input_2;
//     return result;
// })(a, b);

// console.log(sum);

//// Exercise 10 ////
//// Converted to arrow function
//// Done ////
// ((input_1, input_2) => {
//     return input_1 + input_2;
// })();

//// Exercise 11 ////
//// Single argument arrow function
//// Done
// console.log(
//     ((base) => {
//         return parseInt(base) * parseInt(base);
//     })(3)
// );

//// Exercise 12 ////
//// No argument arrow function
//// Done
// (() => {
//     console.log("Hello, World!");
// })();

//// Exercise 13 ////
// -- NA --

//// Exercise 14 ////
// -- NA --

//// Exercise 15 ////
// -- NA --

//// Exercise 16 ////
//// Debugging Challenge
//// Done
// function addNumbers(a, b) {
//     var sum = parseInt(a) + parseInt(b);
//     console.log(sum);
// }
// addNumbers(10, "20"); // Incorrectly prints "1020" instead of 30
