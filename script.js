const openHamburger = document.querySelector("#menuHamburger");
const menu = document.querySelector("#menu");
const menuClose = document.querySelector("#menu-close")
const body = document.body;


openHamburger.addEventListener("click", event => {
    menu.style.display = "block";
    body.style.overflow = "hidden";

    menuClose.addEventListener("click", event => {
        event.preventDefault()
        menu.style.display = "none";
        body.style.overflow = "initial";
    });
});

