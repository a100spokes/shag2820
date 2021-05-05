"use strict";

var x = +prompt("Enter rectangle height  ", 6);
var row = "";
var memmory_x_1 = (x - 2);
var memmory_x_2 = memmory_x_1;
var col_row = "";
var col_tmp = "";
var col = "";


if ((!isNaN(x)) && (x > 1)) {

    while (memmory_x_1) {
        col_tmp += "" + " ";
        memmory_x_1--;
        col_row = "*" + col_tmp + "*";
    }
    while (memmory_x_2) {
        col += col_row + "\n";
        memmory_x_2--;
    }
    while (x) {
        row += "" + "*";
        x--;
    }
    console.log(row + "\n" + col + row);

} else { console.error("Enter only positive numbers, from 2 and above!"); }