// Get inputs from DOM - Select button
const button = document.getElementById("calculateBtn");

// Event Listener
button.addEventListener("click", getSumOfInputsHandler, [Boolean]);

// Event Handler
function getSumOfInputsHandler() {
    const input_1 = document.getElementById("box1").value;
    const input_2 = document.getElementById("box2").value;

    let sum = parseInt(input_1) + parseInt(input_2);

    console.log(
        `Input 1:${input_1} ${typeof input_1} , Input 2:${input_2} ${typeof input_2}, Sum = ${sum}`
    );

    alert(`${input_1} + ${input_2} = ${sum}`);
}
