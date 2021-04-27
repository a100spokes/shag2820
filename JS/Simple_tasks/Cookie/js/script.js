"use strict";
window.onload = function () {
  let re = [["login", /^[a-zA-z0-9._-]{5,15}$/, "Please enter 5-15 symbols"]];

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
      /* let div1 = ce("div", `визитов: 0`, "vis");
            document.body.append(div1); */
      //  document.write("<H3>Поздравляю Вас с первым посещением моего сайта.</H3>");
    }
  } else {
    var cookies = parseCookie();
    // Вывод приветствия, числа посещений и увеличение числа посещений на 1.
    isNaN(cookies.visits) ? (cookies.visits = 1) : null;
    let div1 = ce("div", "visits: " + cookies.visits++, "vis1");
    document.body.prepend(div1);
    //    document.write("<H4>Мы снова рады видеть Вас на моем сайте! Число лично ваших посещений - " +
    //       cookies.visits++ + " !</H4>");
    // Вывод даты последнего посещения.
    if (cookies.LastVisit != undefined) {
      let div2 = ce("div", "last visit: " + cookies.LastVisit, "vis");
      document.body.prepend(div2);
    }
    //    document.write("<H4>Последний раз Вы были у меня на сайте: " + cookies.LastVisit + ".</H4>");
    // Обновление cookie.
    setCookie1(isNaN(cookies.visits) ? 1 : cookies.visits);
  }

  if (checkCookie("name")) {
    form.remove();
    let timePass = new Date().getHours();
    let hello;
    // console.log(timePass);
    timePass >= 0 && timePass <= 6 ? (hello = "Доброй ночи,") : null;
    timePass > 6 && timePass <= 12 ? (hello = "Доброго утра,") : null;
    timePass > 12 && timePass <= 18 ? (hello = "Добрый день,") : null;
    timePass > 18 && timePass <= 23 ? (hello = "Добрый вечер,") : null;
    document.body.style.backgroundColor = "#00ffcf3d";
    let div = ce(
      "div",
      `${hello} ${getCookie(/* "name" ,*/ 2)} с города ${getCookie(6)}!`,
      "hello"
    );
    // let div1 = ce("div", `визитов: ${getCookie(10)}`, "vis");
    // let div2 = ce("div", `Последнее посещение:${count2}`, "vis");
    let exit = ce("button", `Выход`, null, "click", exitFn);
    document.body.append(div);
    document.body.append(exit);
    // document.body.append(div1);
    // document.body.append(div2);
    // alert(1)
  }
  //let form = document.forms.auth;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = [];
    let flag = false;
    let city = form.querySelector(`[name="city"] > option:checked`).value;
    let countDat = 0;
    let login = form.querySelector(`[name="login"]`);
    data.push(validate(login) ? removeError(login) : setError(login));
    data.push(city);
    // data.push(countDat);
    let tech = form.getElementsByClassName(`check`);
    for (let index = 0; index < tech.length; index++) {
      if (tech[index].checked) {
        flag = true;
      }
    }

    if (!globalError() && flag) {
      setCookie("name", data[0], 60);
      setCookie("city", data[1], 60);
      // setCookie("count1", data[2], 60);
      location.reload(true);
      console.log(data);
    } else if (!globalError()) {
      let qustion = confirm(`Запомнить данные?`);
      if (qustion == true) {
        setCookie("name", data[0], 60);
        setCookie("city", data[1], 60);
        // setCookie("count1", data[2], 60);
        location.reload(true);
        console.log(data);
      } else {
        alert("Страница перезагружена, данные не сохранены.");
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
    var today = new Date();
    expireDate.setDate(365 + expireDate.getDate());
    expireDate.setDate(365 + expireDate.getDate());
  }

  function getCookie(/* name, */ n) {
    //update !!!!!
    // return document.cookie.split("=")[n];
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
  ///////////////////////////////////////////////////////////////////////////////
  function ce(name = "div", text, className, event, fn) {
    let elem = document.createElement(name);
    className != undefined ? (elem.className = className) : null;
    text != undefined ? (elem.innerHTML = text) : null;
    event != undefined ? elem.addEventListener(event, fn) : null;
    return elem;
  }

  function validate(node) {
    let valid = false;
    re.forEach((item, i) => {
      if (item[0] == node.name && item[1].test(node.value)) {
        valid = true;
        return true;
      }
    });
    return valid;
  }

  function getErrorMessage(node) {
    let message = null;
    re.forEach((item, i) => {
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
      node.parentElement.append(ce("span", getErrorMessage(node)));
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
