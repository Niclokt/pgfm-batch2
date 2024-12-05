let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let sumResult = document.getElementById('sumResult')

// btn_getSum.addEventListener('click', function(){
//     let sum = parseInt(document.getElementById('input1').value) + parseInt(document.getElementById('input2').value);
//     sumResult.innerText = sum;
//     alert(`Input1 + Input2 = ${sum}`);
// });


// input type for user inputs by typing is usually stored as a string
// therefore need to parseInt to calculate as numbers

btn_getSum.addEventListener('click', function(){
    let sum = parseInt(input1.value) + parseInt(input2.value);
    sumResult.innerText = sum;
    alert(`Input1 + Input2 = ${sum}`);
});

//console.log(typeof input1);
