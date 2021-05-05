 "use strict";
 var arr = [];

 function randomInteger(min, max) {
     // получить случайное число от (min-0.5) до (max+0.5)
     let rand = min - 0.5 + Math.random() * (max - min + 1);
     return Math.round(rand);
 }

 var n = randomInteger(5, 15);
 for (var i = 0; i < n; i++) {
     arr.push(randomInteger(2, 8));
 }



 var Result_Arr = [arr[0]];
 var Non_Max_arr = [arr[0]]
 console.log("Array: " + "\n\n" + arr.join(" | ") + "\n\n");
  
 for (i = 1; i < arr.length; i++) {

     if (arr[i] >= arr[i - 1]) {
         Non_Max_arr.push(arr[i]);
     } else {

         if (Non_Max_arr.length > Result_Arr.length) {

             Result_Arr = Non_Max_arr;
         }

         Non_Max_arr = [arr[i]];
     }
 }



 if (Non_Max_arr.length > Result_Arr.length) {

     Result_Arr = Non_Max_arr;

 }

 console.log("Maximum consistency: " + "\n" + Result_Arr);