"use strict";
$(document).ready(function () {

  let promise = fetch("js/data.json")

    .then(response => response.json())
    .then(imgArr => {
      let imgUrl = imgArr;

      let divWrap = $(`<div class="fotorama" data-nav="thumbs"   data-allowfullscreen="true" />`)
      divWrap.prependTo($("body"))

      let sc = $(`<script src="js/fotorama.js"></script>`)
      sc.prependTo($("body"))

      for (let key in imgUrl) {
        console.log(imgUrl[key].href);
        console.log(imgUrl[key].hrefFull);
        console.log(imgUrl[key].hrefThumb);
        divWrap.append(`<a href="${imgUrl[key].href}" data-full="${imgUrl[key].hrefFull}"><img src="${imgUrl[key].hrefThumb}"></a>`);

      }
    });
})