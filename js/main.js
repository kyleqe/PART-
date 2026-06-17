/*  Mobile Navigation Toggle */
const navToggle = document.querySelector(".navToggle");
const navLinks  = document.querySelector(".navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
    navToggle.classList.toggle("open");
  });
}