document.getElementById('year').textContent = new Date().getFullYear();

const navLinks = [...document.querySelectorAll('.intro-panel nav a')];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href')));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-25% 0px -65%', threshold: 0 });

sections.forEach((section) => observer.observe(section));
