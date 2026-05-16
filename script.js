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

// === SLIDER ===
const track = document.querySelector('.works-track');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');

if (track && prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -340, behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: 340, behavior: 'smooth' });
  });
}

// === FAQ ACCORDION ===
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
});

// === SCROLL REVEAL ===
const revealElements = document.querySelectorAll('.services, .about, .faq, .contacts, .service-card, .work-card');
revealElements.forEach(el => el.classList.add('reveal'));

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// === PARALLAX HERO ===
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  if (heroBg) {
    const scrolled = window.pageYOffset;
    heroBg.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
  }
});
