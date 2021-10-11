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
    // e.preventDefault();
    setStyles("none", "initial");
  });
});

const openDescription = $(".team__desc-info");

openDescription.each((_, link) => {
  $(link).on("click", (e) => {
    openDescription.each((_, elem) => {
      if (e.currentTarget !== elem) {
        $(elem).parent().removeClass("active");
      }
    });
    $(e.currentTarget).parent().toggleClass("active");
  });
});

const openReviews = $(".reviews__switcher-item");
const openItems = $(".reviews__item");

openReviews.each((_, link) => {
  $(link).on("click", (e) => {
    e.preventDefault();
    openReviews.each((index, elem) => {
      if ($(elem).hasClass("active")) {
        $(elem).removeClass("active");
        $(openItems[index]).removeClass("active");
      }
      if (elem === e.currentTarget) {
        $(elem).addClass("active");
        $(openItems[index]).addClass("active");
      }
    });
  });
});

const pointerLeft = $(".shop__pointer-left");
const pointerRight = $(".shop__pointer-right");

const slider = $(".shop__content-list").bxSlider({
  pager: false,
  controls: false,
});

pointerLeft.click((e) => {
  e.preventDefault();
  slider.goToPrevSlide();
});

pointerRight.click((e) => {
  e.preventDefault();
  slider.goToNextSlide();
});
