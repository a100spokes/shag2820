"use strict";
window.onload = function () {
  let k = 0;
  let sumNumber = 0;
  let box = ce("div", undefined, "box");
  let addRow = ce(
    "div",
    "column&nbsp&nbsp+",
    "addRowClass",
    "click",
    oneTimeClicker
  );
  let delBtn = ce("div", "1", "delBtn", "click", oneTimeClicker);
  addRow.addEventListener("click", addRowFn);
  addRow.addEventListener("click", diagColorer);
  addRow.addEventListener("click", delClassOn);
  addRow.addEventListener("click", sumAll);
  let addCol = ce(
    "div",
    "row&nbsp&nbsp+",
    "addColClass",
    "click",
    oneTimeClicker
  );
  addCol.addEventListener("click", addCell);
  addCol.addEventListener("click", delClassOn);
  addCol.addEventListener("click", diagColorer);
  addCol.addEventListener("click", sumAll);
  let sumBox = ce("div", undefined, "sumBoxClass");
  let butnText = ce("div", undefined, "TextClass");
  let sumText = ce("span", "Sum: ", "sumTextClass");
  let sumWin = ce("div", "000", "sumWinClass");
  let sumClear = ce("div", "clear", "sumClearClass", "click", clearSum);
  let table = ce("table", undefined, "table");
  let tableCell = ce("td", randomInteger(1, 10), undefined);
  let tableRow = document.createElement("tr");
  ////////////////////////////////////////////////////////////////////////////////////
  document.body.prepend(box);
  box.prepend(addCol);
  box.prepend(addRow);
  box.append(sumBox);
  box.append(sumClear);
  sumBox.append(sumText);
  sumBox.append(sumWin);
  box.append(butnText);
  box.after(table);
  butnText.innerHTML = `F1 - column&nbsp&nbsp+ </br>
    F2 - row&nbsp&nbsp+</br>
    DEL - delete table`;
  ////////////////////////////////////////////////////////////////////////////////////
  this.onkeydown = function (e) {
    //e = event
    if (e.which == 46 || e.which == 110) {
      lastRowDel();
    } else if (e.which == 112) {
      oneTimeClicker();
      addRowFn();
      diagColorer();
      delClassOn();
      sumAll();
    } else if (e.which == 113) {
      oneTimeClicker();
      addCell();
      diagColorer();
      delClassOn();
      sumAll();
    }
  };

  function lastRowDel() {
    clearSum();
    document.body.children[1].innerHTML = "";
    k = 0;
    tableRow.innerHTML = "";
    cellQnty();
    rowQnty();
  }

  function removeBut() {
    // debugger
    if (table.rows.length > 1) {
      let tr = this.parentNode;
      table.deleteRow(tr.rowIndex);
      sumAll();
      diagColorer();
    } else {
      lastRowDel();
    }
  }

  function sumAll() {
    let rows = document.getElementsByTagName("table")[0].rows;
    let sumAllNum = 0;
    for (let i = 0; i < rows.length; i++) {
      let row = table.rows[i];
      for (let j = 1; j < row.cells.length; j++) {
        sumAllNum += +row.cells[j].innerHTML;
        sumWin.innerHTML = sumAllNum;
        sumClear.className = "sumClearClassActive";
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
  ///////////////////первый клик
  function oneTimeClicker() {
    // debugger
    if (k < 1) {
      table.append(tableRow);
      tableRow.append(tableCell);
      tableRow.insertCell(0).innerHTML = "<div class='delBtn'>&#215</div>";
      sumWin.innerHTML = tableCell.innerHTML;
      sumNumber += +tableCell.innerHTML;
      sumClear.className = "sumClearClassActive";
    }
    k++;
  }
  ///////////////////очистка окна суммы
  function clearSum() {
    sumWin.innerHTML = "000";
    sumClear.className = "sumClearClass";
    sumNumber = 0;
  }
  ///////////////////добавляем ячейку
  function rowQnty() {
    return table.rows.length;
  }

  function addCell() {
    if (k > 1) {
      let x = rowQnty();
      for (let i = 0; i < x; i++) {
        table.rows[i].insertCell(-1).innerHTML = randomInteger(1, 10);
      }
    }
  }
  ///////////////////добавляем ряд
  function cellQnty() {
    return table.rows[0].getElementsByTagName("td").length;
  }

  function addRowFn() {
    if (k > 1) {
      let c = cellQnty() - 1;
      let x = table.insertRow(-1);
      for (let i = 0; i < c; i++) {
        x.insertCell(-1).innerHTML = randomInteger(1, 10);
      }
      x.insertCell(0).innerHTML = "<div class='delBtn'>&#215</div>";
    }
  }

  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function diagColorer() {
    let rows = document.getElementsByTagName("table")[0].rows;
    let x = rowQnty();
    let y = cellQnty() - 1;
    if (x == y && x != 1 && y != 1) {
      for (let i = 0; i < rows.length; i++) {
        let row = table.rows[i];
        row.cells[i + 1].className = "diag";
      }
    } else {
      let rows = document.getElementsByTagName("table")[0].rows;
      for (let i = 0; i < rows.length; i++) {
        let row = table.rows[i];
        for (let j = 1; j < row.cells.length; j++) {
          row.cells[j].className = "";
        }
      }
    }
  }

  function delClassOn() {
    let rows = document.getElementsByTagName("table")[0].rows;
    let last = rows[rows.length - 1];
    let cell = last.cells[0];
    cell.className = "del";
    cell.onclick = removeBut;
  }
};
