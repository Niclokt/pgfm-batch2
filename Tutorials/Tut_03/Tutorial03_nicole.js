var prompt = require("prompt-sync")();
////Date: 01 DEC 2024
////// Tutorial 03 //////

//// Exercise 1 ////
//// Done ////
// let fruits = ["pear", "peach", "persimon", "papaya"];
// console.log(`Initial fruits array = ${fruits}`);

// fruits.push("mango");

// fruits.unshift("strawberry");

// console.log(`Final fruits array = ${fruits}`);

//// Exercise 2 ////
//// Done ////
// let colours = ["red", "blue", "purple", "pink", "green"];
// console.log(`Initial colours array = ${colours}`);

// lastColour = colours.pop();
// firstColour = colours.shift();

// console.log(`Colour removed from calling pop.() method = ${lastColour}`);
// console.log(`Colour removed from calling shift.() method  = ${firstColour}`);
// console.log(`Modified array = ${colours}`);

//// Exercise 3 ////
//// Done ////
// let arr = [5, 4, 3, 2, 1];

// //Get length of array
// let arrLen = arr.length;

// //Reverse Array using for-loop
// let reversedArr = [];

// for (i = 0; i < arrLen; i++) {
//     reversedArr.push(arr.pop());
// }

// //Print reversed arr
// console.log(`Reversed Array: ${reversedArr}`);

//// Exercise 4 ////
//// Compare numbers and strings
//// Done ////
// let str = "6";
// let num = parseInt(6);

// //get datatype of the str and num variable
// console.log(`str = ${typeof str}, num = ${typeof num}`);

// //Using "==" operator
// console.log(`Result of str == num: ${str == num}`);

// //Using "===" operator
// console.log(`Result of str === num: ${str === num}`);

//// Exercise 5 ////
//// Basic function to calc area
//// Done ////

// let width = 0;
// let height = 0;
// let area = 0;

// // Get parameters
// do {
//     width = parseInt(prompt("Provide width in cm: "));
// } while (width < 1);

// do {
//     height = parseInt(prompt("Provide height in cm: "));
// } while (height < 1);

// // Call calculateArea function
// area = calculateArea(width, height);

// //Print area
// console.log(`Area of Rectangle = ${area} cm^2`);

// // Declate calculateArea function
// function calculateArea(width, height) {
//     area = width * height;
//     return area;
// }

//// Exercise 6 ////
//// Check Age Group
//// Done ////
//Declare function
// function checkAge(age) {
//     console.log(
//         age >= 70
//             ? "You are an elderly."
//             : age >= 40
//             ? "You are a middle aged person."
//             : age >= 20
//             ? "You are a young adult."
//             : age >= 13
//             ? "You are a teenager."
//             : "You are a kid."
//     );
// }

// //Calling function
// let age1 = 30;
// checkAge(age1);

// let age2 = 3;
// checkAge(age2);

//// Exercise 7 ////
//// Done ////
//Declare a function
// function celsiusToFahrenheit (celsius){

//     farenheit = celsius * 95;
//     console.log(`${celsius} Celsius = ${farenheit} Farenheit`);
// }

// //Call function
// let celcius1 = 10;
// celsiusToFahrenheit(celcius1);

// let celcius2 = 40;
// celsiusToFahrenheit(celcius2);

//// Exercise 8 ////
//// Create function to calculate simple interest given: principal, rate, and time
//// Done ////
//Define Function
// function calculateInterest(principal, rate, time) {
//     let interest = (principal * time * rate) / 100;
//     return interest;
// }

// //Declare variables
// let principal = parseFloat(1001);
// let rate = parseFloat(0.04);
// let time = parseFloat(3); // time in terms of years

// let resultInterest = calculateInterest(principal, rate, time);
// console.log(`calculated interest = ${resultInterest}`);

//// Exercise 9 ////
// Write a function that checks if a number is odd or even.
//// Done ////
// //Declare Function
// function isOddOrEven(number) {
//     return parseInt(number) % 2 === 0 ? "Even" : "Odd";
// }

// //Call functions:
// console.log(`${isOddOrEven(3)}`);
// console.log(`${isOddOrEven(10)}`);

//// Exercise 10 ////
//// Calculator function
//// Done ////
// Define function
// function calculator(operand1, operand2, operator) {
//     switch (operator) {
//         case "+":
//             return operand1 + operand2;

//         case "-":
//             return operand1 - operand2;

//         case "*":
//             return operand1 * operand2;

//         case "/":
//             if (operand1 === 0 || operand2 === 0) {
//                 return "Error: Division by zero";
//             }
//             return operand1 / operand2;
//         default:
//             return "Invalid operator";
//     }
// }

// // Call function:
// console.log(calculator(3, 9, "+"));
// console.log(calculator(3, 9, "-"));
// console.log(calculator(3, 9, "*"));
// console.log(calculator(3, 9, "/"));
// console.log(calculator(3, 0, "/"));
// console.log(calculator(3, 0, "("));

// //// **Advanced Solution** ////
// // For Future reference -- Using object mapping approach
// // function calculator(operand1, operand2, operator) {
// //     const operations = {
// //         "+": (a, b) => a + b,
// //         "-": (a, b) => a - b,
// //         "*": (a, b) => a * b,
// //         "/": (a, b) => b === 0 ? "Error: Division by zero" : a / b,
// //     };

// //     return operations[operator] ? operations[operator](operand1, operand2) : "Invalid operator";
// // }

// // console.log(calculator(3, 9, "+"));  // 12
// // console.log(calculator(3, 9, "-"));  // -6
// // console.log(calculator(3, 9, "*"));  // 27
// // console.log(calculator(3, 9, "/"));  // 0.333...
// // console.log(calculator(3, 0, "/"));  // Error: Division by zero
// // console.log(calculator(3, 9, "^"));  // Invalid operator

//// Exercise 11 ////
//// Convert minutes into seconds
//// Done ////
// function minutesToSeconds(minutes) {
//     let seconds = minutes * 60;
//     return seconds;
// }

// // Call function w sample inputs
// input1 = 20;
// console.log(` ${input1} Minutes = ${minutesToSeconds(input1)} Seconds`);

// input2 = 2;
// console.log(` ${input2} Minutes = ${minutesToSeconds(input2)} Seconds`);

// input3 = 13;
// console.log(` ${input3} Minutes = ${minutesToSeconds(input3)} Seconds`);

//// Exercise 12 ////
//// Multiplication Table Generator
//// Done ////
// function printTable(number) {
//     for (i = 0; i < 10; i++) {
//         console.log(`${number} * ${i + 1} = ${(i + 1) * number}`);
//     }
// }

// // Call function
// printTable(5);

//// Exercise 13 ////
//// Find area of the circle
//// Done ////
// function calculateCircleArea(radius) {
//     let area = Math.PI * parseFloat(Math.pow(radius, 2));
//     return area;
// }
// // Call function
// let radius1 = 4;
// console.log(
//     `When radius = ${radius1}, Area of cirle: ${Math.calculateCircleArea(
//         radius1
//     )}`
// );

//// Exercise 14 ////
//// Validate user age
//// Done ////
// function canVote(age) {
//     if (age > 20) {
//         return true;
//     } else {
//         return false;
//     }
// }

// //Call function
// let age1 = 10;
// console.log(`can age ${age1} vote?: ${canVote(age1)}`);
// let age2 = 30;
// console.log(`can age ${age2} vote?: ${canVote(age2)}`);

//// Exercise 15 ////
//// Find the largest number
//// Done ////
// function findLargest(num1, num2) {
//     let largestNum = 0;
//     num1 > num2 ? (largestNum = num1) : (largestNum = num2);
//     return largestNum;
// }

// function compareNumInputs() {
//     let num1 = 0;
//     let num2 = 0;

//     do {
//         num1 = parseInt(prompt("Provide a number: "));
//     } while (typeof num1 !== "number" || isNaN(num1));

//     do {
//         num2 = parseInt(prompt("Provide a number: "));
//     } while (typeof num2 !== "number" || isNaN(num2));

//     largestNumResult = findLargest(num1, num2);
//     console.log(
//         `Of the 2 provided numbers: ${num1} & ${num2}, Largest Number = ${largestNumResult}`
//     );
// }

// //call function
// compareNumInputs();

//// Exercise 16 ////
//// Debugging Challenge
//// Done ////
// function addNumbers(a, b) {
//     var sum = parseFloat(a) + parseFloat(b);
//     console.log(sum);
// }
// addNumbers(10, "20");
