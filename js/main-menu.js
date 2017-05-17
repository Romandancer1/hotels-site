var overlay = document.querySelector(".overlay");
var closeBtn = document.querySelector(".menu__close-btn");
var menu = document.querySelector(".menu__list");
var menuBtn = document.querySelector(".header__menu");
var menuLinks = document.querySelectorAll(".menu__item-sprite");
var menuName = document.querySelectorAll(".menu__item-name");
var secondMenuList = document.querySelector(".second-navigation__list");
var secondMenuTitle = document.querySelector(".second-navigation__title");



menuBtn.addEventListener("click", function(e) {
  e.preventDefault();

  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].classList.add("menu__item-sprite-white");
    menuName[i].classList.add("color-white");
  }

  closeBtn.classList.add("show");
  overlay.classList.add("show");
  menu.classList.add("show");
});

closeBtn.addEventListener("click", function(e) {
  e.preventDefault();

  closeBtn.classList.remove("show");
  overlay.classList.remove("show");
  menu.classList.remove("show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  if(menu.classList.contains("show")) {
    closeBtn.classList.remove("show");
    overlay.classList.remove("show");
    menu.classList.remove("show");
  }
});
