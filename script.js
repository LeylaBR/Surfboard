const openHamburger = $("#menuHamburger");
const menu = $("#menu");
const menuClose = $("#menu-close");
const menuAppearing = $(".hamburger__menu-link");
const body = $("body");

console.log(menuAppearing);

$(document).ready(() => {
  openHamburger.on("click", (e) => {
    menu.css("display", "block");
    body.css("overflow", "hidden");
  });

  menuClose.on("click", (e) => {
    e.preventDefault();
    menu.css("display", "none");
    body.css("overflow", "initial");
  });

  menuAppearing.each((_, link) => {
    $(link).on("click", (e) => {
      e.preventDefault();
      menu.css("display", "none");
      body.css("overflow", "initial");
    });
  });
});
