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
