// Arguments
// `array` (Array): Array of numbers.
// Returns
// (Number): Returns the mean of the values in `array`.

// Examples
// mean([4, 2, 8, 6]); // => 5
// mean([1, 2, 3, 4]); // => 2.5
// mean([1, 2, 2]); // => 1.6666666666666667

// The function should return NaN if array is empty.
// mean([]); // => NaN

var prompt = require('prompt-sync')()

//Task 1 -- Get array
let arr = [];

let noOfElements = prompt("How many numbers do you plan to input?: ");
for (let i=0 ; i < noOfElements; i++){
    getInput = parseInt(prompt("Provide a number: "));
    arr.push(getInput);
};


//Task 2 -- Get num of elements in array
//NIL

//Task 3 -- Get the total sum of element
for (let i=0; i<noOfElements;i++){
    sum =+ arr.pop();
}

//Task 4 -- Get the avg of all elements
let avg = sum/ noOfElements;

console.log(avg);
//Task 5 -- Consolidate all tasks:
//getArray();