"use strict";
window.onload = function () {

  let registration = [
    ["login", /^[a-zA-z0-9._-]{5,15}$/, "Please enter 5-15 symbols"]
  ];
  let form = document.querySelector(`form[name="auth"]`);

  function setCookie1(visits) {
    /* Счетчик числа посещений с указанием даты последнего посещения
           и определением срока хранения в 1 год. */
    var expireDate = new Date();
    var today = new Date();
    // Установка даты истечения срока хранения.
    expireDate.setDate(365 + expireDate.getDate());
    // Сохранение числа посещений.
    document.cookie =
      "visits=" + visits + "; expires=" + expireDate.toString() + ";";
    // Сохранение настоящей даты как времени последнего посещения.
    document.cookie =
      "LastVisit=" +
      escape(today.toString()) +
      "; expires=" +
      expireDate.toString() +
      ";";
  }


  if ("" == document.cookie) {
    // Инициализация cookie.
    if (checkCookie("name")) {
      setCookie1(1);
    }
  } else {
    var cookies = parseCookie();
    // Вывод приветствия, числа посещений и увеличение числа посещений на 1.
    isNaN(cookies.visits) ? (cookies.visits = 1) : null;
    let div1 = CreateElement("div", "visits: " + cookies.visits++, "vis1");
    document.body.prepend(div1);
    // Вывод даты последнего посещения.
    if (cookies.LastVisit != undefined) {
      let div2 = CreateElement("div", "last visit: " + cookies.LastVisit, "vis");
      document.body.prepend(div2);
    }
    // Обновление cookie.
    setCookie1(isNaN(cookies.visits) ? 1 : cookies.visits);
  }

  if (checkCookie("name")) {
    form.remove();
    let timePass = new Date().getHours();
    let hello;

    timePass >= 0 && timePass <= 6 ? (hello = "Goodnight,") : null;
    timePass > 6 && timePass <= 12 ? (hello = "Good morning,") : null;
    timePass > 12 && timePass <= 18 ? (hello = "Good day,") : null;
    timePass > 18 && timePass <= 23 ? (hello = "Good evening,") : null;
    document.body.style.backgroundColor = "#00ffcf3d";
    let div = CreateElement(
      "div",
      `${hello} ${getCookie(2)} from ${getCookie(6)}!`,
      "hello"
    );

    let exit = CreateElement("button", `exit`, null, "click", exitFn);
    document.body.append(div);
    document.body.append(exit);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = [];
    let flag = false;
    let city = form.querySelector(`[name="city"] > option:checked`).value;
    let login = form.querySelector(`[name="login"]`);
    data.push(validate(login) ? removeError(login) : setError(login));
    data.push(city);
    let remmemberCheck = form.getElementsByClassName(`check`);
    for (let index = 0; index < remmemberCheck.length; index++) {
      if (remmemberCheck[index].checked) {
        flag = true;
      }
    }

    if (!globalError() && flag) {
      setCookie("name", data[0], 60);
      setCookie("city", data[1], 60);

      location.reload(true);
      console.log(data);
    } else if (!globalError()) {
      let qustion = confirm(`Do you want to remember your data?`);
      if (qustion == true) {
        setCookie("name", data[0], 60);
        setCookie("city", data[1], 60);
        location.reload(true);
        console.log(data);
      } else {
        alert("Page reloaded, all data are cleared.");
        location.reload(true);
      }
    }
  });

  function parseCookie() {
    // Разделение cookie
    var cookieList = document.cookie.split("; ");
    // Массив для каждого cookie в cookieList
    var cookieArray = new Array();
    for (var i = 0; i < cookieList.length; i++) {
      // Разделение пар имя-значение.
      var name = cookieList[i].split("=");
      // Декодирование и добавление в cookie-массив.
      cookieArray[unescape(name[0])] = unescape(name[1]);
    }
    return cookieArray;
  }

  function checkCookie(name) {
    return document.cookie.indexOf(name) != -1 ? true : false;
  }

  function setCookie(name, val, time) {
    document.cookie = `${name}=${val};max-age=${time * 60}`;
    var expireDate = new Date();

    expireDate.setDate(365 + expireDate.getDate());
    expireDate.setDate(365 + expireDate.getDate());
  }

  function getCookie(n) {
    return document.cookie.split(/(=|;)/)[n];
  }

  function exitFn() {
    setCookie("name", "", -1);
    setCookie("city", "", -1);
    setCookie("count1", "", -1);
    setCookie("visits", "", -1);
    setCookie("LastVisit", "", -1);
    location.reload(true);
  }
  ///////////////////////////////////////////////////////////////////////////////

  function CreateElement(name = "div", text, className, event, fn) {
    let elem = document.createElement(name);
    className != undefined ? (elem.className = className) : null;
    text != undefined ? (elem.innerHTML = text) : null;
    event != undefined ? elem.addEventListener(event, fn) : null;
    return elem;
  }

  function validate(node) {
    let valid = false;
    registration.forEach((item, i) => {
      if (item[0] == node.name && item[1].test(node.value)) {
        valid = true;
        return true;
      }
    });
    return valid;
  }

  function getErrorMessage(node) {
    let message = null;
    registration.forEach((item, i) => {
      if (item[0] == node.name) {
        message = item[2];
        return true;
      }
    });
    return message;
  }

  function globalError() {
    return document.querySelector(".error") != null ? true : false;
  }

  function setError(node) {
    if (node.nextElementSibling == null) {
      node.classList.add("error");
      node.parentElement.append(CreateElement("span", getErrorMessage(node)));
    }
  }

  function removeError(node) {
    if (node.nextElementSibling != null) {
      node.classList.remove("error");
      node.nextElementSibling.remove();
    }
    return node.value;
  }


};