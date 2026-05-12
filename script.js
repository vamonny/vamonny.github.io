// Custom cursor
const cursor = document.querySelector('.cursor');
if (cursor && window.innerWidth > 768) {
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    document.querySelectorAll('a, button, .work-card').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(2)');
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
document.querySelectorAll('.nav-links a').forEach(l => l.addEventListener('click', () => links.classList.remove('active')));

// Scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 100);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .service-row').forEach(s => observer.observe(s));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Parallax hero title on scroll
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-title');
    if (hero) hero.style.transform = `translateY(${window.scrollY * 0.15}px)`;
});