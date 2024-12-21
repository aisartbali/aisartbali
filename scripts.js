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

const menu = document.getElementById("menu");
const navMain = document.getElementById("navbar-main");

menu.addEventListener("click", () => {
  const srcPath = menu.getAttribute("src");

  if (srcPath === "/assets/menu.png") {
    menu.src = "/assets/cross.png";
  } else {
    menu.setAttribute("src", "/assets/menu.png");
  }
  navMain.classList.toggle("show");
});

const imagePath = [
  "Best seller/Kong boxing.jpg",
  "Best seller/Kong graffiti.jpg",
  "Best seller/Kaws black.jpg",
  "Best seller/Bearbrick.jpg",
];

// Modal elements
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

let currentIndex = 0;

const allBestSeller = document.querySelectorAll(".open-modal");
allBestSeller.forEach((item, index) => {
  item.addEventListener("click", () => openModal(index));
});

function openModal(startIndex) {
  currentIndex = startIndex;
  modal.style.display = "flex";
  showImage(currentIndex);
  document.addEventListener("keydown", handleKeyPress);
}

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.removeEventListener("keydown", handleKeyPress);
});

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imagePath.length) % imagePath.length;
  showImage(currentIndex - 1)
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imagePath.length;
  showImage(currentIndex + 1);
});

// Show the current image in modal
function showImage(index) {
  modalImage.src = imagePath[index];
}

// Handle slideshow navigation using keyboard
function handleKeyPress(event) {
  if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % imagePath.length;
    showImage(currentIndex);
  } else if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + imagePath.length) % imagePath.length;
    showImage(currentIndex);
  } else if (event.key === "Escape") {
    modal.style.display = "none";
    document.removeEventListener("keydown", handleKeyPress);
  }
}
