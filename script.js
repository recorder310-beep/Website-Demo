document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('helloButton');
  const status = document.getElementById('status');
  button.addEventListener('click', () => {
    status.textContent = 'Success! JavaScript is working on this website.';
  });
});
