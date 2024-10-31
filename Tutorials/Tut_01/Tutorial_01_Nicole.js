var prompt = require('prompt-sync')();

//Exercise 01
/* console.log("##Exercise 01");
let p1 = 53;
let p2 = Boolean(53);
let p3 = "53";

console.log(typeof(p1));
console.log(typeof(p2));
console.log(typeof(p3));
 */


//Exercise 02
/* console.log('###EXERCISE 02###')
let age = parseInt(25);
let gst = 0.09;
let isRaining = false;
let username = 'Samantha Brown'

console.log(age);
console.log(gst);
console.log(isRaining);
console.log(username);

//console.log(typeof age);
//console.log(typeof gst);
//console.log(typeof isRaining);
//console.log(typeof username); */


//Exercise 03
/* console.log("###EXERCISE 03###");
let x = 6;
let y = 2;

console.log(`X * Y = ${x * y}`);
console.log(`X / Y = ${x / y}`);
console.log(`X - Y = ${x - y}`);
console.log(`X + Y = ${x * y}`);
console.log(`X % Y = ${x % y}`);
 */

//Exercise 04 
/* console.log("###EXERCISE 04###");

let num1 = parseInt(prompt("Enter num1: "));
let num2 = parseInt(prompt("Enter num2: "));

console.log(`num1 + num2 = ${num1 + num2}`);
console.log(`num1 - num2 = ${num1 - num2}`);
console.log(`num1 * num2 = ${num1 * num2}`);
console.log(`num1 / num2 = ${num1 / num2}`); */


//Exercise 05 
/* console.log("###EXERCISE 05###");

let cost1 = 1.50;
let numberOfDonuts1 = 20;
let total = 0.0;

function totalCostOfDonuts (cost, numberOfDonuts) {
    total = cost * numberOfDonuts
    return total;
}

console.log(totalCostOfDonuts(cost1, numberOfDonuts1));
console.log(typeof totalCostOfDonuts(cost1, numberOfDonuts1)); */


//Exercise 06 
/* console.log("###EXERCISE 06###");

let taxRate = 0.029;
let income = 450000;
let totalPayment = taxRate * income;

console.log(`Total Payment = ${totalPayment}`); */

//Exercise 07 
/* console.log("###EXERCISE 07###");

let length1 = prompt("Rectangle length: ");
let width1 = prompt("Rectangle width: ");

let area1 = length1 * width1

console.log(`Area of Rectangle = ${area1}`); */


//Exercise 08
/* console.log("###EXERCISE 08###");

let d = 2;
let c = 0.2;
let n = 5; 

function totalCostOfMuffins (dollar,cents,numOfMuffins){
    return totalCost = (dollar + cents) * numOfMuffins;
}

console.log(totalCostOfMuffins(d,c,n,));
 */


//Exercise 09
console.log("###EXERCISE 09###");


//Exercise 12
console.log("###EXERCISE 12###");
/* num1 = parseInt(prompt("Num 1: "));
num2 = parseInt(prompt("Num 2: "));
num3 = parseInt(prompt("Num 3: "));
num4 = parseInt(prompt("Num 4: "));

console.log((num1+num2+num3+num4)/4); */

//Approach 2
/* let num = [];
num[0] = parseInt(prompt("Num 1: "));
num[1] = parseInt(prompt("Num 2: "));
num[2] = parseInt(prompt("Num 3: "));
num[3] = parseInt(prompt("Num 4: "));

//Find length of the array
let arrLen = num.length;

//Find the sum of the array
let summation = num.reduce(
    (accumulator,currentValue)=> accumulator + currentValue
);

console.log(summation);
console.log(summation/arrLen); */

//Exercise 13
/* console.log("###EXERCISE 13###");
let a = 5;
let b = 3;

console.log(`Before swapping - a: ${a}, b: ${b}`);

let x = a;
a = b;
b = x;

console.log(`After swapping - a: ${a}, b: ${b}`);
 */

//Exercise 14
/* console.log("###EXERCISE 14###");
let celsius = prompt("Provide Temp in Celisus: ");

console.log(`Celsius: ${celsius} = Farenheit: ${(celsius*9/5)+32}`); */

//Exercise 15
/* console.log("###EXERCISE 15###");

let getNum = parseInt(prompt("Provide a number: "));

(getNum >= 0) ? console.log(`${getNum} is a Positive Number.`) : console.log(`${getNum} is a Negative Number.`); */

//Exercise 16
/* console.log("###EXERCISE 16###");

let getNum = parseInt(prompt("Provide a number: "));

function isNumEvenOrOdd (num){
    let remainder = num % 2;
    console.log (`${num} % 2 --> Remainder= ${remainder}`);

    remainder ? console.log(`${num} is an Odd number.`) : console.log(`${num} is an Even number.`);
}

isNumEvenOrOdd(getNum); */


//Exercise 17
console.log("###EXERCISE 17###");
/* 
let score = parseInt(prompt("What is your score?: "));

(score >= 90) ? console.log(`Score: ${score}, Grade: A`):
(score >= 80) ? console.log(`Score: ${score}, Grade: B`):
(score >= 70) ? console.log(`Score: ${score}, Grade: C`):
(score >= 60) ? console.log(`Score: ${score}, Grade: D`):
console.log(`Score: ${score}, Grade: F`); */

let score = parseInt(prompt("What is your score?: "));

switch(score){
    case score >= 90: 
        console.log(`Score: ${score}, Grade: A`);
        break;
    case score >= 80: 
        console.log(`Score: ${score}, Grade: B`);
        break;
    case score >= 70: 
        console.log(`Score: ${score}, Grade: C`);
        break;
    case score >= 60: 
        console.log(`Score: ${score}, Grade: D`);
        break;
    case score < 60: 
        console.log(`Score: ${score}, Grade: F`);
        break;
};

//Exercise 18 
/* console.log('###EXERCISE 18###');
//this is user driven
let isSunny = false;
let isCloudy = true;
let isEveGoing = true;
let isTuesday = false;
let isJaniceGoing = false;

//this is the rule
if ((isSunny||isCloudy)&& isEveGoing && isTuesday!== true && isJaniceGoing !== true){
    console.log('Going to the beach!')
}else {
    console.log("Not going to the beach");
}
 */

//--- ChatGPT 18 ---
/* let isSunny = false;
let isCloudy = true;
let isEveGoing = true;
let isTuesday = false;
let isJaniceGoing = false;

const canGoToBeach = (isSunny || isCloudy) && isEveGoing && !isTuesday && !isJaniceGoing;

console.log(canGoToBeach ? 'Going to the beach!' : 'Not going to the beach'); */


//Exercise 19
console.log("###EXERCISE 19###");

