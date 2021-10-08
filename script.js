const openHamburger = document.querySelector("#menuHamburger");
const menu = document.querySelector("#menu");
const menuClose = document.querySelector("#menu-close");
const menuAppearing = document.querySelectorAll(".hamburger__menu-link");
const body = document.querySelector("body");

const setStyles = (menuStyle, bodyStyle) => {
  menu.style.display = menuStyle;
  body.style.overflow = bodyStyle;
};

openHamburger.addEventListener("click", (e) => {
  setStyles("block", "hidden");
});

menuClose.addEventListener("click", (e) => {
  setStyles("none", "initial");
});

menuAppearing.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    setStyles("none", "initial");
  });
});





