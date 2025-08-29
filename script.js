// ---------------------------
// Navbar Toggle
// ---------------------------
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ---------------------------
// Scroll Animation
// ---------------------------
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ---------------------------
// Investment Plan Highlight
// ---------------------------
const plans = document.querySelectorAll(".plan");

plans.forEach((plan) => {
  plan.addEventListener("mouseenter", () => {
    plan.style.border = "2px solid gold";
  });
  plan.addEventListener("mouseleave", () => {
    plan.style.border = "none";
  });
});

// ---------------------------
// Contact Form (Simple Validation)
// ---------------------------
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting Crestpoint Capital. We’ll get back to you shortly!");
  form.reset();
});


// Parallax effect for hero text
const heroContent = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  if (scrollY < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
});


// Scroll-based reveal animations
const revealElements = document.querySelectorAll(".reveal-on-scroll");

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));


// Hero parallax background
const parallaxLayer = document.querySelector(".parallax-layer");

window.addEventListener("scroll", () => {
  let offset = window.scrollY * 0.2;
  if (parallaxLayer) {
    parallaxLayer.style.transform = `translateY(${offset}px)`;
  }
});
