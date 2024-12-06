//
/*
to start with q1. we can
getElementsByClassName
querySelectorAll
think about live nodelist and static node lists (refer to slide deck)
run a loop
in the loop
--> modify the className to cool
*/
//console.log("hi");

//// Handler Function ////
// First Task: Change all 'li.hot' class to 'cool'
function task1() {
    document.querySelectorAll("li.hot").forEach((elem) => {
        elem.className = "cool";
    });
}

// Task 2: Using getElementsByClassName to check if there are 3 or more elements with class 'hot' and change the 3rd one
function task2() {
    const hotItemsByClass = document.getElementsByClassName("hot");
    if (hotItemsByClass.length >= 3) {
        hotItemsByClass[2].className = "cool";
    }
}

// Task 3: Using getElementsByTagName to check for any 'li.hot' and change the first one to 'cool'
function task3() {
    const listItems = document.getElementsByTagName("li");
    for (const elem of listItems) {
        if (elem.classList.contains("hot")) {
            elem.classList.remove("hot");
            elem.classList.add("cool");
            break;
        }
    }
}

//Reset the page
function reset() {
    const listItems = document.querySelectorAll("li.cool").forEach((elem) => {
        elem.className = "hot";
    });
}

task3();
task2();
task1();
reset();
