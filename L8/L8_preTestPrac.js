var prompt = require('prompt-sync')();
// Date: 02 NOV 2024 
//Key ways to declare variables
//Pre-test practise
console.log("///////Pre-Test Practise///////");

//////QN 1//////
console.log("//////Q1//////");
/* Create a function sumEven(array) to find the sum of even numbers
in a given array, return "No values" if the array is empty */

const arr1 = [];

function sumEven(arr){
    
    //Find length of array
    arrLen = arr.length;

    if (arrLen){
        //Create a new ara
        evenArr = [];
    
        //Create a counter for the no of even numbers
        let counter = 0;

        //Find even numbers in array
        for (i=0;i<arrLen;i++){
            if ((arr[i] % 2) === 0){
                evenArr[counter] = arr[i];
                counter ++;
            }
        }
        //Find sum of even numbers
        evenSum = evenArr.reduce((acc,num) => acc+num,0);

        //Return sum of even numbers
        console.log(evenSum);
    } else{
        console.log("The array is empty");
    }
}

//call function
sumEven(arr1);


//////QN 2//////
console.log("//////Q2//////");
/* Create a function to calculate degree to farenheit
Return error if user input is invalid
return appropriate conversion value */

// F = (deg * 9/5) +32   

function convertCtoF(){
    // must return error if input is invalid
    //check if input is valid
    let tempDeg = parseFloat(prompt("Input Temp in Deg: "));

    while(isNaN(tempDeg) || tempDeg < -459.67){
        tempDeg = parseFloat(prompt("Invalid input. Try again. Temp in Deg: "))
    }

/*     do{
        tempDeg = parseFloat(prompt("Input Temp in Deg: "));
    }while(isNaN(tempDeg) || tempDeg < -459.67) */

    //convert degree to farenheit:
    let tempFar = (tempDeg * (9/5)) + 32;
    
    console.log(`${tempDeg} celcius = ${tempFar.toFixed(2)} Farenheit`);
}

convertCtoF();





