"use strict";
window.onload = function () {
  let td = document.getElementsByTagName("td");
  let rSum = 0;
  for (var i = 0; i < td.length; i++) {
    if ((i + 1) % 5 == 0) {
      null;
    } else {
      rSum += +td[i].innerHTML;
      td[i].onclick = tdClicker;
      td[i].oncontextmenu = tdRightClicker;
      td[i].innerHTML = rI(1, 9);
    }
  }
  diagSum();
  // debugger;
  rowSum();

  function diagSum() {
    let table = document.body.firstElementChild;
    let dSum = 0;
    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      dSum += +row.cells[i].innerHTML;
    }
    sumDiag.innerHTML = "Sum of main diag: " + dSum;
  }

  function rowSum() {
    //debugger;
    let table = document.body.firstElementChild;
    let rSum = 0;
    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      for (let j = 0; j < row.cells.length - 1; j++) {
        rSum += +row.cells[j].innerHTML;
        if (j == 3) {
          row.cells[4].innerHTML = rSum;
          rSum = 0;
        }
      }
    }
  }

  let Summ = 0;

  function tdClicker() {
    let x = this.innerHTML;
    if (this.className == "active") {
      this.className = "";
      Summ += -x;
      sum.innerHTML = "Sum of selected cells: " + Summ;
    } else {
      this.className = "active";
      Summ += +x;
      sum.innerHTML = "Sum of selected cells: " + Summ;
    }
  }

  function tdRightClicker() {
    let x = +this.innerHTML;

    this.innerHTML = rI(1, 9);
    let y = +this.innerHTML;

    if (this.className == "active") {
      Summ += -x + y;
      sum.innerHTML = "Sum of selected cells: " + Summ;
    } else {
      this.innerHTML = rI(1, 9);
    }
    diagSum();
    rowSum();
  }

  function rI(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
};
