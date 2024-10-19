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
