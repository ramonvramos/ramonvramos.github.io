const menuBox = document.querySelector(".menu__box");
const menuContainer = document.querySelector(".menu__container");
const navbar = document.querySelector(".style__header");

// Mobile menu animation toggle
menuBox.addEventListener("click", (e) => {
  menuContainer.classList.toggle("active");
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
