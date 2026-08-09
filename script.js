const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');

themeButton.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('nicky-theme', nextTheme);
  document.querySelector('meta[name="theme-color"]').content = nextTheme === 'dark' ? '#001638' : '#f7f4ef';
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));
