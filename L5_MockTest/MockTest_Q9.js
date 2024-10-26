// Q9. Create a function called sumArray that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
// // Example usage:
// console.log(sumArray([1, 2, 3, 4])); // Should return 10

const arr = [1,2,3,4,6];


function sumArray(array){
    //get length of array
    arrLength = array.length;
    console.log(`Length of array = ${arrLength}`);

    //get sum of elements in array
    let arrSum = 0;
    for (let i=0; i < arrLength; i++){
    // (wrong) for (let i=0; i < array.length; i++){
        arrSum += array.pop();
        console.log(`i = ${i} & arrSum = ${arrSum}`);
    }

    //return / print sum
    console.log(arrSum);
    return arrSum;
}

sumArray(arr);