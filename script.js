// Waits for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the mobile menu toggle button and the navigation list
    const menuToggle = document.querySelector('.menu-toggle');
    const primaryNavigation = document.getElementById('primary-navigation');

    // Add a click event listener to the menu toggle button
    menuToggle.addEventListener('click', () => {
        // Check if the navigation is currently visible by checking the 'data-visible' attribute
        const isVisible = primaryNavigation.getAttribute('data-visible') === 'true';

        // Toggle the 'data-visible' attribute to true or false
        // This will be used by the CSS to show or hide the menu
        primaryNavigation.setAttribute('data-visible', !isVisible);
        
        // Also toggle the 'aria-expanded' attribute for accessibility purposes
        // This lets screen readers know if the menu is open or closed
        menuToggle.setAttribute('aria-expanded', !isVisible);
    });
});
const carousel = document.getElementById("carousel");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dotsContainer = document.getElementById("dots");

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Create dots
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll(".dot");

    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

      dots.forEach(dot => dot.classList.remove("active"));
      dots[currentIndex].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });

    // Optional: support touch on arrow buttons only
    nextBtn.addEventListener("touchstart", (e) => {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    });

    prevBtn.addEventListener("touchstart", (e) => {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });

