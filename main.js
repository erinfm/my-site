const nav = document.getElementById('navbar-menu');
const navToggle = document.getElementById('navbar-hamburger');

navToggle.addEventListener('click', function() {
  nav.classList.toggle('active');
});
