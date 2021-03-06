var navMain = document.querySelector(".main-navigation");
var navToggle = document.querySelector(".main-navigation__button");

var byLink = document.querySelectorAll(".button-js");
var popup = document.querySelector(".modal--closed");


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

if(byLink.length) {
  var byClosed = popup.querySelector(".close");
  for (var i = 0; i < byLink.length; i++) {
    var activeBtn = byLink[i];

    activeBtn("click", function(evt) {
      evt.preventDefault();
      popup.classList.toggle("modal--closed");
    });
  }

  byClosed.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal--closed");
  });
}
