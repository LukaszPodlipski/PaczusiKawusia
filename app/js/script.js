const burger = document.querySelector(".hamburger");
const nav = document.getElementById("mobilenavi");
const mobilelogo = document.querySelector(".logo");
///////////////////////////////////////////////////////////////////////////////////////////////////

burger.addEventListener("click", () => {
  if (screen.width <= 320) {
    if (nav.style.left === "50%") {
      mobilelogo.style.marginRight = "0px";
      enableScrolling();
      nav.style.left = "150%";
      burger.innerHTML = `<i class="fas fa-bars"></i>`;
      mobilelogo.style.marginRight = "0px";
    } else {
      mobilelogo.style.marginRight = "0px";
      burger.innerHTML = `<i class="fas fa-times"></i>`;
      mobilelogo.style.marginRight = "0px";
      nav.style.left = "50%";
      disableScrolling();
    }
  } else if (screen.width < 380) {
    if (nav.style.left === "50%") {
      mobilelogo.style.marginRight = "0px";
      enableScrolling();
      nav.style.left = "150%";
      burger.innerHTML = `<i class="fas fa-bars"></i>`;
      mobilelogo.style.marginRight = "0px";
    } else {
      mobilelogo.style.marginRight = "0px";
      burger.innerHTML = `<i class="fas fa-times"></i>`;
      mobilelogo.style.marginRight = "5px";
      nav.style.left = "50%";
      disableScrolling();
    }
  } else if (screen.width < 900) {
    if (nav.style.left === "50%") {
      enableScrolling();
      nav.style.left = "150%";
      burger.innerHTML = `<i class="fas fa-bars"></i>`;
      mobilelogo.style.marginRight = "0px";
    } else {
      burger.innerHTML = `<i class="fas fa-times"></i>`;
      mobilelogo.style.marginRight = "10px";
      nav.style.left = "50%";
      disableScrolling();
    }
  } else {
    if (nav.style.left === "50%") {
      enableScrolling();
      nav.style.left = "150%";
      burger.innerHTML = `<i class="fas fa-bars"></i>`;
      mobilelogo.style.marginRight = "0px";
    } else {
      burger.innerHTML = `<i class="fas fa-times"></i>`;
      mobilelogo.style.marginRight = "10px";
      nav.style.left = "50%";
      disableScrolling();
    }
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////

if (screen.width <= 900) {
  $(window).scroll(function () {
    $(".circle").css({
      "margin-top": -$(window).scrollTop() / 2.3 + "px",
    });
  });
}
/////////////////////////////////

if (screen.width < 500 && screen.width > 414) {
  $(window).scroll(function () {
    $(".circle").css({
      "margin-top": -$(window).scrollTop() / 3 + "px",
      // "margin-left": -$(window).scrollLeft() / 5 + "px",
    });
    $(".circleTR").css({
      "margin-top": -$(window).scrollTop() / 2.6 + "px",
      // "margin-left": -$(window).scrollLeft() / 5 + "px",
    });
  });
}
/////////////////////////////////
if (screen.width < 415 && screen.width > 375) {
  $(window).scroll(function () {
    $(".circleTR").css({
      "margin-top": -$(window).scrollTop() / 2 + "px",
      // "margin-left": -$(window).scrollLeft() / 5 + "px",
    });
  });
}
/////////////////////////////////
if (screen.width < 376 && screen.height > 700) {
  $(window).scroll(function () {
    $(".circleTR").css({
      "margin-top": -$(window).scrollTop() / 2.4 + "px",
      // "margin-left": -$(window).scrollLeft() / 5 + "px",
    });
  });
}
/////////////////////////////////
if (screen.width < 376 && screen.height < 700) {
  $(window).scroll(function () {
    $(".circleTR").css({
      "margin-top": -$(window).scrollTop() / 1.5 + "px",
      // "margin-left": -$(window).scrollLeft() / 5 + "px",
    });
  });
}
/////////////////////////////////
if (screen.width < 361) {
  $(window).scroll(function () {
    $(".circleTR").css({
      "margin-top": -$(window).scrollTop() / 1 + "px",
      // "margin-left": -$(window).scrollLeft() / 5 + "px",
    });
  });
}
/////////////////////////////////

if (screen.width < 415 && screen.width > 375 && screen.height < 740) {
  $(window).scroll(function () {
    $(".circle").css({
      "margin-top": -$(window).scrollTop() / 2.3 + "px",
    });
    $(".circleTR").css({
      "margin-top": -$(window).scrollTop() / 1.5 + "px",
      // "margin-left": -$(window).scrollLeft() / 5 + "px",
    });
  });
}
/////////////////////////////////

if (screen.width < 350) {
  $(window).scroll(function () {
    $(".circle").css({
      "margin-top": -$(window).scrollTop() / 1.9 + "px",
    });
  });
}
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function () {};
}
///////////////////////////////////////////////////////////////////////////////////////////////////
function slider(path) {
  document.querySelector(".mainimg").src = path;
}

function changeColors(color, color2, textContent) {
  const circle = document.querySelector(".circle");
  const boldtext = document.querySelector(".titleText h2 span");
  const description = document.querySelector(".description");
  const hamburger = document.querySelector(".fa-bars");
  const mobilenavi = document.querySelector(".mobilenavi");
  mobilenavi.style.color = color;
  hamburger.style.color = color;
  description.style.color = color2;
  description.textContent = textContent;
  boldtext.style.color = color;
  circle.style.backgroundColor = color;
}
///////////////////////////////////////////////////////////////////////////////////////////////////
