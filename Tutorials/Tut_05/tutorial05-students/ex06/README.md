# Instructions

There are two textboxes. After the user types in two numbers in the two textboxes, they will click on the `Calculate` button.

Using the `alert` function, display the sum of the two.

**Steps**

    - Extract out the value from the first textbox
    - Extract out the value from the second textbox
    - Use alert to display the sum

## Reference:

#### Given:

    <input type="text" id="firstName"/>
#### Hint 

<code>
To extract what the user type into the textbox
let firstNameElement = document.querySelector("#firstName");
let firstName = firstNameElement.value;

</code>
<br/>

#### Dealing with Events
`element.addEventListener('event', functionName, [Boolean]);`

