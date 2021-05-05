"use strict";
window.onload = function () {
  let img = document.getElementById("gallery_list").getElementsByTagName("img");
  let main_image = document.getElementById("gallery_main_image");
  main_image.addEventListener("wheel", wheelFn);
  main_image.addEventListener("mousewheel", wheelFn);
  main_image.addEventListener("DOMMouseScroll", wheelFn);
  let full_scr = document.getElementById("gallery_FulScr");
  init(img[0]);
  let modShow = document.getElementById("modShow");
  let modWin = document.getElementById("modWin");
  modWin.addEventListener("wheel", wheelFn);
  modWin.addEventListener("mousewheel", wheelFn);
  modWin.addEventListener("DOMMouseScroll", wheelFn);
  let k = 1;

  modShow.onclick = function () {
    modWin.style.display = "block";
  };

  clsBtn.onclick = function () {
    modWin.style.display = "none";
  };

  for (var i = 0; i < img.length; i++) {
    img[i].onclick = imgCliker;
  }

  function imgCliker() {
    init(this);
  }

  function init(element) {
    let active_image = document
      .getElementById("gallery_list")
      .getElementsByClassName("active");

    if (active_image[0] != undefined) {
      active_image[0].removeAttribute("class");
    }

    main_image.src = element.getAttribute("data-src-orig");
    element.className = "active";
    full_scr.src = element.getAttribute("data-src-fs");

    let text_box = document.getElementsByClassName("main")[0].children[1];
    if (element.hasAttribute("alt")) {
      text_box.innerHTML = element.getAttribute("alt");
      text_box.className = "active";
    } else {
      text_box.removeAttribute("class");
    }
  }

  /* The flag that determines whether the wheel event is supported. */
  var supportsWheel = false;
  /* The function that will run when the events are triggered. */

  function wheelFn(e) {
    let active_image = document.getElementsByTagName("img");
    /* Check whether the wheel event is supported. */
    if (e.type == "wheel") supportsWheel = true;
    else if (supportsWheel) return;
    /* Determine the direction of the scroll (< 0 → up, > 0 → down). */
    var delta = (e.deltaY || -e.wheelDelta || e.detail) >> 10 || 1;
    /* ... */
    if (delta > 0) {
      // debugger
      if (k > 1) {
        let path = img[k - 2].getAttribute("data-src-orig");
        let pathFs = img[k - 2].getAttribute("data-src-fs");
        k--;
        main_image.src = path;
        full_scr.src = pathFs;
        for (i = 0; i < img.length; i++) {
          img[i].className = "";
        }
        img[k - 1].className = "active";
      }
    } else {
      if (k < active_image.length - 2) {
        let path = img[k].getAttribute("data-src-orig");
        let pathFs = img[k].getAttribute("data-src-fs");
        k++;
        main_image.src = path;
        full_scr.src = pathFs;
        for (i = 0; i < img.length; i++) {
          img[i].className = "";
        }
        img[k - 1].className = "active";
      }
    }
  }
};
