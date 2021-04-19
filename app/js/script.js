const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".mobilenavi");
const navTR = document.querySelector(".mobilenaviTR");
const mobilelogo = document.querySelector(".logo");

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

if (screen.width < 1481 && screen.width > 900 && screen.height > 1000) {
  if (screen.width < 500) {
    $(window).scroll(function () {
      $(".circle").css({
        "margin-top": -$(window).scrollTop() / 3 + "px",
        // "margin-left": -$(window).scrollLeft() / 5 + "px",
      });
    });
  }
  burger.addEventListener("click", () => {
    if (nav.style.left === "50%") {
      enableScrolling();
      nav.style.left = "150%";
      burger.innerHTML = `<i class="fas fa-bars"></i>`;
      mobilelogo.style.marginRight = "0px";
    } else {
      burger.innerHTML = `<i class="fas fa-times"></i>`;
      mobilelogo.style.marginRight = "5px";
      nav.style.left = "50%";
      disableScrolling();
    }
  });
}

if (screen.width <= 900) {
  $(window).scroll(function () {
    $(".circle").css({
      "margin-top": -$(window).scrollTop() / 2.3 + "px",
    });
  });
  if (screen.width < 500) {
    $(window).scroll(function () {
      $(".circle").css({
        "margin-top": -$(window).scrollTop() / 3 + "px",
        // "margin-left": -$(window).scrollLeft() / 5 + "px",
      });
    });
  }
  burger.addEventListener("click", () => {
    if (nav.style.left === "50%") {
      enableScrolling();
      nav.style.left = "150%";
      burger.innerHTML = `<i class="fas fa-bars"></i>`;
      mobilelogo.style.marginRight = "0px";
    } else {
      burger.innerHTML = `<i class="fas fa-times"></i>`;
      mobilelogo.style.marginRight = "5px";
      nav.style.left = "50%";
      disableScrolling();
    }
  });
}

if (screen.width < 380) {
  burger.addEventListener("click", () => {
    if (nav.style.left === "50%") {
      mobilelogo.style.marginRight = "0px";
    } else {
      mobilelogo.style.marginRight = "0px";
    }
  });
}

if (screen.width < 415 && screen.height < 740) {
  $(window).scroll(function () {
    $(".circle").css({
      "margin-top": -$(window).scrollTop() / 2.3 + "px",
    });
  });
}
if (screen.width < 350) {
  $(window).scroll(function () {
    $(".circle").css({
      "margin-top": -$(window).scrollTop() / 1.9 + "px",
    });
  });
}

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
