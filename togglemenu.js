function toggleMenu() {
  const nav = document.querySelector("nav");
  const toggle = document.querySelector(".menu-toggle");
  const overlay = document.querySelector(".menu-overlay");

  nav.classList.toggle("active");
  toggle.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Close menu on link click
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("nav").classList.remove("active");
    document.querySelector(".menu-toggle").classList.remove("active");
    document.querySelector(".menu-overlay").classList.remove("active");
  });
});

// Close menu on link click (mobile UX)
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("nav").classList.remove("active");
    document.querySelector(".menu-toggle").classList.remove("active");
  });
});
