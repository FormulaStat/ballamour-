// ============================
// Mobile Navigation Toggle
// ============================
const menuToggle = document.getElementById("menu-toggle");
const navLinksContainer = document.getElementById("nav-links");

if (menuToggle && navLinksContainer) {
  menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active");
  });

  // Close nav when a link is clicked (mobile UX)
  navLinksContainer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("active");
    });
  });
}

// ============================
// Parallax Particles
// ============================
const parallaxLayer = document.querySelector(".parallax-layer");

function createParticles(count) {
  if (!parallaxLayer) return; // Prevent errors if no layer exists

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    particle.style.top = Math.random() * 100 + "%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = 5 + Math.random() * 10 + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";

    parallaxLayer.appendChild(particle);
  }
}

createParticles(25); // Number of floating particles

// ============================
// Navbar Scroll Effect
// ============================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ============================
// ScrollSpy Active Link
// ============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
