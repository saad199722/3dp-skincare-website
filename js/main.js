document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelectorAll("[data-year]");
  year.forEach(el => el.textContent = new Date().getFullYear());

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === current) link.classList.add("active");
  });

  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll("[data-category]");
  buttons.forEach(btn => btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      card.closest(".col")?.classList.toggle("d-none", filter !== "all" && card.dataset.category !== filter);
    });
  }));

  document.querySelectorAll("form[data-demo-form]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const msg = document.getElementById("formMessage");
      if (msg) {
        msg.classList.remove("d-none");
        form.reset();
      }
    });
  });
});
