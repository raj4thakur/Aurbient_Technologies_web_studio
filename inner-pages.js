document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = 'Menu'; nav.classList.remove('is-open'); }
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); toggle.textContent = open ? 'Close menu' : 'Menu'; nav.classList.toggle('is-open', open); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  const filters = document.querySelectorAll('[data-filter]');
  filters.forEach((button) => button.addEventListener('click', () => {
    filters.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    let count = 0;
    document.querySelectorAll('[data-category]').forEach((card) => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; if (!card.hidden) count++; });
    document.getElementById('filter-status').textContent = `${count} project ${count === 1 ? 'concept' : 'concepts'} shown.`;
  }));
  document.getElementById('contactForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const subject = `Project enquiry — ${data.get('company') || data.get('name')}`;
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company') || 'Not provided'}\nService: ${data.get('service')}\n\nProject brief:\n${data.get('message')}`;
    window.location.href = `mailto:contact@aurbient.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.getElementById('formStatus').textContent = 'Your email draft is ready in your email app. Please send it there to complete your enquiry. If nothing opens, email contact@aurbient.com directly.';
  });
});
