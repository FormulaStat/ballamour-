// Mobile nav toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Parallax Particles
const parallaxLayer = document.querySelector(".parallax-layer");

function createParticles(count) {
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

createParticles(25); // number of particles


// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ScrollSpy Active Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
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


// Ensure your HTML has these IDs:
// <div id="menu-toggle">☰</div>
// <ul id="nav-links"></ul>
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
