
  var overlay = document.querySelector(".overlay");
  var closeBtn = document.querySelector(".menu__close-btn");
  var menu = document.querySelector(".menu__list");
  var menuBtn = document.querySelector(".header__menu");
  var menuLinks = document.querySelectorAll(".menu__item-sprite");
  var menuName = document.querySelectorAll(".menu__item-name");
  var secondMenuList = document.querySelector(".second-navigation__list");
  var secondMenuTitle = document.querySelector(".second-navigation__title");
  var secondMenuLink = document.querySelector(".second-navigation__title-link");

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


  window.onresize = function() {
    if(document.documentElement.clientWidth > 980) {
      closeBtn.classList.remove("show");
      overlay.classList.remove("show");
      menu.classList.remove("show");


      for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].classList.remove("menu__item-sprite-white");
        menuName[i].classList.remove("color-white");
      }
    }

    if(document.documentElement.clientWidth > 890) {
      secondMenuList.classList.remove("second-navigation__list--show");
    }


  };

  if(document.documentElement.clientWidth < 890) {
    secondMenuLink.removeAttribute("href");

  };


  secondMenuTitle.addEventListener("click", function(e) {
    if(secondMenuList.classList.contains("second-navigation__list--show")) {
      secondMenuList.classList.remove("second-navigation__list--show");
    } else {
      secondMenuList.classList.add("second-navigation__list--show");
    }
  });
