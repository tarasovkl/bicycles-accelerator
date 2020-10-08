"use strict";

(function () {
  var headerButton = document.querySelector(".header__inner-button");
  var headerButtonToggle = document.querySelector(".header__inner-block");
  var headerMenu = document.querySelector(".header__menu");
  var header = document.querySelector(".header");

  var hideMenu = function () {
    headerButton.classList.remove("header__inner-button--active");
    headerButtonToggle.classList.remove("header__inner-block--active");
    headerMenu.classList.remove("header__menu--active");
    header.style.marginTop = "0";
  };

  var toggleMenu = function (element, selector) {
    if (element.classList.contains(selector)) {
      element.classList.remove(selector);
    } else {
      element.classList.add(selector);
    }
  };

  hideMenu();

  headerButton.addEventListener("click", function () {
    toggleMenu(headerButton, "header__inner-button--active");
    toggleMenu(headerButtonToggle, "header__inner-block--active");
    toggleMenu(headerMenu, "header__menu--active");
    headerMenu.style.top = "0";
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
      headerButton.classList.remove("header__inner-button--active");
      headerButtonToggle.classList.remove("header__inner-block--active");
      headerMenu.classList.remove("header__menu--active");
    }
  });
})();
