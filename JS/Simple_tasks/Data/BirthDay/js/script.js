"use strict";
window.onload = () => {

   let Bday = prompt("Enter Birthday", "1986/07/07");
   let DateEntered=new Date(Bday);  
   let arr= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   console.log("Birthday was on " +  arr[DateEntered.getDay()]);
  
}
