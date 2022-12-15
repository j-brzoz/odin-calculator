function add(a, b){
    return a + b;
}
function multiply(a, b){
    return a * b;
}
function substract(a, b){
    return a - b;
}
function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
    if(operator == "+")
        return add(a, b);
    else if(operator == "-")
        return substract(a, b);
    else if(operator == "*")
        return multiply(a, b);
    else if(operator == "/")
        return divide(a, b);
}

const numbers = document.querySelectorAll("#number");
const operators = document.querySelectorAll("#operator");
const equals = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const display = document.querySelector("#display");

numbers.forEach((number) => number.addEventListener("click", () => displayNumber(number.textContent)));
operators.forEach((operator) => operator.addEventListener("click", () => displayOperator(operator.textContent)));
equals.addEventListener("click", () => displaySolution(operator, firstNumber, parseFloat(wholeNumber)));
clearBtn.addEventListener("click", () => clearFun());
deleteBtn.addEventListener("click", () => deleteFun());

let wholeNumber = "";
let operator = "";
let firstNumber = null;
 
function displayNumber(inputNumber){
    if(wholeNumber.length < 8){
        wholeNumber += inputNumber;
    }
    display.textContent = wholeNumber;
}

function displayOperator(inputOperator){
    operator = inputOperator;
    display.textContent = operator;
    if(firstNumber == null){
        firstNumber = parseFloat(wholeNumber);
        wholeNumber = "";
    }
    if(wholeNumber != "" && typeof firstNumber != null){
        displaySolution(operator, firstNumber, parseFloat(wholeNumber));
    }    
}

function displaySolution(operator, a, b){
    display.textContent = operate(operator, a, b);
    firstNumber = operate(operator, a, b);
    wholeNumber = "";
}

function clearFun(){
    display.textContent = " ";
    firstNumber = null;
    wholeNumber = "";
}
