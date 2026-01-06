// Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
  const hamburger = document.querySelector('.hamburger');
  hamburger.classList.toggle('active');
});

// Theme Toggle
const toggle = document.getElementById('themeSwitch');

if (toggle) {
  // Apply saved theme on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    toggle.checked = true;
  } else {
    document.body.setAttribute('data-theme', 'dark');
    toggle.checked = false;
  }

  // Listen for toggle changes
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); // save preference
    } else {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); // save preference
    }
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

