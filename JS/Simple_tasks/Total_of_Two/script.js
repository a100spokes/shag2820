'use strict';
var Ostatok_X = 0;
var Memmory_Y = 0;
var Fin_Num = "";

var x = +prompt("Enter first num X", 199245);
var y = +prompt("Enter second num Y", 3999780);

var Chisla_Vvoda_X = x;
var Chisla_Vvoda_Y = y;

if ((!isNaN(+x)) && (!isNaN(+y))) {

    while (x) {
        Ostatok_X = x % 10;
        x = (x - Ostatok_X) / 10;
        Memmory_Y = y;
        while (Memmory_Y) {
            if (Memmory_Y % 10 == Ostatok_X) {
                console.log("You entered X: " + Chisla_Vvoda_X + " and Y: " + Chisla_Vvoda_Y + "\n\n" + "Total number: " + Ostatok_X + ",");
                
            }
            Memmory_Y = (Memmory_Y - Memmory_Y % 10) / 10;
        }
    }
} else {
    console.error("Incorrect values");
    alert("Enter only numbers");
}