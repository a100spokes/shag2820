'use strict';
var sumChis = 0;
var sumChisFin = 0;
var Chisla_Vvoda = "";
var Chisla_VvodaFin = "";
var x = 1;
var ostatok = 0;
var ostatok1 = 0;
var final = "";
var Delete = 1;

x = +prompt("Enter first number", 19999245);
Delete = +prompt("Enter second number", 9);
if (!isNaN(+x)) {
    Chisla_Vvoda += x;
    Chisla_VvodaFin += x;
    while (x != 0) {
        ostatok = x % 10;
        x = (x - ostatok) / 10;
        sumChis = sumChis + ostatok;
        sumChisFin = sumChis;
    }
    while (Chisla_Vvoda !== 0) {
        ostatok1 = Chisla_Vvoda % 10; 
        Chisla_Vvoda = (Chisla_Vvoda - ostatok1) / 10;
        ostatok1 != Delete ? final = ostatok1 + final : null;
    }
} else {
    console.error("incorrecr value");
    alert("Enter only numbers");
}

console.log("You entered: " + Chisla_VvodaFin + "\n" + "\n" + "Sum of all digits of entered number: " + sumChis + "\n" + "\n" + "\n" + "If you remove from this number " + Chisla_VvodaFin + " second number - " + Delete + ", " + "you wil get a number " + final);