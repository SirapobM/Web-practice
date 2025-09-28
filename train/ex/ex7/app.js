// app.js
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('siteNav');
const overlay = document.getElementById('overlay');

function openMenu() {
  nav.classList.add('open');
  overlay.hidden = false;
  menuBtn.setAttribute('aria-expanded', 'true');
  // ป้องกันหน้าเลื่อนเมื่อเมนูเปิด
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  nav.classList.remove('open');
  overlay.hidden = true;
  menuBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  expanded ? closeMenu() : openMenu();
});

// คลิก overlay ปิด
overlay.addEventListener('click', closeMenu);

// กด Esc ปิด
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

// คลิกเมนูแล้วปิด (มือถือ UX)
document.querySelectorAll('.nav-link').forEach(a => {
  a.addEventListener('click', closeMenu);
});
