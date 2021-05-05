"use strict";
window.onload = function () {
  let row = +prompt("Num of rows", "4");
  let col = +prompt("Num of columns", "3");

  let codeArea = ce("textarea");
  let table = ce("table", undefined, "table");
  let box = ce("div", undefined, "box");
  let tableWraper = ce("div", undefined, "box");
  document.body.prepend(box);
  box.after(tableWraper);
  tableWraper.prepend(table);
  tableWraper.after(codeArea);
  document.querySelector("table").id = "main_tb_container";
  create_table();
  let somtn = document.body.children[1].innerHTML;
  let mass = [];
  let mass1 = [];
  mass = somtn.match(/\<.*?\>/g);
  for (let i = 0; i < mass.length; i++) {
    if (
      mass[i] == '<table class="table" id="main_tb_container">' ||
      mass[i] == "</table>" ||
      mass[i] == "</td>"
    ) {
      mass[i] = mass[i] + "\n";
      codeArea.append(mass[i]);
    } else if (mass[i] == "<td>") {
      mass[i] = "\t\t\t" + mass[i];
      codeArea.append(mass[i]);
    } else if (mass[i] == "<tbody>" || mass[i] == "</tbody>") {
      mass[i] = "\t" + mass[i] + "\n";
      codeArea.append(mass[i]);
    } else if (mass[i] == "<tr>" || mass[i] == "</tr>") {
      mass[i] = "\t\t" + mass[i] + "\n";
      codeArea.append(mass[i]);
    }
  }

  function create_table() {
    let ta = document.getElementById("main_tb_container");
    for (let i = 0; i < row; i++) {
      let ro = ta.insertRow(-1);
      for (let j = 0; j < col; j++) {
        let ce = ro.insertCell(-1);
      }
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
