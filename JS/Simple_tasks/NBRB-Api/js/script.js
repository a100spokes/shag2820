"use strict";
window.onload = function () {    

    let xhr2 = new XMLHttpRequest();
    xhr2.open("GET", " https://www.nbrb.by/api/exrates/rates?periodicity=0", true);    
    xhr2.send();
    xhr2.onload = function () {

        let Curency = JSON.parse(xhr2.response);        
        let form = document.querySelector(`form[name="auth"]`);
        let cashName = document.getElementById("curName");
        let cashCol = document.getElementById("curCol");
        let costCur = document.getElementById("costWin");
        costCur.innerHTML = Curency[0].Cur_OfficialRate;
        cashName.innerHTML = Curency[0].Cur_Name;
        cashCol.innerHTML = Curency[0].Cur_Scale;

        let moneyElem = form.elements.cash;
        moneyElem.onchange = counter;

        function counter() {
            let cashNumber = form.querySelector(`[name="cash"] > option:checked`).value;
            costCur.innerHTML = Curency[cashNumber].Cur_OfficialRate;
            cashName.innerHTML = Curency[cashNumber].Cur_Name;
            cashCol.innerHTML = Curency[cashNumber].Cur_Scale;
        }
    }

}