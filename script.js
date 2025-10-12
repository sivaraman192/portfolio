// script.js

// 1. NAVBAR ACTIVE LINK ON SCROLL
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  
  // Determine which section is currently visible
  sections.forEach((section) => {
    // Offset by 100px to activate the link slightly before reaching the section top
    const sectionTop = section.offsetTop - 100;
    
    // Use window.scrollY for accurate, modern scroll position
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  
  // Apply 'active' class to the corresponding nav link
  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});


// 2. SKILLS CAROUSEL LOGIC

const wrapper = document.querySelector(".cards-wrapper");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

if (wrapper && leftArrow && rightArrow) {
    const cards = wrapper.querySelectorAll(".skill-card");
    
    // Values must match CSS: Card width (230px) + Gap (30px) = 260px
    const CARD_GAP = 30; 
    const CARD_WIDTH = 230; 
    const SLIDE_DISTANCE = CARD_WIDTH + CARD_GAP; 

    let currentIndex = 0; 
    const totalItems = cards.length; 
    
    // This value must match how many cards are visible in the CSS design
    const visibleItems = 3; 

    // Function to update the carousel position
    function updateCarousel() {
        const transformValue = -currentIndex * SLIDE_DISTANCE;
        wrapper.style.transform = `translateX(${transformValue}px)`;

        // Control arrow visibility/opacity
        leftArrow.style.opacity = currentIndex === 0 ? '0.3' : '1';
        // Disable the right arrow when the last set of visible cards is shown
        rightArrow.style.opacity = currentIndex >= totalItems - visibleItems ? '0.3' : '1';
    }

    // Event Listeners for Arrows
    rightArrow.addEventListener('click', (e) => {
        e.preventDefault(); 
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            updateCarousel();
        }
    });

    leftArrow.addEventListener('click', (e) => {
        e.preventDefault(); 
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Initialize the carousel position when the page loads
    updateCarousel();
}


 function toggleCard(card) {
    card.classList.toggle('active');
 }
