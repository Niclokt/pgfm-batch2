var prompt = require('prompt-sync')();


///// Qn 10 //////
console.log("/////Qn 10/////");
/* function getNames (){
    const nameList = [];

    noOfInputs = parseInt(prompt("How many people are there?: "));

    for (i=0; i<noOfInputs; i++){
        input = null;
        input = (prompt(`Provide name #${i+1}: `));
        nameList.push(input);
    }

    console.log(`The names of the people are as follows: ${nameList}`);
}

getNames(); */

///// Qn 11 //////
console.log("/////Qn 11/////");
/* Implement a function product(array) that returns the product of all values in array, which is an array of numbers.

Arguments
`array` (Array): Array of numbers.
Returns
(Number): Returns the product of the values in `array`. */

/* //get array
let arr = [1,2,4];
//declare function:
function product(arr1){
//Find arr len
arrLen = arr1.length;
//If array is empty
if(arrLen === 0){
return console.log(1);
} else{
//Declare pdtResult
let pdtResult = 1;
//Calculate product using for-loop
for (i=0; i<arrLen;i++){
    pdtResult *= arr1;
}

//print pdtResult
console.log(pdtResult);
 */


///// Qn 12 //////
console.log("/////Qn 12/////");
/* Create a function countOddNumbers that takes an array of numbers and returns the count of odd numbers. */

/* //provide array
const arr1 = [1, 2, 3, 4, 5, 6];

//function to count no of odd numbers in array
function countOddNumbers(arr){
    
    //Find length of array
    arrLen = arr.length;

    if (arrLen){
        //Create a new ara
        oddArr = [];
    
        //Create a counter for the no of even numbers
        let counter = 0;

        //Find even numbers in array and create a new array with only the odd numbers
        for (i=0 ; i<arrLen;i++){
            if ((arr[i] % 2)){
                oddArr[counter] = arr[i];
                counter ++;
            }
        }
        //Get count of odd number
        console.log(oddArr.length);
    } else{
        console.log(0);
    }
}

//call function
countOddNumbers(arr1); */



///// Qn 13 //////
console.log("/////Qn 13/////");
/* Write a JavaScript program to calculate an individual's Body Mass Index (BMI) and determine their weight category. The program should prompt the user for their weight in kilograms and height in meters, then calculate and display their BMI along with the corresponding weight category. Ensure proper data handling of user inputs are made */

// Your program should:
// Prompt the user to enter their weight in kilograms.
// Prompt the user to enter their height in meters.
// Calculate the BMI using the formula above.
// Determine the weight category based on the BMI.
// Display the BMI rounded to one decimal place and the weight category.


// Underweight: BMI < 18.5
// Normal weight: 18.5 ≤ BMI < 24.9
// Overweight: 24.9 ≤ BMI < 29.9
// Obesity: BMI ≥ 30

//BMI = weight (kg)/ height

/* let weight = parseFloat(prompt("Enter your weight in kilograms: "));
let height = parseFloat(prompt("Enter your height in meters: "));

userBmi = (weight/Math.pow(height,2));


function getWeightCat(userBmi){
    (userBmi < 18.5) ? console.log(`Your BMI is ${userBmi.toFixed(1)}, which falls in the Underweight category.`): //"Underweight":
    (userBmi < 24.9) ? console.log(`Your BMI is ${userBmi.toFixed(1)}, which falls in the Normal weight category.`): //"Normal weight":
    (userBmi < 29.9) ? console.log(`Your BMI is ${userBmi.toFixed(1)}, which falls in the Overweight category.`): //"Overweight":
    userWeightCat = console.log(`Your BMI is ${userBmi.toFixed(1)}, which falls in the Obesity category.`); //"Obesity";
}

getWeightCat(userBmi); */


///// Qn 14 //////
console.log("/////Qn 14/////");
/* The following code is supposed to calculate the sum of all even numbers in an array, but it’s giving an incorrect result. Identify and fix the bug. Rewrite the whole code back again and describe the problem with your solution. */


/* function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) === 0) { //Condition should check for when %2 === 0, since even no should not have any remainders
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Should return 12
 */


//// test ////
/* let weeklyExpenses = [ 29, 15, null, 20, 30];
for(let expense of weeklyExpenses){
    console.log(expense/2);
} */


//// check
