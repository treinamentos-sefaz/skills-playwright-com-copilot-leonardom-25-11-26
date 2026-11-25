const form = document.getElementById('newsletter-form');
const status = document.getElementById('newsletter-status');

if (!form || !status) {
  throw new Error('Newsletter form or status element is missing.');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Inscrição confirmada!';
});
