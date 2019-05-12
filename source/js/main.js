var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__button');

// var order = document.querySelector('.button-js');
// var popup = document.querySelector('.modal');
// var close = popup.querySelector('.close');

navMain.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});

// order.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   console.log('Click');
//   popup.classList.toggle('modal--closed');
// });


// for (var i = 0; i < order.length; i++) {
//   var activeBtn = order[i];

//   activeBtn.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     popup.classList.toggle('modal--closed');
//   });
// }

// close.addEventListener('click', function(evt) {
//   evt.preventDefault();
//   popup.classList.add('modal--closed');
// });
