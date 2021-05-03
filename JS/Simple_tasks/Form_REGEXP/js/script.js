"use strict";
window.onload = function () {
  const mailRegExp = /(.by|.бел)$/g;
  const userNameRegExp = /^[а-яА-я]{2,15}$/;
  const userPassRegExp = /^[a-zA-z0-9]{6,15}$/;
  const userSite = /^([a-zA-Z]+):\/\//;
  const userTel = /^(\d{2}-\d{2}-\d{3}(-\d{2}){2})?$/;

  let count = document.getElementById("count");
  count.innerHTML = "0/20";

  let form = document.querySelector(`form[name="auth"]`);
  form.elements[0].focus();

  let tgBtn = document.getElementById("tgBtn");

  tgBtn.addEventListener("click", function () {
    let input = document.getElementById("show1");
    if (input.getAttribute("type") == "password") {
      input.removeAttribute("type");
      input.setAttribute("type", "text");
      tgBtn.className = "active";
    } else {
      input.removeAttribute("type");
      input.setAttribute("type", "password");
      tgBtn.className = "";
    }
  });

  let tgBtn1 = document.getElementById("tgBtn1");

  tgBtn1.addEventListener("click", function () {
    let input = document.getElementById("show2");
    if (input.getAttribute("type") == "password") {
      input.removeAttribute("type");
      input.setAttribute("type", "text");
      tgBtn1.className = "active";
    } else {
      input.removeAttribute("type");
      input.setAttribute("type", "password");
      tgBtn1.className = "";
    }
  });

  [...form.elements].forEach((item, i) => {
    if (item.name == "info")
      item.addEventListener("input", (e) => {
        if (e.target.value.length >= 20) {
          e.target.value = e.target.value.slice(0, 20);
          count.className = "red";
        } else {
          count.className = "";
        }
        count.innerHTML = `${e.target.value.length}/20`;
      });
  });

  form.addEventListener("submit", (e) => {
    // debugger
    e.preventDefault();
    let login = form.querySelector(`[name="login"]`);
    let password = form.querySelector(`[name="password"]`);
    let RePassword = form.querySelector(`[name="RePassword"]`);
    let mail = form.querySelector(`[name="email"]`);
    let tel = form.querySelector(`[name="tel"]`);
    let info = form.querySelector(`[name="info"]`);
    let siteUrl = form.querySelector(`[name="site"]`);
    let city = form.querySelector(`[name="city"] > option:checked`).value;
    let date = form.querySelector(`[name="date"]`);
    let date1 = form.querySelector(`[name="date"]`).value;
    let tech = form.getElementsByClassName(`check`);
    let checkboxesChecked = [];

    for (let index = 0; index < tech.length; index++) {
      if (tech[index].checked) {
        checkboxesChecked.push(tech[index].value);
      }
    }

    !login.value || login.value == " "
      ? (login.style.border = "2px solid red") && toolTP(login)
      : null;
    !password.value || !userPassRegExp.exec(password.value)
      ? (password.style.border = "2px solid red") && toolTP(password)
      : null;
    !RePassword.value
      ? (RePassword.style.border = "2px solid red") && toolTP(RePassword)
      : null;
    password.value != RePassword.value
      ? (RePassword.style.border = "2px solid red") && toolTP1(RePassword)
      : null;
    !info.value ? (info.style.border = "2px solid red") && toolTP(info) : null;
    !date.value ? (date.style.border = "2px solid red") && toolTP(date) : null;
    !userTel.exec(tel.value)
      ? (tel.style.border = "2px solid red") && toolTP(tel)
      : null;
    !userNameRegExp.exec(login.value)
      ? (login.style.border = "2px solid red") && toolTP(login)
      : null;
    !userSite.exec(siteUrl.value)
      ? (siteUrl.style.border = "2px solid red") && toolTP(siteUrl)
      : null;

    //////////////////////////////////////////////////////////////////////////////

    if (
      date.value &&
      mailRegExp.exec(mail.value) &&
      info.value &&
      password.value == RePassword.value &&
      RePassword.value &&
      password.value &&
      login.value &&
      userNameRegExp.exec(login.value) &&
      userTel.exec(tel.value) &&
      userPassRegExp.exec(password.value) &&
      userSite.exec(siteUrl.value)
    ) {
      mod();

      function mod() {
        let modWin = document.getElementById("modWin");
        modWin.style.display = "block";
      }
      clsBtn.onclick = function () {
        modWin.style.display = "none";
      };
      let cell = document.getElementsByTagName("td");
      cell[1].innerHTML = form.querySelector(`[name="login"]`).value;
      cell[3].innerHTML = form.querySelector(`[name="password"]`).value;
      cell[5].innerHTML = form.querySelector(`[name="RePassword"]`).value;
      cell[7].innerHTML = form.querySelector(`[name="site"]`).value;
      cell[9].innerHTML = form.querySelector(`[name="tel"]`).value;
      cell[11].innerHTML = form.querySelector(`[name="email"]`).value;
      cell[13].innerHTML = form.querySelector(`[name="info"]`).value;
      cell[15].innerHTML = form.querySelector(`[name="date"]`).value;
      cell[17].innerHTML = form.querySelector(
        `[name="city"] > option:checked`
      ).value;
      cell[19].innerHTML = checkboxesChecked;
    }

    if (!mailRegExp.exec(mail.value)) {
      mail.style.border = "2px solid red";
      toolTP(mail);
    }
  });

  function ce(name = "div", text, className, event, fn) {
    let elem = document.createElement(name);
    className != undefined ? (elem.className = className) : null;
    text != undefined ? (elem.innerHTML = text) : null;
    event != undefined ? elem.addEventListener(event, fn) : null;
    return elem;
  }

  function toolTP(x) {
    let tooltipElem;
    let tooltipHtml = x.dataset.tooltip;
    if (!tooltipHtml) return;
    // ...создадим элемент для подсказки
    tooltipElem = document.createElement("div");
    tooltipElem.className = "tooltip";
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);
    // спозиционируем его сверху от аннотируемого элемента (top-center)
    let coords = x.getBoundingClientRect();
    let left = coords.left + (x.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; // не заезжать за левый край окна
    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
      // если подсказка не помещается сверху, то отображать её снизу
      top = coords.top + x.offsetHeight + 5;
    }
    tooltipElem.style.left = left + "px";
    tooltipElem.style.top = top + "px";

    x.addEventListener("focus", function () {
      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
        x.style.border = "2px solid #b3c9ce";
      }
    });
  }

  function toolTP1(x) {
    let tooltipElem;
    let tooltipHtml = x.dataset.tooltip;
    if (!tooltipHtml) return;
    tooltipElem = document.createElement("div");
    tooltipElem.className = "tooltip";
    tooltipElem.innerHTML = "пароль должен совпадать";
    document.body.append(tooltipElem);
    let coords = x.getBoundingClientRect();
    let left = coords.left + (x.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;
    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
      top = coords.top + x.offsetHeight + 5;
    }
    tooltipElem.style.left = left + "px";
    tooltipElem.style.top = top + "px";

    x.addEventListener("focus", function () {
      if (tooltipElem) {
        tooltipElem.remove();
        x.style.border = "2px solid #b3c9ce";
      }
    });
  }
};
