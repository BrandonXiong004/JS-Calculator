// your JS Code here

//Addition function singular
/*function add(value1, value2) {
    value1 + value2;
    //This returns the input of value1 and value2 by adding them together
    return value1 + value2;
}
*/

/*
//Function that adds, subtacts, multiplies, and divides without switch and return statement.
//Variable for operator
const operator = prompt('Enter an operator or symbol. Ex: (+, -, *, or /)');

//Variables for values
const value1 = Number(prompt('Enter the first value.'));
const value2 = Number(prompt('Enter the second value.'));

//Function
let result;

if (operator == '+') { //This states that if the operator input is +, it means addition
    result = value1 + value2;
}
else if (operator == '-') { //This states that if the operator input is -, it means subtraction
    result = value1 - value2;
}
else if (operator == '*') { //This states that if the operator input is *, it means multiply
    result = value1 * value2;
}
else if (operator == '/') { //This states that if the operator input is /, it means division
    result = value1 / value2;
}

alert(" The result is " + result);
console.log(" The result is " + result);
*/

/*
//Function using switch and a if-else statement
function calculate() {
    const operator = prompt('Enter an operator or symbol. Ex: (+, -, *, or /)');
    //Variables for values
    const value1 = Number(prompt('Enter the first value.'));
    const value2 = Number(prompt('Enter the second value.'));
    
    let result;
    switch(operator){
        case 'math':
            if (operator == '+') { //This states that if the operator input is +, it means addition
                result = value1 + value2;
            }
            else if (operator == '-') { //This states that if the operator input is -, it means subtraction
                result = value1 - value2;
            }
            else if (operator == '*') { //This states that if the operator input is *, it means multiply
                result = value1 * value2;
            }
            else if (operator == '/') { //This states that if the operator input is /, it means division
                result = value1 / value2;
            }
    }
}

alert(" The result is " + result);
console.log(" The result is " + result);
*/

/*
//Function that adds but is more simplfied using code above
function calculate() {
    //Variable for operator
const operator = prompt('Enter an operator or symbol. Ex: (+, -, *, or /)');

//Variables for values
const value1 = Number(prompt('Enter the first value.'));
const value2 = Number(prompt('Enter the second value.'));
    switch(value1, value2) {
        case 'add':
        value1 + value2
    }
    alert(value1 + value2)
}
*/

/*
//Function that uses if-else statements in it and is simplfied
function solve() {
    //Variable for operator
const operator = prompt('Enter an operator or symbol. Ex: (+, -, *, or /)');

//Variables for values
const value1 = Number(prompt('Enter the first value.'));
const value2 = Number(prompt('Enter the second value.'));
let result;
    switch(value1, value2) {
        case 'add':
            if (operator == '+') { //This states that if the operator input is +, it means addition
                result = value1 + value2;
                break;
            }
            case 'subtract':
            if (operator == '-') { //This states that if the operator input is -, it means subtraction
                result = value1 - value2;
            }
    }
    return alert('The result is ' + result);
}
*/

//Function that uses if-else statements in it and is simplfied with the switch
function solve() {
    let result; //result return variable


const value1 = Number(prompt('Enter the first value.')); //Value 1 input
const value2 = Number(prompt('Enter the second value.')); //Value 2 input

var operator = findOp(); //Variable to tell the user what it wants
    function findOp () { //Function for if the operator is invalid or an operator is not inputted
        let operator = prompt('Enter an operator or symbol. Ex: (+, -, *, or /)'); //User is prompted to enter a mathematical operator
        let ops = ['+', '-', '*', '/'];
    if (ops.includes(operator)) { //if else loop for checking the operator
    return operator
} else {
    alert('NaN operator')
    return findOp();
}
}

switch(operator) { //Switch+cases for the results
        case '+': //Addition case
                result = value1 + value2;
                break;
            
        case '-': //Subtraction case
                result = value1 - value2;
                break;

        case '*': //Multiplication case
            result = value1 * value2;
            break;

        case '/': //Division case
            result = value1 / value2;
            break;
            }
    return alert('The result is ' + result);
    console.log('The result is ' + result);
}

//Script for Calculator Part 2
let display = document.getElementById('display'); //This variable is for the display

let btns = Array.from(document.getElementsByClassName('btn')); //This variable is for buttons in an array form
console.log(btns); //This checks to see if the class btn is logged. Confirms that buttons are called by getElementsByClassName

btns.map( btn => {
    btn.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C': //This resets the display to just emptiness when clicked
                display.innerText = '';
                break;
            case 'Del': //When Del is clicked, an index is removed(sliced) from the the display
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText); //Apparently is not working when '=' is pressed. (CANNOT resolve this error ;_;)
                    /*console.log('Working?'); //checking to see if it works*/
                } catch {
                    display.innerText = 'Error!'; //An error will prompted if anything other than numerical value is inputted
                }
                break;
                default:
                    display.innerText += e.target.innerText //display
                }
    });
});

