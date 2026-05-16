// Scroll reveal
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.section').forEach(s => observer.observe(s));

// Parallax hero
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const bg = document.querySelector('.hero-bg-text');
    const content = document.querySelector('.hero-content');
    if (bg) bg.style.transform = `translateY(${y * 0.3}px)`;
    if (content && y < window.innerHeight) {
        content.style.transform = `translateY(${y * 0.15}px)`;
        content.style.opacity = 1 - y / (window.innerHeight * 0.8);
    }
});

// Slider
let slidePos = 0;
const track = document.getElementById('sliderTrack');
function slideRight() {
    slidePos = Math.min(slidePos + 370, (track.children.length - 2) * 370);
    track.style.transform = `translateX(-${slidePos}px)`;
}
function slideLeft() {
    slidePos = Math.max(slidePos - 370, 0);
    track.style.transform = `translateX(-${slidePos}px)`;
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
});
// Language switch
const translations = {
    '.hero-tag': {ru:'ГРАФИЧЕСКИЙ ДИЗАЙНЕР / НИЖНИЙ НОВГОРОД', en:'GRAPHIC DESIGNER / NIZHNY NOVGOROD'},
    '.hero-title .line:nth-child(1)': {ru:'СОЗДАЮ', en:'I CREATE'},
    '.hero-title .line.accent': {ru:'ВИЗУАЛЬНЫЕ', en:'VISUAL'},
    '.hero-title .line:nth-child(3)': {ru:'РЕШЕНИЯ', en:'IDENTITIES'},
    '.hero-sub': {ru:'Логотипы. Фирменный стиль. Инфографика. 3D анимация.', en:'Logos. Branding. Infographics. 3D Animation.'},
    '.cta-text': {ru:'СМОТРЕТЬ РАБОТЫ', en:'VIEW WORK'},
};
let currentLang = 'ru';
function toggleLang() {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    document.getElementById('langBtn').textContent = currentLang === 'ru' ? 'EN' : 'RU';
    for (const [sel, texts] of Object.entries(translations)) {
        const el = document.querySelector(sel);
        if (el) el.textContent = texts[currentLang];
    }
}