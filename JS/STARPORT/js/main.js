$('#first-section .btn-scroll').on('click', function () {
  $('html, body').animate({
    scrollTop: $('#second-section').offset().top
  }, 'slow');
  return false;
});
$('.entry-requirements, #second-section .btn-scroll').on('click', function () {
  $('html, body').animate({
    scrollTop: $('#third-section').offset().top
  }, 'slow');
  //return false;
});

$('.future_date').countdowntimer({
  dateAndTime: "2021/04/01 11:11:11",
  labelsFormat: true,
  displayFormat: "DHMS",
  padZeroes: false,
  timeZone: -5,
  // beforeExpiryTime : "00:00:00:10",
  // beforeExpiryTimeFunction :  beforeExpiryFunc,
  // timeUp : timeIsUp,
  // expiryUrl : "https://google.co,"
});

function beforeExpiryFunc() {
  alert('Before');
}

function timeIsUp() {
  alert('Time is up!');
}

let moreText = document.getElementById("more");
let moreText1 = document.getElementById("more1");
let moreText2 = document.getElementById("more2");
moreText.style.display="none";
moreText1.style.display="none";
moreText2.style.display="none";

function showMore() {
  let btnText = document.getElementById("myBtn"); 

  if (moreText.style.display === "none") {
    btnText.innerHTML = "COLLAPSE";
    moreText.style.display = "block";
  } else {
    btnText.innerHTML = "PACK DETAILS";
    moreText.style.display = "none";
  }
}

function showMore1() {
  let btnText1 = document.getElementById("myBtn1");

  if (moreText1.style.display === "none") {
    btnText1.innerHTML = "COLLAPSE";
    moreText1.style.display = "block";
  } else {
    btnText1.innerHTML = "PACK DETAILS";
    moreText1.style.display = "none";
  }
}

function showMore2() {  
  let btnText2 = document.getElementById("myBtn2");

  if (moreText2.style.display === "none") {
    btnText2.innerHTML = "COLLAPSE";
    moreText2.style.display = "block";
  } else {
    btnText2.innerHTML = "PACK DETAILS";
    moreText2.style.display = "none";
  }
}