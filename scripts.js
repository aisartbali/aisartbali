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

const bars = document.getElementById('bars');
let clickBars = 0;
const cross = document.getElementById('cross');
let clickCross = 0;
const navbarMenu = document.getElementById('navbar-main');

bars.addEventListener('click', () => {
  bars.style.setProperty('display', 'none');
  navbarMenu.classList.toggle('show');
  cross.style.setProperty('display', 'block');
})

cross.addEventListener('click', () => {
  cross.style.setProperty('display', 'none');
  navbarMenu.classList.remove('show');
  bars.style.setProperty('display', 'block');

})