let lang = 'ru';
document.getElementById('langSwitch').addEventListener('click', function() {
  lang = lang === 'ru' ? 'en' : 'ru';
  this.textContent = lang === 'ru' ? 'EN' : 'RU';
  document.querySelectorAll('[data-ru]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
});

document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const active = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!active) item.classList.add('active');
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.work-row, .sv-item, .faq-item, .about-content p, .tools');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObs.observe(el));

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});
