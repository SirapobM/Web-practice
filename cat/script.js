// ===== Mobile menu =====
function togglemenuIcon(btn){
  btn.classList.toggle('active');
  const menu = document.querySelector('.menu');
  const expanded = btn.classList.contains('active');
  btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  menu.classList.toggle('show', expanded);
}

// ปิดเมนูเมื่อคลิกลิงก์
document.addEventListener('click', (e)=>{
  if(e.target.closest('.menu a')){
    const btn = document.querySelector('.menuIcon');
    if(btn && btn.classList.contains('active')) togglemenuIcon(btn);
  }
});

// ===== Theme (Dark/Light) =====
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if(saved === 'dark'){ root.classList.add('dark'); if(themeToggle) themeToggle.textContent='🌞'; }
if(themeToggle){
  themeToggle.addEventListener('click', ()=>{
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '🌞' : '🌙';
  });
}

// ===== Gallery filter =====
const filterWrap = document.querySelector('.filter');
const grid = document.querySelector('.grid');
if(filterWrap && grid){
  filterWrap.addEventListener('click', (e)=>{
    const btn = e.target.closest('button'); if(!btn) return;
    filterWrap.querySelectorAll('.chip').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const tag = btn.dataset.tag;
    grid.querySelectorAll('img').forEach(img=>{
      const show = tag === 'all' || img.dataset.tag === tag;
      img.style.display = show ? '' : 'none';
    });
  });
}

// ===== Lightbox (dialog) =====
const lightbox = document.getElementById('lightbox');
if(grid && lightbox){
  grid.addEventListener('click', (e)=>{
    const img = e.target.closest('img'); if(!img) return;
    lightbox.querySelector('img').src = img.src;
    lightbox.showModal();
  });
  lightbox.addEventListener('click', ()=> lightbox.close());
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && lightbox.open) lightbox.close(); });
}

// ===== Year =====
const y = document.getElementById('year');
if(y) y.textContent = new Date().getFullYear();
