  "use strict";
  window.onload = function () {

      function ce(name = "div", text, className, event, fn) {
          let elem = document.createElement(name);
          className != undefined ? elem.className = className : null;
          text != undefined ? elem.innerHTML = text : null;
          event != undefined ? elem.addEventListener(event, fn) : null
          return elem;
      }

      function palindrome(str) {
          if (str.length == 0) {
              box.innerHTML = `<b><font size="13" color="blue">Строка пустая!</font></b>`
          } else {
              let normalized = str.toLowerCase().match(/[a-z а-я 1-9]/gi).reverse();
              return normalized.join('') === normalized.reverse().join('');
          }
      }

      let mainTask = ce("p",
          `Дана строка S.
      Определить, является ли она полиндромом.
      Замечание: полиндромом называются строки, которые одинаково читаются как слева-направо, так и справа-налево.
      
      `
      );
      document.body.prepend(mainTask);

      let box = ce("div", undefined, "box", );
      document.body.append(box);

      let form = document.querySelector(`form[name="auth"]`);
      form.elements[0].focus();

      form.addEventListener("submit", (e) => {
          e.preventDefault();
          let strText = form.elements[0].value.trim();          
          if (palindrome(strText) == true) {
              box.innerHTML = `<b><font size="13" color="green">Строка является полиндромом!</font></b>             `
          } else if (strText.length == 0) {
              box.innerHTML = `<b><font size="13" color="blue">Строка пустая!</font></b>`
          } else {
              box.innerHTML = `<b><font size="13" color="red">Строка не является полиндромом</font></b>
              `
          }         
      });
  }

































  // var arr = [];

  // function randomInteger(min, max) {
  //    получить случайное число от (min-0.5) до (max+0.5)
  // let rand = min - 0.5 + Math.random() * (max - min + 1);
  // return Math.round(rand);
  // }

  // var n = randomInteger(5, 15);
  // for (var i = 0; i < n; i++) {
  // arr.push(randomInteger(2, 8));
  // }



  // var Result_Arr = [arr[0]];
  // var Non_Max_arr = [arr[0]]
  // console.log("Наш массив: " + "\n\n" + arr.join(" | ") + "\n\n");
  //вывод массива
  // /* console.log(Result_Arr);
  // console.log(Non_Max_arr); */

  // for (i = 1; i < arr.length; i++) {

  // if (arr[i] >= arr[i - 1]) {
  // Non_Max_arr.push(arr[i]);
  // } else {

  // if (Non_Max_arr.length > Result_Arr.length) {

  // Result_Arr = Non_Max_arr;
  // }

  // Non_Max_arr = [arr[i]];
  // }
  // }



  // if (Non_Max_arr.length > Result_Arr.length) {

  // Result_Arr = Non_Max_arr;

  // }

  // console.log("Максимальная последовательность: " + "\n" + Result_Arr);