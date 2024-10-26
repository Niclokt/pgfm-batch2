// //For Loop 

// for (let i = 0; i< 10;i++){
//     console.log("Practise:" + i);
// }

// //While Loop
// let i = 0; 
// while(i < 10){

// }


//Functions
//Parameters used in functions, are defined by LOCAL variables
//simple functions, don't return anything, but maybe just process
//Example

/* let valueA = 30;
let valueB = 20;

//call the function 
let sum = sumOfNumbers (valueA, valueB);

function sumOfNumbers (num1, num2){
    total = num1 + num2;

    console.log(`Sum =  ${total}`);
    return total;
} */

//Arrays
//Arrays helps to organise variables into a container
//Make list/groups/collections

//Defining Arrays
//##Declare 1 
/* let list= [];
list[0] = 'First';
list[1] = 'Second';


//##Declare 2 (shortcut)
let list_01 = ['First','Second','Third','Fourth'];

for(i=0 ;i<=4 ;i++){
    console.log(`Element list_01[${i}] contains value: ${list_01[i]}`);
}
 */
//JS arrays can store values of different data types

//##Working with Arrays
//-Find max length

//-Add to the end of an array


//-Remove and get the last element of array

//-Return a selected portion of the array

//-Skip indexes in an array

//## 2D Arrays
//- Declare 2D array 
let grid = [
    ["a","b","c"],
    ["e","f","g"],
]

//- Print grid
// console.log(grid[row][col]);
console.log(grid[0][0]);
console.log(grid[0][1]);

//- Print entire grid using nested for Loop 


function printGrid(){
    let row = 0;
    let col = 0;
    let newString = '';

    console.log("##Printing Grid##")
    for (row=0;row<2;row++){
        for (col=0;col<3;col++){
            let newElement = grid[row][col];
            
            newString += ` ${newElement}`
        };
        console.log(newString);
        newString = '';
    }
}

printGrid();

//Printing it in a more optimised manner
function printGrid1() {
    console.log("##Printing Grid 01##");

    for (let row = 0; row < 2; row++) {
        let rowArray = [];  // Use an array to store the elements in the current row
        
        for (let col = 0; col < 3; col++) {
            let newElement = grid[row][col];
            rowArray.push(newElement);  // Add the element to the array
        }

        console.log(rowArray.join(' '));  // Join the array elements into a string and print once
    }
}

printGrid1();

// ^^ Now how do I make this 





