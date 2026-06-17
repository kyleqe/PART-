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

function isValidPhone(value) {
  // SA formats: 082 000 0000 / 0820000000 / +27 82 000 0000
  const phonePattern = /^(\+27\s?\d{2}|0\d{2})[\s-]?\d{3}[\s-]?\d{4}$/;
  return phonePattern.test(value.trim());
}

function validateField(input) {
  const value = input.value.trim();
  const isRequired = input.hasAttribute("required");

  if (isRequired && value === "") {
    showFieldError(input, "This field is required.");
    return false;
  }

  if (input.type === "email" && value !== "" && !isValidEmail(value)) {
    showFieldError(input, "Please enter a valid email address.");
    return false;
  }

  if (input.type === "tel" && value !== "" && !isValidPhone(value)) {
    showFieldError(input, "Please enter a valid South African phone number, e.g. 082 000 0000.");
    return false;
  }

  if (input.tagName === "SELECT" && isRequired && value === "") {
    showFieldError(input, "Please make a selection.");
    return false;
  }

  clearFieldError(input);
  return true;
}