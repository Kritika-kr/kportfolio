// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Glow effect on skills list when hovered
const skillItems = document.querySelectorAll('#skills li');
skillItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.color = '#00ff99';
    item.style.transform = 'scale(1.05)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.color = '#e0e0e0';
    item.style.transform = 'scale(1)';
  });
});

// Fade-in animation when sections come into view
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});
