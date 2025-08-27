// Minimal JS: theme toggle, form handling (no backend)
(() => {
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  // Store theme in localStorage
  const stored = localStorage.getItem('theme');
  if (stored === 'light') root.classList.remove('dark');
  else root.classList.add('dark');

  themeToggle?.addEventListener('click', () => {
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // contact form demo: just prevents submit and shows msg
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const clearBtn = document.getElementById('clearBtn');

  form?.addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target;
    const name = f.name.value;
    status.textContent = `Thanks ${name || ''}! Message received (demo). We'll follow up by email.`;
    f.reset();
  });

  clearBtn?.addEventListener('click', () => {
    form.reset();
    status.textContent = '';
  });

  // set year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
