var prompt = require('prompt-sync')();

///////Exercise 01///////
/* console.log("##Exercise 01");
let p1 = 53;
let p2 = Boolean(53);
let p3 = "53";

console.log(typeof(p1));
console.log(typeof(p2));
console.log(typeof(p3));
 */


///////Exercise 02///////
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


///////Exercise 03///////
/* console.log("###EXERCISE 03###");
let x = 6;
let y = 2;

console.log(`X * Y = ${x * y}`);
console.log(`X / Y = ${x / y}`);
console.log(`X - Y = ${x - y}`);
console.log(`X + Y = ${x * y}`);
console.log(`X % Y = ${x % y}`);
 */

///////Exercise 04///////
/* console.log("###EXERCISE 04###");

let num1 = parseInt(prompt("Enter num1: "));
let num2 = parseInt(prompt("Enter num2: "));

console.log(`num1 + num2 = ${num1 + num2}`);
console.log(`num1 - num2 = ${num1 - num2}`);
console.log(`num1 * num2 = ${num1 * num2}`);
console.log(`num1 / num2 = ${num1 / num2}`); */


///////Exercise 05///////
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


///////Exercise 06///////
/* console.log("###EXERCISE 06###");

let taxRate = 0.029;
let income = 450000;
let totalPayment = taxRate * income;

console.log(`Total Payment = ${totalPayment}`); */

///////Exercise 07///////
/* console.log("###EXERCISE 07###");

let length1 = prompt("Rectangle length: ");
let width1 = prompt("Rectangle width: ");

let area1 = length1 * width1

console.log(`Area of Rectangle = ${area1}`); */


///////Exercise 08///////
/* console.log("###EXERCISE 08###");

let d = 2;
let c = 0.2;
let n = 5; 

function totalCostOfMuffins (dollar,cents,numOfMuffins){
    return totalCost = (dollar + cents) * numOfMuffins;
}

console.log(totalCostOfMuffins(d,c,n,));
 */


///////Exercise 09///////
/* console.log("###EXERCISE 09###");
num_1 = prompt("Provide the 1st number: ");
num_2 = prompt("Provide the 2nd number: ");

function findPdt (num1, num2){
    return pdt = parseInt(num1) * parseInt(num2);
}

console.log(`The product of ${num_1} & ${num_2} = ${findPdt(num_1, num_2)}`); */

///////Exercise 10///////
/* console.log("###EXERCISE 10###");
birthYear = parseInt(prompt("Please input your birth year: "));
currentYear = parseInt(prompt("Please input current year: "));

function getAge(birthYear1, currentYear1){
    return age = currentYear1 - birthYear1;
}

console.log(`Your age is: ${getAge(birthYear,currentYear)}`);
 */


///////Exercise 11///////
/* console.log("###EXERCISE 11###");

const x = 3.1417;
let pi = x.toFixed(2);
console.log(`pi = ${pi}`);

let radius = parseFloat(prompt("Input the circle radius: "));

// Area of Circle = pi * radius^2
let areaOfCircle = pi * (Math.pow(radius,2));
console.log(`When radius = ${radius}, Area of Circle = ${areaOfCircle}`); */




///////Exercise 12///////
/* console.log("###EXERCISE 12###");
let num = [];
num[0] = parseInt(prompt("Num 1: "));
num[1] = parseInt(prompt("Num 2: "));
num[2] = parseInt(prompt("Num 3: "));
num[3] = parseInt(prompt("Num 4: "));

//Find length of the array
let arrLen = num.length;

//Find the sum of the array
let summation = num.reduce(
    (accumulator,currentValue)=> {
        return accumulator + currentValue;
    }
);
console.log(`The avg of 4 numbers = ${summation/arrLen}); */

///////Exercise 13///////
/* console.log("###EXERCISE 13###");
let a = 5;
let b = 3;

console.log(`Before swapping - a: ${a}, b: ${b}`);

let x = a;
a = b;
b = x;

console.log(`After swapping - a: ${a}, b: ${b}`);
 */

///////Exercise 14///////
/* console.log("###EXERCISE 14###");
let celsius = prompt("Provide Temp in Celisus: ");

console.log(`Celsius: ${celsius} = Farenheit: ${(celsius*9/5)+32}`); */

///////Exercise 15///////
/* console.log("###EXERCISE 15###");

let getNum = parseInt(prompt("Provide a number: "));

(getNum >= 0) ? console.log(`${getNum} is a Positive Number.`) : console.log(`${getNum} is a Negative Number.`); */

///////Exercise 16///////
/* console.log("###EXERCISE 16###");

let getNum = parseInt(prompt("Provide a number: "));

function isNumEvenOrOdd (num){
    let remainder = num % 2;
    console.log (`${num} % 2 --> Remainder= ${remainder}`);

    remainder ? console.log(`${num} is an Odd number.`) : console.log(`${num} is an Even number.`);
}

isNumEvenOrOdd(getNum); */


///////Exercise 17///////
console.log("###EXERCISE 17###");
/* 
let score = parseInt(prompt("What is your score?: "));

(score >= 90) ? console.log(`Score: ${score}, Grade: A`):
(score >= 80) ? console.log(`Score: ${score}, Grade: B`):
(score >= 70) ? console.log(`Score: ${score}, Grade: C`):
(score >= 60) ? console.log(`Score: ${score}, Grade: D`):
console.log(`Score: ${score}, Grade: F`); */



///////Exercise 18///////
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


///////Exercise 19///////
console.log("###EXERCISE 19###");

/* //Get number of players:
noOfPlayers = parseInt(prompt("Input no. of players: "));

//Create a function object to store age & height
function profile(identifier, age, height){
    this.identifier=identifier;
    this.age=age;
    this.height=height;
    this.score= height + (5*age);
}

//Create an array to store all instances of objects
let playerProfile = [];

//Get age and height of each player
for (i=0; i<noOfPlayers; i++){
    identifer1 = i+1;
    age1 = parseInt(prompt(`Input player ${identifier1}'s age: `));
    height1 = parseInt(prompt(`Input player ${identifier1}'s height: `)); 

    playerProfile[i] = new profile(identifier1, age1, height1);
}

//Find highest score: 
let {max, countOfMax} = playerProfile['score'].reduce((acc,num)=> {
    if (num > acc.max){
        acc.max = num;
        countOfMax = 1;
    } else if (num === acc.max){
        countOfMax += 1;
    }
    return acc;
},
{max: 0, countOfMax: 0} 
);

//Identify players w highest score: 
function getWinner(obj, targetValue) {
    return Object.entries(obj)
      .filter(([key, value]) => value === targetValue)
      .map(([key]) => key);
  }


//Print results:
(countOfMax > 1) ? console.log("It is a draw!"); 
console.log(`highest score = ${max}`);
console.log(`The winner(s): ${getWinner(playerProfile, max)}`);
 */

/* // Get number of players:
let noOfPlayers = parseInt(prompt("Input no. of players: "));

// Create a function to store age & height
function profile(identifier, age, height) {
    this.identifier = identifier;
    this.age = age;
    this.height = height;
    this.score = height + (5 * age);
}

// Create an array to store all instances of profiles
let playerProfile = [];

// Get age and height of each player
for (let i = 0; i < noOfPlayers; i++) {
    let identifier1 = i + 1;
    let age1 = parseInt(prompt(`Input player ${identifier1}'s age: `));
    let height1 = parseInt(prompt(`Input player ${identifier1}'s height: `)); 

    playerProfile[i] = new profile(identifier1, age1, height1);
}

// Find highest score:
let { max, countOfMax } = playerProfile
  .map(player => player.score)  // Get an array of scores
  .reduce((acc, score) => {
      if (score > acc.max) {
          acc.max = score;
          acc.countOfMax = 1;
      } else if (score === acc.max) {
          acc.countOfMax += 1;
      }
      return acc;
  }, { max: 0, countOfMax: 0 });

// Identify players with the highest score:
function getWinners(profiles, targetScore) {
    return profiles
      .filter(player => player.score === targetScore)
      .map(player => player.identifier);
}

// Print results:
if (countOfMax > 1) {
    console.log("It is a draw!");
} else {
    console.log("The winner(s):", getWinners(playerProfile, max));
}
console.log(`Highest score = ${max}`); */


///////Exercise 20///////
/* console.log("###EXERCISE 20###");
function getPSILevel() {
    let psiInput = prompt("Input PSI: ");
    let psiLevel = parseFloat(psiInput);

    // Check if input is a valid number and not NaN
    if (isNaN(psiLevel) || psiInput.trim() === "") {
        console.log("Please enter a valid number for PSI.");
    } else {
        // Check PSI level and print appropriate message
       (psiLevel >= 100) ? console.log("Unhealthy"):
       (psiLevel > 50 && psiLevel < 100) ? console.log("Moderate"):
       console.log("Healthy")
    }
}

getPSILevel(); */


///////Exercise 21///////
console.log("###EXERCISE 21###");
/* // X --> Dollars
// Y --> cents
// Z --> no of muffins

let x = parseFloat(prompt("Input dollars denomination of cost of muffin: "));
let y = parseFloat(prompt("Input cents denomination of cost of muffin: "));
let z = parseFloat(prompt("Input number of muffins: "));

let muffinCost = x + (y/100);
let totalCost = muffinCost * z;

let totalCostStr = totalCost.toFixed(2);
let totalCostArr = totalCostStr.trim().split(".");


console.log(`Total cost of ${parseInt(z)} muffins is $${totalCostArr[0]} and ${totalCostArr[1]}cents ($${totalCostStr})`);
 */

///////Exercise 22///////
console.log("###EXERCISE 22###");

/* let x = 3;
let y = 8;
let firstName = "Charlie"; 
let raining = false;
let snowing = false;
let windy = true;

if (x+y != 10){ console.log("Good!");
}
if (x-y <0){ console.log("Good!");
}
if (y*x >= 11) { console.log("Good!");
}
if (y - x >= 5) { console.log("Good!");
}
if (x != y) { console.log("Good!");
}
if (raining == snowing) { console.log("Good!");
}
 if (raining != snowing) { console.log("Good!");
}
if (firstName != windy) { console.log("Good!");
} */