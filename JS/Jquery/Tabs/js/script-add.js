"use strict";
$(document).ready(function () {
  let x = prompt("How many tabs You want?", 3);
  
  init();

  if (x == 1) {
    $(".tabs").append("<li class='current'>" + generateSomeText(9) + "</li>");
  } else if (x > 1) {
    // debugger
    for (let i = 0; i < x; i++) {
      $(".tabs").append("<li class=''>" + generateSomeText(9) + "</li>");
    }

    let firsttab = $(".tabs li:first-child");
    firsttab.addClass("current");
  }

  /* let but =  */
  $('<button />').html("add tab").click(function () {
    $(".tabs").append("<li class=''>" + generateSomeText(9) + "</li>");
    $("li").click(liClick);
  }).appendTo($("body"));

  $("li").click(liClick);

  function init() {
    let divWrap = $(`<div class="wrapper" />`)
    divWrap.appendTo($("body"))
    let ul = $(`<ul class="tabs" />`)
    ul.appendTo($(".wrapper"))
    let divCont = $(`<div class="content" />`)
    divCont.appendTo($(".wrapper"))
    $(".content").append("<p>" + generateSomeText(55) + "</p>" + "<p>" + generateSomeText(20) + "</p>" + "<p>" + generateSomeText(9) + "</p>");
  }

  function liClick() {
    $(".content").html("<p>" + generateSomeText(55) + "</p>" + "<p>" + generateSomeText(20) + "</p>" + "<p>" + generateSomeText(9) + "</p>");
    console.log('done');

    if ($(this).attr('class') != "current") {
      $("li").attr('class', '');
      $(this).attr('class', 'current');
    }
  }
//  random text generation
  function generateSomeText(n) {
    let length = n,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
})