'use strict';
var sumChis = 0;
var Chisla_Vvoda = "";
var x = 1;
var ost = 0;

x = +prompt("Enter number", 412);
if (!isNaN(+x)) {
    Chisla_Vvoda += x;


    while (x != 0) {
        ost = x % 10;
        x = (x - ost) / 10;
        sumChis = sumChis + ost;
    }
} else {
    console.error("Incorrect values");
    alert("Enter only numbers");
}

console.log("You entered: " + Chisla_Vvoda + "\n" + "\n" + "sum of the digits of entered number: " + sumChis);