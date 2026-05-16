let lang='ru';document.getElementById('langSwitch').addEventListener('click',function(){lang=lang==='ru'?'en':'ru';this.textContent=lang==='ru'?'EN':'RU';document.querySelectorAll('[data-ru]').forEach(el=>{el.textContent=el.getAttribute('data-'+lang)})});;window.addEventListener('scroll',function(){var s=window.pageYOffset;var v=document.querySelector('.hero-video');if(v)v.style.transform='translateX(-50%) translateY('+s*0.15+'px)';document.querySelectorAll('.stat-card').forEach(function(c,i){c.style.transform='translateY('+(s*0.03*(i+1))+'px)'})});;(function(){var dot=document.getElementById('cursorDot'),ring=document.getElementById('cursorRing');if(!dot||!ring)return;var mx=0,my=0,dx=0,dy=0;document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px'});function animate(){dx+=(mx-dx)*0.15;dy+=(my-dy)*0.15;ring.style.left=dx+'px';ring.style.top=dy+'px';requestAnimationFrame(animate)}animate();var hovers=document.querySelectorAll('a,button,.work-row,.sv-card,.stat-card,.nav-center a');hovers.forEach(function(el){el.addEventListener('mouseenter',function(){dot.classList.add('hover');ring.classList.add('hover')});el.addEventListener('mouseleave',function(){dot.classList.remove('hover');ring.classList.remove('hover')})})})();;document.querySelectorAll('.faq-q').forEach(function(q){q.addEventListener('click',function(){var item=q.parentElement;var active=item.classList.contains('active');document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('active')});if(!active)item.classList.add('active')})});
// === GSAP ANIMATIONS ===
gsap.registerPlugin(ScrollTrigger);

// 1. Kinetic text reveal on section headers
document.querySelectorAll('h2').forEach(function(h) {
  var text = h.textContent;
  h.innerHTML = '';
  text.split('').forEach(function(char) {
    var span = document.createElement('span');
    span.className = 'split-char';
    span.textContent = char === ' ' ? '\u00A0' : char;
    h.appendChild(span);
  });
  gsap.to(h.querySelectorAll('.split-char'), {
    opacity: 1, y: 0, rotateX: 0,
    duration: 0.6, stagger: 0.03, ease: 'power3.out',
    scrollTrigger: { trigger: h, start: 'top 85%', toggleActions: 'play none none none' }
  });
});

// 2. Image cursor-follow on work rows
document.querySelectorAll('.work-row').forEach(function(row) {
  var preview = row.querySelector('.work-preview');
  if (!preview) return;
  var pos = { x: 0, y: 0 };
  var target = { x: 0, y: 0 };
  row.addEventListener('mousemove', function(e) {
    var rect = row.getBoundingClientRect();
    target.x = e.clientX - rect.left + 20;
    target.y = e.clientY - rect.top - 70;
  });
  function animate() {
    pos.x += (target.x - pos.x) * 0.1;
    pos.y += (target.y - pos.y) * 0.1;
    preview.style.left = pos.x + 'px';
    preview.style.top = pos.y + 'px';
    requestAnimationFrame(animate);
  }
  animate();
});

// 3. Parallax on service cards
document.querySelectorAll('.sv-card').forEach(function(card, i) {
  var speed = (i % 3 === 1) ? 40 : (i % 3 === 2) ? -20 : 15;
  gsap.to(card, {
    y: speed,
    ease: 'none',
    scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1 }
  });
});

// 4. Magnetic effect on stats and buttons
document.querySelectorAll('.stat-big, .cta-primary-white, .btn-primary').forEach(function(el) {
  el.classList.add('magnetic');
  el.addEventListener('mousemove', function(e) {
    var rect = el.getBoundingClientRect();
    var x = (e.clientX - rect.left - rect.width / 2) * 0.2;
    var y = (e.clientY - rect.top - rect.height / 2) * 0.2;
    gsap.to(el, { x: x, y: y, duration: 0.3, ease: 'power2.out' });
  });
  el.addEventListener('mouseleave', function() {
    gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
  });
});