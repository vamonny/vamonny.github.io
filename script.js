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