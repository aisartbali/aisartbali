// JavaScript to toggle navbar background on scroll
const navbar = document.getElementById("navbar");
const list = document.querySelectorAll(".navbar-menu li, .navbar-menu a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const menu = document.getElementById('menu');
const navMain = document.getElementById('navbar-main');

menu.addEventListener('click', () => {
  const srcPath = menu.getAttribute('src');

  if(srcPath === '/assets/menu.png') {
    menu.src = '/assets/cross.png';
  } else {
    menu.setAttribute('src', '/assets/menu.png');
  }
  navMain.classList.toggle('show');
})