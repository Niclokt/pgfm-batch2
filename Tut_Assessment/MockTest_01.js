////// Question 07 //////
console.log("////Question 07////");

//Declaring a function
function getSum(input1, input2){
    return input1 + input2;
}

console.log(getSum(5,6));




////// Question 08 //////
console.log("////Question 08////");

//Need to specify for function to return the value in the "product" variable
function multiply(a, b) {
    product = a * b;
    return product;
    }
    console.log(multiply(2, 3));




////// Question 09 //////
console.log("////Question 09////");

function sumArray(arr){
    const sum = arr.reduce((acc, num)=> acc + num,0);
    return sum;
}


console.log(sumArray([1, 2, 3, 4]));



////// Question 10 //////
console.log("////Question 10////");
////multiples of 3 => print "Fizz"
////multiples of 5 => print "Buzz"
////multiples of 3 & 5 => print "FizzBuzz"

function fizzBuzz(num){
    
    const counter = parseInt(num);
    for (i=0; i<counter; i++) {
        !((i+1)%3) && !((i+1)%5) ? console.log("FizzBuzz"):
        !((i+1)%3) ? console.log("Fizz"):
        !((i+1)%5) ? console.log("Buzz"):console.log(i+1);
    }
}

fizzBuzz(20);


////// Question 11 //////
console.log("////Question 11////");

function countTrue(arr){
    const count = arr.reduce((acc,bool)=>{
        acc[bool] = (acc[bool]||0)+1;
        return acc;
    },{});
    return count['true'];
}
console.log(countTrue([true, true, false, true, false]));