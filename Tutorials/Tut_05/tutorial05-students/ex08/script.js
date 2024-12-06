// Select the elements and assign to variables
let text = document.querySelector(".text");
let words = document.querySelector(".words");
let characters = document.querySelector(".characters");

// Add an event listener to the textarea
text.addEventListener("input", function () {
    // Retrieve the user's input value
    const inputText = text.value;

    // Count the number of words (split by spaces, considering empty input)
    const wordCount = inputText.trim().split(/\s+/).filter(Boolean).length;

    // Update the character and word count in the HTML
    characters.textContent = `${inputText.length}`;
    words.textContent = `${wordCount}`;
});
