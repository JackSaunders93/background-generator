var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer: ', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var gradient = document.getElementById("gradient");
var button = document.querySelector('.random');

function displayGradient() {
    css.textContent = gradient.style.background + ";";
}

function setGradient() {
    var a = color1.value;
    var b = color2.value;
    gradient.style.background =
    "linear-gradient(to right, " + a + ", " + b + ")";
    displayGradient();
}

function randomColor(colorA, colorB) {
    var colorA = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    var colorB = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    gradient.style.background =
    "linear-gradient(to right, " + colorA + ", " + colorB + ")";
    displayGradient();
}

window.onload = setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor);