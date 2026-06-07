document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const header = document.querySelector(".header");

  const revealItems = document.querySelectorAll(
    ".section, .card, .project, .portfolio-item, .blog-card, .interior-card, .technology-feature"
  );

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Спасибо! Ваша заявка отправлена.");
    });
  }

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.12
  });

  revealItems.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
  });

  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active-link");
    }

    if (currentPage === "" && href === "index.html") {
      link.classList.add("active-link");
    }
  });
});