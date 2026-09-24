const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const icon = menuBtn.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");

    const icon = menuBtn.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

/* Close menu when clicking outside */
document.addEventListener("click", (event) => {
  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(event.target) &&
    !menuBtn.contains(event.target)
  ) {
    navLinks.classList.remove("active");

    const icon = menuBtn.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = contactForm.querySelector('input[type="text"]');
  const email = contactForm.querySelector('input[type="email"]');
  const subject = contactForm.querySelectorAll('input[type="text"]')[1];
  const message = contactForm.querySelector("textarea");

  if (
    name.value.trim() === "" ||
    email.value.trim() === "" ||
    subject.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Form submitted successfully!");
  contactForm.reset();
});

// =========================
//       COLOR THEMES
// =========================

const themeBtn = document.querySelector(".theme-btn");
const themeWrapper = document.querySelector(".theme-wrapper");
const themeOptions = document.querySelectorAll(".theme-option");

// Open / close theme menu
themeBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  themeWrapper.classList.toggle("active");
});

// Change theme
themeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const theme = option.dataset.theme;

    if (theme === "blue") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }

    localStorage.setItem("portfolio-theme", theme);
    themeWrapper.classList.remove("active");
  });
});

// Load saved theme
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme && savedTheme !== "blue") {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// Close theme menu when clicking outside
document.addEventListener("click", (event) => {
  if (
    themeWrapper.classList.contains("active") &&
    !themeWrapper.contains(event.target)
  ) {
    themeWrapper.classList.remove("active");
  }
});