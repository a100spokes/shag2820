"use strict";
var sum = 0;
var sumCh = 0;
var sumNch = 0;
var sumPos = 0;
var sumNeg = 0;
var str = "";
var x = 1;
var Chet = "";
var NChet = "";
var Positive = "";
var Negative = "";

while (x != 0) {
  var x = +prompt("Enter numbers, 0 to stop", 12);
  if (!isNaN(+x)) {
    sum += x;

    x != 0 ? (str += x + " ") : null;

    if (x % 2 == 0 && x !== 0) {
      Chet += " " + x;
      sumCh += x;
    }

    if (x % 2 !== 0) {
      NChet += " " + x;
      sumNch += x;
    }
    if (x > 0) {
      Positive += " " + x;
      sumPos += x;
    }
    if (x < 0) {
      Negative += " " + x;
      sumNeg += x;
    }
  } else {
    console.error("Incorrect values");
    alert("Enter only numbers");
  }
}

console.log(
  "Entered: " +
    str +
    "\n" +
    "\n" +
    "Sum all: " +
    sum +
    "\n" +
    "\n" +
    "Even: " +
    Chet +
    "\n" +
    "Sum even: " +
    sumCh +
    "\n" +
    "\n" +
    "Odd: " +
    NChet +
    "\n" +
    "Sum odd: " +
    sumNch +
    "\n" +
    "\n" +
    "Positive: " +
    Positive +
    "\n" +
    "Sum positive: " +
    sumPos +
    "\n" +
    "\n" +
    "Negative: " +
    Negative +
    "\n" +
    "Sum negative: " +
    sumNeg
);
