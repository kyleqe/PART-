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

 /* site-wide search */

const searchIndex = [
  { title: "Homepage", page: "index.html", section: "", keywords: "home personal training cape town kh training" },
  { title: "Book a Free Consultation", page: "enquiry.html", section: "", keywords: "book free consultation session kyle" },
  { title: "What We Offer", page: "index.html", section: "#offer", keywords: "services offer training bootcamp online coaching" },
  { title: "Client Testimonials", page: "index.html", section: "#testimonials", keywords: "testimonials reviews clients results" },
  { title: "About Kyle Hove", page: "about.html", section: "", keywords: "about kyle hove coach founder story" },
  { title: "Coaching Philosophy", page: "about.html", section: "#philosophy", keywords: "philosophy personalisation progressive overload mindset" },
  { title: "Qualifications", page: "about.html", section: "#qualifications", keywords: "qualifications certifications repssa precision nutrition trx" },
  { title: "Kyle's Gallery", page: "about.html", section: "#gallery", keywords: "gallery photos studio training camps bay" },
  { title: "Services and Pricing", page: "services.html", section: "", keywords: "services pricing packages rates" },
  { title: "1-on-1 Personal Training", page: "services.html", section: "", keywords: "personal training one on one studio green point r650" },
  { title: "Group Bootcamps", page: "services.html", section: "", keywords: "bootcamp group camps bay outdoor r250" },
  { title: "Online Coaching", page: "services.html", section: "", keywords: "online coaching remote 12 week r1500" },
  { title: "Nutrition Guidance", page: "services.html", section: "", keywords: "nutrition guidance meal plan macros" },
  { title: "Corporate Wellness", page: "services.html", section: "", keywords: "corporate wellness team workplace r3500" },
  { title: "FAQ", page: "services.html", section: "#faq", keywords: "faq questions experience results cancel reschedule" },
  { title: "Contact Us", page: "contact.html", section: "", keywords: "contact get in touch phone email whatsapp instagram" },
  { title: "Green Point Studio", page: "contact.html", section: "", keywords: "green point studio address hours parking" },
  { title: "Camps Bay Sessions", page: "contact.html", section: "", keywords: "camps bay promenade outdoor bootcamp times" },
  { title: "Enquiry Form", page: "enquiry.html", section: "", keywords: "enquiry form book consultation sign up" },
];
 
function initSearch() {
  const nav = document.querySelector(".nav");
  if (!nav) return;
 
  const searchWrapper = document.createElement("div");
  searchWrapper.className = "searchWrapper";
  searchWrapper.innerHTML = `
    <div class="searchBox">
      <input type="search" class="searchInput" placeholder="Search..." aria-label="Search the website" autocomplete="off" />
      <button class="searchBtn" aria-label="Search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      </button>
    </div>
    <ul class="searchResults" role="listbox" aria-label="Search results"></ul>
  `;
  nav.appendChild(searchWrapper);
 
  const searchInput   = searchWrapper.querySelector(".searchInput");
  const searchResults = searchWrapper.querySelector(".searchResults");
 
  function doSearch(query) {
    const q = query.toLowerCase().trim();
    searchResults.innerHTML = "";
 
    if (q.length < 2) { searchResults.style.display = "none"; return; }
 
    const matches = searchIndex.filter(function (item) {
      return item.title.toLowerCase().includes(q) || item.keywords.toLowerCase().includes(q);
    });
 
    if (matches.length === 0) {
      searchResults.innerHTML = '<li class="searchNoResult">No results found</li>';
      searchResults.style.display = "block";
      return;
    }
 
    matches.slice(0, 6).forEach(function (item) {
      const li = document.createElement("li");
      li.className = "searchResult";
      li.setAttribute("role", "option");
      li.setAttribute("tabindex", "-1");
      li.innerHTML = `<span class="searchResultTitle">${item.title}</span><span class="searchResultPage">${item.page}</span>`;
      li.addEventListener("click", function () {
        window.location.href = item.page + item.section;
        searchResults.style.display = "none";
        searchInput.value = "";
      });
      searchResults.appendChild(li);
    });
 
    searchResults.style.display = "block";
  }
 
  searchInput.addEventListener("input", function () { doSearch(searchInput.value); });
 
  document.addEventListener("click", function (e) {
    if (!searchWrapper.contains(e.target)) searchResults.style.display = "none";
  });
 
  searchInput.addEventListener("keydown", function (e) {
    const items = searchResults.querySelectorAll(".searchResult");
    if (items.length === 0) return;
    if (e.key === "ArrowDown") { e.preventDefault(); items[0].focus(); }
    if (e.key === "Escape") { searchResults.style.display = "none"; searchInput.blur(); }
  });
 
  searchResults.addEventListener("keydown", function (e) {
    const focused = document.activeElement;
    const items   = Array.from(searchResults.querySelectorAll(".searchResult"));
    const idx     = items.indexOf(focused);
    if (e.key === "ArrowDown" && idx < items.length - 1) items[idx + 1].focus();
    if (e.key === "ArrowUp"   && idx > 0)                items[idx - 1].focus();
    if (e.key === "ArrowUp"   && idx === 0)              searchInput.focus();
    if (e.key === "Escape")                               searchResults.style.display = "none";
    if (e.key === "Enter"     && focused.classList.contains("searchResult")) focused.click();
  });
}
 
initSearch();

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