
const menuBar = document.querySelector('.menu-bar');
const navBar = document.querySelector('.nav-bar');

menuBar.addEventListener('click', () => {
  navBar.classList.toggle('toggle');
});
