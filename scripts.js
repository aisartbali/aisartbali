document.addEventListener("DOMContentLoaded", () => {
    // Ambil elemen ikon hamburger dan menu navbar
    const hamburger = document.getElementById("hamburger");
    const navbarMenu = document.querySelector(".navbar-menu");

    // Tambahkan event listener untuk klik ikon hamburger
    hamburger.addEventListener("click", () => {
        navbarMenu.classList.toggle("show");

        // Toggle ikon hamburger jadi silang
        if (hamburger.classList.contains("cross")) {
            hamburger.classList.remove("cross");
            hamburger.classList.replace("fa-times", "fa-bars");
        } else {
            hamburger.classList.add("cross");
            hamburger.classList.replace("fa-bars", "fa-times");
        }
    });

    // Tambahkan event listener untuk menu dropdown
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener("click", (event) => {
            event.preventDefault(); // Mencegah navigasi
            const parent = toggle.parentElement;
            parent.classList.toggle("active"); // Toggle kelas active
        });
    });
});

// JavaScript to toggle navbar background on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
