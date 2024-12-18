// For animation
// Select all elements to animate
const animatedElements = document.querySelectorAll('.img-hover, .line, .custom-line, .custom-line2, .best-seller, .open-modal, .sculpture-content, .gallery-img, .gallery-img, .Shipping-gallery, .features, .feature-item, .highlight-banner, .Shipping-galery2, .shipping-intro-h, .contact-logo, .animate-text-contact, .animate-text');

// // Intersection Observer setup
// const observer = new IntersectionObserver(
//   (entries) => {
//       entries.forEach(

//         (entry) => {
//           if (entry.isIntersecting) {
//             // Add the "animate" class when in view
//             entry.target.classList.add('animate');
//             // Optional: Stop observing the element after animation
//             observer.unobserve(entry.target);
//           }
//         }

//       )
//   }, { threshold: 0.3 } // Trigger when 30% of the element is in view
// );

// // Observe each animated element
// animatedElements.forEach((element) => observer.observe(element));



// For animation when scrolling up and down
let lastScrollY = window.scrollY; // Track the last scroll position
const observer = new IntersectionObserver(

    (entries) => {
        entries.forEach(

            (entry) => {
                // Determine the scroll direction
                const scrollingUp = window.scrollY < lastScrollY;

                if(entry.isIntersecting) {
                    // Add the appropriate animation class
                    if (scrollingUp) {
                        entry.target.classList.add('animate-up'); // Class for scrolling up
                    } else {
                        entry.target.classList.add('animate-down'); // Class for scrolling down
                    }
                } else {
                    // Optionally remove the animation class when out of view
                    entry.target.classList.remove('animate-up', 'animate-down')
                }
               
            });
            // Update the last scroll position
            lastScrollY = window.scrollY;
        },
        { threshold: 0.3 } // Trigger when 30% of the element is in view
    );

// Observe each animated element
animatedElements.forEach((element) => observer.observe(element));