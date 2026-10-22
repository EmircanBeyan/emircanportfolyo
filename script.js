const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
revealItems.forEach((item) => observer.observe(item));

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.topbar nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const form = document.querySelector('#contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = data.get('name').trim();
  const email = data.get('email').trim();
  const message = data.get('message').trim();
  const subject = encodeURIComponent(`Portfolyo iletişimi — ${name}`);
  const body = encodeURIComponent(`Merhaba Emircan,\n\n${message}\n\n---\n${name}\n${email}`);
  document.querySelector('#form-note').textContent = 'E-posta uygulaman açılıyor. Mesajı göndermek için e-posta uygulamandaki Gönder düğmesine bas.';
  window.location.href = `mailto:emircanbeyan3411@gmail.com?subject=${subject}&body=${body}`;
});

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
}, { passive: true });
