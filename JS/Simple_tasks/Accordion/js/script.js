"use strict";
window.onload = function() {

    let list = document.getElementsByTagName('dt');

    for (let i = 0; i < list.length; i++) {
        list[i].onclick = listClicker;
    }

    function listClicker() {
        // debugger
        if (this.className != "active") {
            for (let i = 0; i < list.length; i++) {
                list[i].className = "";
                list[i].nextElementSibling.className = "";
            }
            this.className = "active";
            this.nextElementSibling.className = "active";
        } else {
            this.className = "";
            this.nextElementSibling.className = "";
        }

    }
}

