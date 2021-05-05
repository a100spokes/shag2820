'use strict';
var sum = 0;
var Chisla_Vvoda = "";
var x = 1;
var Last_x = "";
var max = 1;
var min = Infinity;


while (x) {

    var x = +prompt("Enter number, 0 - to stop", 12);
    if (!isNaN(+x)) {
        sum += x;

        if (x != 0) {
            Chisla_Vvoda += x + ", ";
            Last_x = x;
        }

        (x > max) ? max = x: null;

        ((x < min) && (x != 0)) ? min = x: null;
    } else {
        console.error("Incorrect values");
    alert("Enter only numbers");
    }
}

console.log("You entered: " + Chisla_Vvoda + "\n" + "\n" + "Sum all: " + sum + "\n" + "\n" + "Last entered: " + Last_x + "\n" + "\n" + "Max: " + max + "\n" + "Min: " + min);