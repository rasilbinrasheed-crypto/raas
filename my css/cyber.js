// Theme toggle
const toggle = document.getElementById('themeToggle');
const html = document.documentElement;
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
function setIcons() {
  const dark = html.classList.contains('dark');
  if (dark) { sun?.classList.remove('hidden'); moon?.classList.add('hidden'); }
  else { sun?.classList.add('hidden'); moon?.classList.remove('hidden'); }
}
if (toggle) {
  toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    setIcons();
  });
  setIcons();
}

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); } });
},{ threshold: .15 });
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
