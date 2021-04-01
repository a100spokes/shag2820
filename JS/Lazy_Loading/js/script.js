"use strict"

const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
const loadMapBlock = document.querySelector('._load-map');
const windowHeight = document.documentElement.clientHeight;
const loadMoreBlock = document.querySelector("._load-more");
// console.log(windowHeight);
let lazyImagesPosition = [];

if (lazyImages.length > 0) {
    lazyImages.forEach(img => {
        if (img.dataset.src || img.dataset.srcset) {
            lazyImagesPosition.push(img.getBoundingClientRect().top + pageYOffset);
            lazyScrollCheck();
        }
    });
}
// console.log(lazyImagesPosition);
window.addEventListener('scroll', lazyScroll);

function lazyScroll() {
    if (document.querySelectorAll('img[data-src], source[data-srcset]').length > 0) {
        lazyScrollCheck();
    }
    if (!loadMapBlock.classList.contains('_loaded')) {
        getMap();
    }
    if (!loadMoreBlock.classList.contains("_loading")) {
        loadMore();
    }
}

function lazyScrollCheck() {
    let imgIndex = lazyImagesPosition.findIndex(item => pageYOffset > item - windowHeight);
    if (imgIndex >= 0) {
        if (lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
            lazyImages[imgIndex].removeAttribute('data-src');
        } else if (lazyImages[imgIndex].dataset.srcset) {
            lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
            lazyImages[imgIndex].removeAttribute('data-srcset');
        }
        delete lazyImagesPosition[imgIndex];
    }
}

function getMap() {
    const loadMapBlockPosition = loadMapBlock.getBoundingClientRect().top + pageYOffset;
    if (pageYOffset > loadMapBlockPosition - windowHeight) {
        const loadMapUrl = loadMapBlock.dataset.map;
        if (loadMapUrl) {
            loadMapBlock.insertAdjacentHTML('beforeend',
                `<iframe src='${loadMapUrl}' style="border:0;" allowfullscreen="" loading="lazy">Your browser does not support iframe!</iframe>`
            );
            loadMapBlock.classList.add('_loaded');
        }
    }
}

function loadMore() {
    const loadMoreBlockPos = loadMoreBlock.getBoundingClientRect().top + pageYOffset;
    const loadMoreBlockHeight = loadMoreBlock.offsetHeight;

    if (pageYOffset > (loadMoreBlockPos + loadMoreBlockHeight) - windowHeight) {
        getContent();
    }
}

async function getContent() {
    if (!document.querySelector("._loading-icon")) {
        loadMoreBlock.insertAdjacentHTML("beforeend",
            `<div class="_loading-icon"></div>`
        );
    }
    loadMoreBlock.classList.add("_loading");

    let response = await fetch("more_data.html", {
        method: "GET",
    });
    if (response.ok) {
        let result = await response.text();
        loadMoreBlock.insertAdjacentHTML("beforeend", result);
        loadMoreBlock.classList.remove("_loading");

        if (document.querySelector("._loading-icon")) {
            document.querySelector("._loading-icon").remove();
        }
    } else {
        alert("ERROR");
    }
}