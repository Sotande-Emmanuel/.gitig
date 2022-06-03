// addition
function add(number1, number2) {
    return number1 + number2;
  }
  
 const number1 = parseInt(prompt("Enter a number:"));
 const number2 = parseInt(prompt("Enter another number:"));
  
  alert(add(number1, number2));

// subtraction
function subtract(number3, number4) {
    return number3 - number4;
}

const number3 = parseInt(prompt("Enter a number:"));
const number4 = parseInt(prompt("Enter another number:"));

alert(subtract(number3, number4));

// multiply
function multiply(number5, number6) {
    return number5 * number6;
}

const number5 = parseInt(prompt("Enter a number:"));
const number6 = parseInt(prompt("Enter another number:"));

alert(multiply(number5, number6));

// division
function divide(number7, number8) {
    return number7 / number8;
}

const number7 = parseInt(prompt("Enter a number:"));
const number8 = parseInt(prompt("Enter another number:"));

alert(divide(number7, number8));

function convertToFahrenheit(celsius) {
    return ((9/5)*celsius)+32
}

function convertToCelsuis(fahrenheit) {
    return (5/9)*(fahrenheit-32)
}


