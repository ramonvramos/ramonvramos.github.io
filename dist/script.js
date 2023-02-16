const menuBox = document.querySelector(".menu__box");
const mobileNav = document.querySelector(".mobile__menu");
const darkBG = document.querySelector(".page__background");
const menuContainer = document.querySelector(".menu__container");
const navbar = document.querySelector(".style__header");
const body = document.querySelector("body");

// Mobile menu animation toggle
menuBox.addEventListener("click", (e) => {
  menuContainer.classList.toggle("active");
  mobileNav.classList.toggle("active");
  darkBG.classList.toggle("active");
  body.classList.toggle("toHide");
});

darkBG.addEventListener("click", (e) => {
  menuContainer.classList.remove("active");
  mobileNav.classList.remove("active");
  darkBG.classList.remove("active");
  body.classList.remove("toHide");
});
// navbar animation slide up
let previousScroll = window.pageYOffset;
window.onscroll = function () {
  const currentScroll = window.pageYOffset;

  if (currentScroll == 0) {
    navbar.classList.remove("active");
    navbar.style.height = "100px";
  } else if (previousScroll > currentScroll) {
    navbar.style.height = "70px";
    navbar.style.top = "0";
    navbar.classList.add("active");
  } else {
    navbar.style.top = "-100px";
  }
  previousScroll = currentScroll;
};
