
window.addEventListener('scroll', () => {
  const bars = document.querySelectorAll('.progress-bar');
  bars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && bar.style.width === '0px') {
      bar.style.width = bar.dataset.progress + '%';
    }
  });
});


document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for reaching out! I’ll get back to you soon.');
});


const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
  toggleBtn.textContent = '🌙';
} else {
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  if (body.classList.contains('light')) {
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    toggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});


const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
