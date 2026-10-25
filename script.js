document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".home-menu-toggle");
  const homeNav = document.querySelector("#home-nav");
  if (menuToggle && homeNav) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.textContent = open ? "Close" : "Menu";
      homeNav.classList.toggle("is-open", open);
    });
    homeNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "Menu";
      homeNav.classList.remove("is-open");
    }));
  }
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 30, 180)}ms`;
    observer.observe(el);
  });

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(form);
      const name = data.get("name") || "";
      const email = data.get("email") || "";
      const company = data.get("company") || "";
      const message = data.get("message") || "";
      const service = data.get("service") || "Not sure yet";

      const subject = encodeURIComponent(`Aurbient project enquiry — ${company || name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService of interest: ${service}\n\nWhat would you like to improve?\n${message}`
      );

      window.location.href = `mailto:contact@aurbient.com?subject=${subject}&body=${body}`;
      status.textContent = "Opening your email client…";
    });
  }
});
