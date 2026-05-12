// Loader
window.addEventListener('load', () => {
    setTimeout(() => document.querySelector('.loader').classList.add('hidden'), 800);
});

// Custom cursor (desktop only)
const cursor = document.querySelector('.cursor');
if (cursor && window.innerWidth > 768) {
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    document.querySelectorAll('a, button, .work-card, summary').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(1.8)');
        el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
    });
}

// Nav scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 80));

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle) toggle.addEventListener('click', () => links.classList.toggle('active'));
document.querySelectorAll('.nav-links a').forEach(l => l.addEventListener('click', () => links && links.classList.remove('active')));

// Scroll animations with stagger
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.section, .service-row, .process-step').forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.1 + 's';
    observer.observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Parallax hero
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            const hero = document.querySelector('.hero-title');
            if (hero && window.scrollY < window.innerHeight) {
                hero.style.transform = 'translateY(' + window.scrollY * 0.12 + 'px)';
                hero.style.opacity = 1 - window.scrollY / (window.innerHeight * 0.8);
            }
            ticking = false;
        });
        ticking = true;
    }
});