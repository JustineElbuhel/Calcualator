"use strict"

window.onload = init;

function init() {
    const add = document.getElementById("add");
    add.onclick = addClicked;

    const subtract = document.getElementById("subtract");
    subtract.onclick = subtractClicked;

    const multiply = document.getElementById("multiply");
    multiply.onclick = multiplyClicked;

    const divide = document.getElementById("divide");
    divide.onclick = divideClicked;
}

function addClicked() {
    const num1 = parseFloat(document.getElementById("firstNumber").value);
    const num2 = parseFloat(document.getElementById("secondNumber").value);
    const solution = num1 + num2;

    const answer = `${solution}`
    document.getElementById("answer").value = answer;
}

function subtractClicked() {
    const num1 = parseFloat(document.getElementById("firstNumber").value);
    const num2 = parseFloat(document.getElementById("secondNumber").value);
    const solution = num1 - num2;

    const answer = `${solution}`
    document.getElementById("answer").value = answer;
}

function multiplyClicked() {
    const num1 = parseFloat(document.getElementById("firstNumber").value);
    const num2 = parseFloat(document.getElementById("secondNumber").value);
    const solution = num1 * num2;

    const answer = `${solution}`
    document.getElementById("answer").value = answer;
}

function divideClicked() {
    const num1 = parseFloat(document.getElementById("firstNumber").value);
    const num2 = parseFloat(document.getElementById("secondNumber").value);
    const solution = num1 / num2;

    const answer = `${solution}`
    document.getElementById("answer").value = answer;
}