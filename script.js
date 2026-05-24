// Mobile menu toggle
const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');

if (burger && drawer) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    drawer.classList.toggle('open');
  });
}

// Close drawer function (called from HTML onclick)
function closeDrawer() {
  if (burger) burger.classList.remove('open');
  if (drawer) drawer.classList.remove('open');
}

// Scroll reveal animations
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach((reveal) => {
  observer.observe(reveal);
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href === '#' || href === '#contact') {
      // For demo/contact CTA, you can add logic here
      return;
    }
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      closeDrawer(); // Close mobile menu after clicking
    }
  });
});
