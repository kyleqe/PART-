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

/*Highlight Active Page in Nav */
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const allNavLinks = document.querySelectorAll(".navLinks a");

allNavLinks.forEach(function (link) {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

/*Sticky Header Shadow on Scroll */
const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  });
}

/*Scroll Reveal Animation */
const revealTargets = document.querySelectorAll(
  ".card, .testimonial, .pricingCard, .stat, .faqItem, .contactCard"
);

if ("IntersectionObserver" in window && revealTargets.length > 0) {
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach(function (el) {
    el.classList.add("reveal-hidden");
    revealObserver.observe(el);
  });
}

/* lightbox gallery */

function initLightbox() {
  const galleryItems = document.querySelectorAll(".galleryItem");
  if (galleryItems.length === 0) return;
 
  const overlay = document.createElement("div");
  overlay.id = "lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Image viewer");
  overlay.innerHTML = `
    <button class="lb-close" aria-label="Close image viewer">&times;</button>
    <button class="lb-prev" aria-label="Previous image">&#8249;</button>
    <button class="lb-next" aria-label="Next image">&#8250;</button>
    <div class="lb-content">
      <img class="lb-img" src="" alt="" />
      <p class="lb-caption"></p>
    </div>
  `;
  document.body.appendChild(overlay);
 
  const lbImg     = overlay.querySelector(".lb-img");
  const lbCaption = overlay.querySelector(".lb-caption");
  const lbClose   = overlay.querySelector(".lb-close");
  const lbPrev    = overlay.querySelector(".lb-prev");
  const lbNext    = overlay.querySelector(".lb-next");
 
  let currentIndex = 0;
  const items = Array.from(galleryItems);
 
  function openLightbox(index) {
    currentIndex = index;
    const item = items[currentIndex];
    lbImg.src = item.dataset.src || item.querySelector("img").src;
    lbImg.alt = item.querySelector("img").alt || "";
    lbCaption.textContent = item.dataset.caption || "";
    overlay.classList.add("lb-open");
    document.body.style.overflow = "hidden";
    lbClose.focus();
  }
 
  function closeLightbox() {
    overlay.classList.remove("lb-open");
    document.body.style.overflow = "";
    items[currentIndex].querySelector("img").focus();
  }
 
  function showPrev() { currentIndex = (currentIndex - 1 + items.length) % items.length; openLightbox(currentIndex); }
  function showNext() { currentIndex = (currentIndex + 1) % items.length; openLightbox(currentIndex); }
 
  items.forEach(function (item, index) {
    item.addEventListener("click", function () { openLightbox(index); });
    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", "View image: " + (item.dataset.caption || ""));
    item.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") openLightbox(index);
    });
  });
 
  lbClose.addEventListener("click", closeLightbox);
  lbPrev.addEventListener("click", showPrev);
  lbNext.addEventListener("click", showNext);
 
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeLightbox();
  });
 
  document.addEventListener("keydown", function (e) {
    if (!overlay.classList.contains("lb-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
  });
}
 
initLightbox();
 
/* FORM VALIDATIOn */

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

function attachLiveValidation(form) {
  const fields = form.querySelectorAll("input, select, textarea");
  fields.forEach(function (field) {
    field.addEventListener("blur", function () {
      validateField(field);
    });
    field.addEventListener("input", function () {
      if (field.classList.contains("inputError")) {
        validateField(field);
      }
    });
  });
}

function showFormSuccess(form, message) {
  let successBox = form.querySelector(".formSuccess");
  if (!successBox) {
    successBox = document.createElement("div");
    successBox.className = "formSuccess";
    form.prepend(successBox);
  }
  successBox.textContent = message;
  successBox.style.display = "block";
  form.reset();

  form.querySelectorAll(".inputError").forEach(function (el) {
    el.classList.remove("inputError");
  });
  form.querySelectorAll(".fieldError").forEach(function (el) {
    el.textContent = "";
  });

  successBox.scrollIntoView({ behavior: "smooth", block: "center" });
}

function handleFormSubmit(form, successMessage) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fields = form.querySelectorAll("input, select, textarea");
    let isFormValid = true;

    fields.forEach(function (field) {
      const valid = validateField(field);
      if (!valid) isFormValid = false;
    });

    if (!isFormValid) {
      const firstError = form.querySelector(".inputError");
      if (firstError) firstError.focus();
      return;
    }
    showFormSuccess(form, successMessage);
  });
}

/*  validation onto the enquiry form */
const enquiryForm = document.querySelector("#enquiry-form");
if (enquiryForm) {
  attachLiveValidation(enquiryForm);
  submitFormAjax(
    enquiryForm,
    "https://formspree.io/f/xojzobwy",
    "Thanks! Your consultation request has been received. Kyle will be in touch within 24 hours."
  );
}

/*validation onto the contact form */
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  attachLiveValidation(contactForm);
  submitFormAjax(
    contactForm,
    "https://formspree.io/f/xeewbdrp",
   "Thanks for reaching out! Kyle will respond to your message within 24 hours."
  );
}