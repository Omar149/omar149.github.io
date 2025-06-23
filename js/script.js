const result = document.getElementById("number");
let operator = null;
let number1 = null;
let number2 = null;
let lastNumber = null;

function display(number){
    result.innerText = result.innerText + number;
}
function reset(){
    result.innerText = "";
    operator = null;
}
function operate(op){
    operator = op;
    number1 = result.innerText;
    result.innerText = "";
    lastNumber = null
}
function calc(){
    if (lastNumber === null) {
        number2 = result.innerHTML;
        lastNumber = number2;
    } else {
        number2 = lastNumber;
    }

    if (operator === "+") {
        const answer = parseFloat(number1) + parseFloat(number2);
        result.innerText = answer;
        number1 = answer;
    } else if (operator === "-") {
        const answer = parseFloat(number1) - parseFloat(number2);
        result.innerText = answer;
        number1 = answer;
    } else if (operator === "x") {
        const answer = parseFloat(number1) * parseFloat(number2);
        result.innerText = answer;
        number1 = answer;
    } else if (operator === "/") {
        const answer = parseFloat(number1) / parseFloat(number2);
        result.innerText = answer;
        number1 = answer;
    }
}