  "use strict";
  window.onload = function () {

      function ce(name = "div", text, className, event, fn) {
          let elem = document.createElement(name);
          className != undefined ? elem.className = className : null;
          text != undefined ? elem.innerHTML = text : null;
          event != undefined ? elem.addEventListener(event, fn) : null
          return elem;
      }


      let mainTask = ce("p", 'Напишите программу, которая вводит с клавиатуры непустой массив целых чисел, и выводит число локальных максимумов (элемент является локальным максимумом, если он не имеет соседей, больших, чем он сам)', );
      document.body.prepend(mainTask);

      let box = ce("div", undefined, "box", );
      document.body.append(box);

      let form = document.querySelector(`form[name="auth"]`);
      form.elements[0].focus();

      form.addEventListener("submit", (e) => {
          e.preventDefault();
          let strText = form.elements[0].value.trim();

          if (strText.length == 0) {
              box.innerHTML = `<b><font size="13" color="red">Массив пустой!</font></b>`
          } else {
              var arr = strText.split(' ');
              check();

              function check() {
                  if (arr.length == 1 && !isNaN(arr[0]) || arr.length == 2 && !isNaN(arr[0]) && !isNaN(arr[1])) {
                      box.innerHTML = `Получен массив менее 3 элементов. 
                                Первый и последний элементы массива не считаются пиками, потому что в контексте математической функции мы не знаем, что предшествует или следует за ними, и поэтому не может определить, являются ли они пиками или нет. Тоже самое касается и масива с одним и двумя элементом.`;
                  } else if (arr.length == 1 && isNaN(arr[0])) {
                      box.innerHTML = `<b><font size="13" color="red">Введено не число!</font></b>`;
                  } else {
                      let maxes = []
                      arr = arr.map(Number);
                      console.log(arr);
                      let swch = true;
                      for (var i = 0; i < arr.length; i++) {
                          if (isNaN(arr[i])) {
                              box.innerHTML = `<b><font size="13" color="red">Введено не число!</font></b>`;
                              swch = false;
                          }
                      }
                      if (swch) {
                          for (var i = 1; i < arr.length - 1; ++i) {
                              if ((+arr[i - 1] < +arr[i]) && (+arr[i] > +arr[i + 1])) {
                                  console.log(+arr[i]);
                                  maxes.push(arr[i]);

                                  box.innerHTML = `Локальные максимумы: <b><font color="blue">${maxes.join(', ')}</font></b>. 
                                Первый и последний элементы массива не считаются пиками, потому что в контексте математической функции мы не знаем, что предшествует или следует за ними, и поэтому не может определить, являются ли они пиками или нет. Тоже самое касается и масива с одним элементом.`;
                                  console.error(maxes);
                              } else if (maxes.length == 0) {
                                  box.innerHTML = `Локальных максимумов не найдено.
                                  Первый и последний элементы массива не считаются пиками, потому что в контексте математической функции мы не знаем, что предшествует или следует за ними, и поэтому не может определить, являются ли они пиками или нет. Тоже самое касается и масива с одним элементом.`;
                                  console.log(maxes);
                              }
                          }
                      }
                  }
              }
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