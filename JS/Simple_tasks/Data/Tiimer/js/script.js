"use strict";
window.onload = () => {
  let count = 0;
  let flag = true;
  let flag1 = true;

  init();

  this.onkeydown = function (e) {
    if (e.which == 46 || e.which == 110) {
      document.body.innerHTML = "";
      init();
      flag1 = true;
      count = 0;
      flag = true;
    } else if (e.which == 32) {
      firsSt();

      startTime();
      // debugger
      count++;

      addBl();
    }
  };
  function firsSt() {
    if (flag) {
      document.body.innerHTML = "";

      flag = false;
    }
  }

  function addBl() {
    if (count > 1) {
      let clock1 = ce("div", "text", "clock1");

      document.body.children[1].append(clock1);
      clock1.innerHTML = document.body.children[0].children[0].innerHTML;
    }
  }
  function init() {
    let divL = ce("div", undefined, "divL");
    let clock = ce("div", "text", "clock");
    let divR = ce("div", undefined, "divR");
    document.body.append(divR);
    document.body.append(divL);
    divL.append(clock);
    let timer = new Date(0, 0, 0, 0);
    console.log(timer);
    let milS = timer.getMilliseconds();
    let sec = timer.getMilliseconds();
    let min = timer.getMinutes();
    let hour = timer.getHours();
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    clock.innerHTML = hour + " : " + min + " : " + sec + " . " + milS;
  }

  function startTime() {
    if (flag1) {
      let divL = ce("div", undefined, "divL");
      let clock = ce("div", "text", "clock");
      document.body.append(divL);
      let divR = ce("div", undefined, "divR");
      document.body.append(divR);
      divL.append(clock);
      let timer = new Date(0, 0, 0, 0);
      console.log(timer);
      let milS = timer.getMilliseconds();
      let sec = timer.getMilliseconds();
      let min = timer.getMinutes();
      let hour = timer.getHours();
      if (hour < 10) {
        hour = "0" + hour;
      }

      if (min < 10) {
        min = "0" + min;
      }
      if (sec < 10) {
        sec = "0" + sec;
      }
      let interV = setInterval(() => {
        clock.innerHTML = hour + " : " + min + " : " + sec + " . " + milS;
        milS++;
        if (milS == 99) {
          milS = 0;
          milS = "00" + milS;
          sec++;
          if (sec < 10) {
            sec = "0" + sec;
          } else if (sec == 60) {
            sec = 0;
            sec = "0" + sec;
            min++;
            if (min < 10) {
              min = "0" + min;
            } else if (min == 60) {
              min = 0;
              min = "0" + min;
              hour++;
              if (hour < 10) {
                hour = "0" + hour;
              }
            }
          }
        }
      }, 10);
      flag1 = false;
    }
  }
  function ce(name = "div", text, className, event, fn) {
    let elem = document.createElement(name);
    className != undefined ? (elem.className = className) : null;
    text != undefined ? (elem.innerHTML = text) : null;
    event != undefined ? elem.addEventListener(event, fn) : null;
    return elem;
  }
};
