document.addEventListener("DOMContentLoaded", () => {
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

      const subject = encodeURIComponent(`Automation enquiry — ${company || name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nWhat should we automate?\n${message}`
      );

      window.location.href = `mailto:contact@aurbient.com?subject=${subject}&body=${body}`;
      status.textContent = "Opening your email client…";
    });
  }
});
