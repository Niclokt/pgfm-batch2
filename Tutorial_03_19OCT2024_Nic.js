//Tutorial03 
//Advice
//Good Practise to use CamelCase
//Good practise to test algo before pasting it into a function
//Test in small tiny bits, then piece them tgt


//**EXERCISE 1**//
// Objective
// Learn how to add elements to an array using various methods.
// Instructions:
// ● Create an array named fruits and initialize it with some fruit names.
// ● Add "mango" to the end of the array using the push() method.
// ● Add "strawberry" to the beginning of the array using the unshift() method.
// ● Print the final array to the console.
console.log('###EXERCISE 01###');

//Declare function




//**EXERCISE 3**// 

//--- SOLN 03 ---
//use .push() to reverse an array


//**EXERCISE 5**// 
// Objective
// Write a function that calculates the area of a rectangle.
// Instructions
// Define a function named calculateArea that takes two parameters: width and height. Inside the function, compute the area as width * height and return the result.
// Call the function with different sets of values to test it and print the results.

console.log('###EXERCISE 05###');
//Declare function
function calculateArea (width, height){
    area = width * height;
    console.log(`Area of Rectangle = ${area}`);
}

//Calling functions
let width1 = 10;
let height1 = 3;
calculateArea(width1,height1);

let width2 = 12;
let height2 = 7;
calculateArea(width2,height2);

//----- Exercise 05 - Solution -----

function calculateAreaRect(h,w){
    area = h * r 
}

}

let userWidth = parseInt(prompt ("Enter Width: "));
let userHeight = parseInt(prompt ("Enter Width: "));

//Cleaning the data
//Checks and balances to ensure the data received is clean
if(){

}


//**EXERCISE 6**//
// Objective: Write a function to categorize a person's age into child, teen, or adult.
// Instructions
// ● Define a function named checkAge that takes one parameter: age.
// ● Use conditional statements to categorize the age and return the category.
// ● Print the result based on the age.


console.log('###EXERCISE 06###');
//Declare function
function checkAge(age){
    
    console.log(
        age >= 70 ? "You are an elderly." : 
        age >= 40 ? "You are a middle aged person." : 
        age >= 20 ? "You are a young adult." : 
        age >= 13 ? "You are a teenager." : 
        "You are a kid."
      );
}

//Calling function
let age1 = 30;
checkAge(age1);

let age2 = 3;
checkAge(age2);

//---- SOLN 06 ----
// 13 - child
// 14 - 19 teen
// 20+ - adult
function checkAge1 (age){
    let x = age;
    let ageCategory = '' //initialising
    let flag = false;
    if (x <= 13){
        flag = true;
        ageCategory = "Child"
        return x; 
    } if else (x > 13 && x < 20 ){
        flag = true;
        ageCategory = "Teen"
        return x; 
    }

    if (flag) {
        return age;
    }
        return "Age is invalid";
}


//**EXERCISE 07**//
// Objective
// Create a function that converts temperatures from Celsius to Fahrenheit.
// Instructions
// ● Define a function named celsiusToFahrenheit that takes one parameter: celsius.
// ● Convert the Celsius temperature to Fahrenheit using the formula (celsius * 9/5) + 32.
// ● Return the Fahrenheit temperature.
// ● Call the function and print the output for several Celsius values.

console.log('###EXERCISE 07###');
//Declare a function
function celsiusToFahrenheit (celsius){

    farenheit = celsius * 95;
    console.log(`${celsius} Celsius = ${farenheit} Farenheit`);
}

//Call function 
let celcius1 = 10;
celsiusToFahrenheit(celcius1);

let celcius2 = 40;
celsiusToFahrenheit(celcius2);