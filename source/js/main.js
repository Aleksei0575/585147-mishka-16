var navMain = document.querySelector(".main-navigation");
var navToggle = document.querySelector(".main-navigation__button");

navMain.classList.remove("main-navigation--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-navigation--closed")) {
    navMain.classList.remove("main-navigation--closed");
    navMain.classList.add("main-navigation--opened");
  } else {
    navMain.classList.add("main-navigation--closed");
    navMain.classList.remove("main-navigation--opened");
  }
});


var byLink = document.querySelectorAll(".button-js");
var popup = document.querySelector(".modal--closed");
var byClosed = popup.querySelector(".close");

for (var i = 0; i < byLink.length; i++) {
  var activeBtn = byLink[i];

  activeBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal--closed");
  });
}

byClosed.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal--closed");
});
