"use strict";
window.onload = function () {
  this.onkeydown = function (e) {
    let liActive = document.querySelectorAll(".list > li.active");
    if (
      (e.which == 46 || e.which == 110) &&
      liActive.length != 0 &&
      confirm("delete?")
    ) {
      [...liActive].forEach((item, i) => {
        item.remove();
      });
    }
  };

  function init() {
    let ul = ce("ul", undefined, "list", "click", fnAll);
    ul.addEventListener("contextmenu", fnAll);
    let addButn = ce("div", "add", "addBtn", "click", fnAddLi);
    addButn.addEventListener("click", classBtnOn);
    let sortUpButn = ce("div", "sort &#9650", "inactiveBtn1", "click", sort);
    let sortDwButn = ce("div", "sort &#9660", "inactiveBtn2", "click", reSort);
    document.body.append(addButn);
    document.body.append(sortUpButn);
    document.body.append(sortDwButn);
    document.body.append(ul);
  }
  init();

  function fnAddLi() {
    let ul = document.querySelector(".list");
    let li = ce("li", randomInteger(1, 10));
    ul.append(li);
  }

  function fnAll(e) {
    e.preventDefault();
    if (e.type == "click" && e.target.tagName == "LI") {
      liClick(e, e.target);
    } else if (e.type == "contextmenu" && e.target.tagName == "LI") {
      liClickRight(e.target, "menu");
    } else if (
      e.type == "click" &&
      e.target.tagName == "P" &&
      e.target.className == "rand"
    ) {
      e.target.parentElement.parentElement.innerHTML = randomInteger(1, 10);
    } else if (
      e.type == "click" &&
      e.target.tagName == "P" &&
      e.target.className == "rem"
    ) {
      if (confirm("delete?")) {
        e.target.parentElement.parentElement.remove();
      }
    }
  }

  let flag = true;

  function liClick(e, elem) {
    flag = true;
    if (e.ctrlKey) {
      elem.classList.toggle("active");
    } else {
      let li = document.querySelectorAll(".list > li.active");
      [...li].forEach((item, i) => {
        item.classList.remove("active");
      });
      elem.classList.add("active");
    }
  }

  function liClickRight(elem, text) {
    if (flag) {
      let li = document.querySelectorAll(".list > li.active");
      if (li.length == 1) {
        if (elem.className == "active") {
          let modal = ce("div", undefined, "modal");
          modal.id = "modal";

          let header = ce("div", text, "menuHead");
          let butRandom = ce("p", "random ?", "rand");
          let butRemove = ce("p", "delete ?", "rem");

          modal.append(header);
          modal.append(butRandom);
          modal.append(butRemove);
          elem.append(modal);
          flag = false;
        }
      }
    }
  }
  this.onclick = function () {
    let modWin = document.getElementsByClassName("modal");
    for (let i = 0; i < modWin.length; i++) {
      modWin[i].className = "modalNo";
    }
  };

  function ce(name = "div", text, className, event, fn) {
    let elem = document.createElement(name);
    className != undefined ? (elem.className = className) : null;
    text != undefined ? (elem.innerHTML = text) : null;
    event != undefined ? elem.addEventListener(event, fn) : null;
    return elem;
  }

  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  let flag1 = true;
  function classBtnOn() {
    if (flag1) {
      let contents = document.querySelectorAll("li");
      if (contents.length > 0) {
        let btn1 = document.querySelector(".inactiveBtn1");
        let btn2 = document.querySelector(".inactiveBtn2");
        btn1.className = "sortUpButn";
        btn2.className = "sortDwButn";
      }
    }
    flag1 = false;
  }

  function reSort() {
    sort();
    let contents = document.querySelectorAll("li");
    let list = [];
    for (let i = 0; i < contents.length; i++) {
      list.push(contents[i].innerHTML);
    }
    list.reverse();
    for (let i = 0; i < list.length; i++) {}
    for (var i = 0; i < list.length; i++) {
      contents[i].innerHTML = list[i];
    }
  }

  function sort() {
    let contents = document.querySelectorAll("li");
    let list = [];
    for (let i = 0; i < contents.length; i++) {
      list.push(contents[i].innerHTML);
    }
    list.sort(function (a, b) {
      return a - b;
    });
    for (let i = 0; i < list.length; i++) {}
    for (var i = 0; i < list.length; i++) {
      contents[i].innerHTML = list[i];
    }
  }
};
