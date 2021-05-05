"use strict";

var x = +prompt("Enter first num X", 12);
var y = +prompt("Enter second num Y ", 4);
var nod = 1;
var step = 1;

if ((!isNaN(x)) && (!isNaN(y))) {
    while ((step <= x) && (step <= y)) {
        ((x % step == 0) && (y % step == 0)) ? nod = step: null;
        step++;
    }
    console.log("Greatest divisor of " + x + " & " + y + " - it`s: " + nod);
} else { console.error("Enter only numbers!"); }