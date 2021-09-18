(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
