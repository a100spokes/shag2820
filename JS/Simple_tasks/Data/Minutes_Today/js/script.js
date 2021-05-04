"use strict";
window.onload = () => {

  setInterval(()=>{
    let timeNow=new Date();
    console.log(timeNow);
    let second = timeNow.getSeconds();
    let timePass= timeNow.getHours()*60 + timeNow.getMinutes();
    console.log(`Form the beginning of this day passed  ${timePass} minutes and ${second} seconds
    ***********************************************`);    
  },1000)  

 

}
