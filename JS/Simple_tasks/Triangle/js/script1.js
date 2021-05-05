"use strict";

let x = +prompt("Enter triangle height", 5);
let count = "";
let stars = "";

if ((!isNaN(x)) && (x > 0)) {

    while (x) {
        count += "" + "*" ;
        stars += count + "\n";
        x--;
    }
    
    console.log(stars);


} else { console.error("Enter only positive numbers, exept 0!"); }