/* eslint-disable no-console */
/* eslint-env browser */

const nav = document.getElementById('navbar-menu');
const navOverlay = document.getElementById('navbar-overlay');
const navToggle = document.getElementById('navbar-hamburger');

navToggle.addEventListener('click', () => {
  console.log('clicked');
  nav.classList.toggle('active');
  navOverlay.classList.toggle('active');
});
