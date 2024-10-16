// console.log("HELLO")



// const greetingC = "Bye";
// function greetC(){
//     greetingC == "Namaste";
//     console.log(greetingC);
// } 


// greetC();

// //`` for template literals 
// //Example: 
// // string substituition
// // cleaner 
// // the better way to code
// var age = 21;
// console.log(`My age is ${age}`);


// var age = 21;
// console.log('My age is ' + age);


// // Type Conversion
// // e.g converting interger to float
// // 2 ways - (1) implicit vs (2)Explicit

// result = '5' - 2
// console.log(result);

// //vs 

// result = '5' + 2 // js thinks '+' is to concatenate string, hence, it converts the int into a string
// console.log(result);

// // vs

// result = '4' - true; // js converts true (= 1 in boolean) to into int
// console.log(result);

// //Explicit data conversion
// result = Number("321-1");
// console.log(result); // --> results in NaN -->> Means that it is not a number = NaN

// result = Number("45");
// console.log(result); 

// result = Number(true);
// console.log(result); 

// result = parseInt("20.01");
// console.log(result); 

// result = Boolean(45);
// console.log(result); 

// result = Number(0);
// console.log(result); 

// result = Boolean(" ");
// result_1 = Boolean(""); // --> for Bool explicit type conversion, as long as it has something, it will throw a true
// console.log(`result = ${result}`);
// console.log(`result_1 = ${result_1}`);

// //test
// const sillyNum = 42;
// const nowANum = sillyNum + "1";
// console.log(nowANum);
// console.log(typeof(nowANum));


//Comparison
// x ? y : z
console.log((85 > 50) ? "yes" : "no");

//math. --> namespace


//Logical Operators:
// && = and
// || = Or

//Casting
//good practises to adopt
//Best to use === if you are not sure what your data types and values are


//Branching
