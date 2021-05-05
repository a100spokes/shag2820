"use strict";

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

var arr = [];
var n = randomInteger(5, 15);
for (var i = 0; i < n; i++) {
    arr.push(randomInteger(2, 8));
}
console.log("Array: " + "\n\n" + arr.join(" | ") + "\n\n");

for (var i = 0; i < arr.length; i++) {
    var NonUnic = arr[i];
    var k = 0;

    for (var j = i; j < arr.length; j++) {
        if (NonUnic == arr[j]) {
            k++;
        }
    }

    k > 1 ?
        console.log("Number: " + NonUnic + " - meets " + k + " times") : null

    if (k >= 2) {
        for (var j = i; j < arr.length; j++) {
            if (NonUnic == arr[j]) {

                arr.splice(j, 1);
                j--;
            }
        }

        i--;
    }
}