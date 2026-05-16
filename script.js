// === LANGUAGE SWITCH ===
let currentLang = 'ru';
const langBtn = document.getElementById('langSwitch');
langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  langBtn.textContent = currentLang === 'ru' ? 'EN' : 'RU';
  document.querySelectorAll('[data-ru]').forEach(el => {
    el.textContent = el.getAttribute('data-' + currentLang);
  });
});

// === SIDE NAV ACTIVE STATE ===
const sections = document.querySelectorAll('.section');
const sideItems = document.querySelectorAll('.side-nav-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sideItems.forEach(item => item.classList.remove('active'));
      const id = entry.target.id;
      const active = document.querySelector('.side-nav-item[data-section="' + id + '"]');
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

// === FAQ ACCORDION ===
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!wasActive) item.classList.add('active');
  });
});

// === SCROLL REVEAL ===
const revealEls = document.querySelectorAll('.work-item, .service-row, .about-right, .faq-item, .contact-card');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  revealObs.observe(el);
});
