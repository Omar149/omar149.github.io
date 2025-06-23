let array = ["Pizza", "Sushi"];
let text = document.getElementById("arrayText");
let input = document.getElementById("userInput");
let num = document.getElementById("userNum");
let numRes = document.getElementById("numResult");
let index = 0;

text.textContent = array.join(", ");

function add(){
    text.removeAttribute("style");
    array.push(input.value);
    text.textContent = array.join(", ");
}

function remove(){
    array.pop();
    text.textContent = array.join(", ");

    if (array.length === 0){
        text.innerText = "*Array is empty*";
        text.style.fontSize = "20px";
        text.style.color = "red";
        text.style.border = "none";
    }
}

function getIndex(){
    index = parseInt(num.value);
    if (array.length === 0){
        alert("Array is empty!");
        return;
    } else if (isNaN(index) || index > (array.length-1) || index < 0){
        alert("Invalid. Please enter a number between 0 and " + (array.length-1));
        return;
    }
    numRes.textContent = array[index];
}