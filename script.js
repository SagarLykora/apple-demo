window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
});
