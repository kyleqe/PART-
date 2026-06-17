/*  Mobile Navigation Toggle */
const navToggle = document.querySelector(".navToggle");
const navLinks  = document.querySelector(".navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
    navToggle.classList.toggle("open");
  });

  // Close the mobile menu once a link is tapped
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
    });
  });
}

function showFieldError(input, message) {
  const formGroup = input.closest(".formGroup");
  if (!formGroup) return;
  let errorEl = formGroup.querySelector(".fieldError");
  if (!errorEl) {
    errorEl = document.createElement("span");
    errorEl.className = "fieldError";
    formGroup.appendChild(errorEl);
  }
  errorEl.textContent = message;
  input.classList.add("inputError");
}

function clearFieldError(input) {
  const formGroup = input.closest(".formGroup");
  if (!formGroup) return;
  const errorEl = formGroup.querySelector(".fieldError");
  if (errorEl) errorEl.textContent = "";
  input.classList.remove("inputError");
}

function isValidEmail(value) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
}