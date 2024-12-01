var prompt = require("prompt-sync")();

////// Exercise 1 /////
////Done/////
// for (i = 0; i < 100; i++) {
//     console.log(i + 1);
// };

////// Exercise 2 //////
////Done/////
// for (i = 11; i > 0; i--) {
//     if (i === 1) {
//         console.log("Liftoff");
//     } else {
//         console.log(i - 1);
//     }
// }

////// Exercise 3 //////
////Done/////
// let inputNumber = null;

// do {
//     inputNumber = parseInt(prompt("input an integer between 1 to 10: "));
// } while (inputNumber > 10 || inputNumber < 1);

////// Exercise 4 //////
////Done/////
//Simple interest: A = P(1 + rt)
// // P
// let principle = parseFloat(1000);

// //r
// let interestRate = 0.02;

// //t
// let years = 0;

// //A
// let totalAmount = parseFloat(0);

// //Loop to calculate Total Amount per year, and simple interest earned that year
// while (totalAmount < 2 * principle) {
//     //Increase no of years
//     years++;
//     //Save totalAmount from previous year (To calculate interest earned by subtraction)
//     lastYearTotalAmount = totalAmount;
//     //Calculate Total Amount for the year
//     totalAmount =
//         parseFloat(principle) *
//         (parseFloat(1) + parseFloat(interestRate) * parseFloat(years));
//     //Print values of variables in the equation && totalAmount for the year
//     console.log(
//         `For Year ${years} - principle: ${principle}, interestRate: ${interestRate}, totalAmount = ${totalAmount}`
//     );
//     //Print simple interest earned for the year
//     console.log(
//         `Year ${years} - Interest Earned: ${totalAmount - lastYearTotalAmount}`
//     );
//     //Print accumulated interest
//     console.log(
//         `Year ${years} - Accumulated Interest = ${totalAmount - principle}`
//     );
// }

////// Exercise 5 //////
//Print Even Numbers
////Done/////
// for (i = 1; i < 21; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

////// Exercise 6 //////
////Done/////
// let predefinedNum = parseInt(5);
// let userGuess = null;
// do {
//     userGuess = parseInt(prompt("Guess the number: "));
// } while (userGuess != predefinedNum);

////// Exercise 7 //////
////Done/////
// for (;;) {
//     // Prompt the user for input
//     let userInput = prompt("Enter a word (type 'exit' to quit):");

//     // Check if the user entered the exit condition
//     if (userInput === "exit") {
//         console.log("Exiting the loop. Goodbye!");
//         break; // Exit the loop
//     }

//     // Perform some action with the input (optional)
//     console.log(`You entered: ${userInput}`);
// }

// console.log("The loop has been terminated.");

////// Exercise 8 //////
////Done/////
// let arr = [, , , ,];
// for (i = 0; i < 5; i++) {
//     //Use push to add an "*"
//     arr.push("*");
//     //Use pop to remove the last element in the arr
//     arr.pop;
//     //Print the arr as a string, without a delimitter using "join()"
//     console.log(arr.join(""));
// }

////// Exercise 9 //////
////Print the sum of an array
////Done/////
// let arr = [1, 2, 4, 5, 7];
// let arrLen = arr.length;
// let arrSum = 0;

// for (i = 0; i < arrLen; i++) {
//     arrSum += arr[i];
// }

// //Alternative
// //arr.forEach((element) => (arrSum += element));

// console.log(`Final sum of array = ${arrSum}`);

////// Exercise 10 //////
////Find the largest number in the array
////Done/////
// let arr2 = [8, 1, 2, 4, 9, 1, 10, 13, 12];
// let arr2Len = arr2.length;
// let arrMax = 0;
// let maxNoPos = 0;

// for (let i = 0; i < arr2Len; i++) {
//     if (arrMax < arr2[i]) {
//         arrMax = arr2[i];

//         maxNoPos = i;
//     }
// }

// console.log(
//     `Largest number in the array = ${arrMax}, where Position of Max No. = ${maxNoPos}`
// );

////// Exercise 11 //////
////Reverse a string
////Done/////
// let str = "HelloWorld";

// //Split the string into an array of characters
// let strArr = str.split("");

// //Get arr Length
// let strArrLen = strArr.length;

// //Use a for-loop to reverse the string
// let reverseStrArr = [];
// for (i = 0; i < strArrLen; i++) {
//     reverseStrArr.push(strArr.pop());
// }
// //Convert array into a string without a delimitter
// let reverseStr = reverseStrArr.join("");
// console.log(`Reversed String: ${reverseStr}`);

////// Exercise 12 //////
////Print a multiplication table
////Done/////
// //Get Number
// let numberToMultiply = parseInt(
//     prompt("Provide a number, you'd like to get a multiplication table of")
// );

// //For-Loop to generate Multiplication Table:
// for (i = 0; i < 10; i++) {
//     console.log(
//         `${numberToMultiply} * ${i + 1} = ${numberToMultiply * (i + 1)}`
//     );
// }

////// Exercise 13 //////
////Looping over arrays using For...of loop
////Done/////
// let arr3 = ["hello", "vegetable", "fish", "jams", "bread"];

// for (const item of arr3) {
//     console.log(item);
// }

////// Exercise 14 //////
////Debug the code
//// This code seems to want to calculate the multiples of 3 over an iterable "i"
////Done/////
// let i = 0;
// let j = 3;
// while (i < 5) {
//     console.log((i + 1) * j);
//     i = i + 1;
// }
