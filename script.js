

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
const cards = document.querySelectorAll(".skill-card");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove("active");
    if (i === index) card.classList.add("active");
  });
}

// For PC (horizontal scroll)
function updateCarouselPC() {
  const CARD_WIDTH = 230;
  const CARD_GAP = 30;
  const SLIDE_DISTANCE = CARD_WIDTH + CARD_GAP;
  const transformValue = -currentIndex * SLIDE_DISTANCE;
  wrapper.style.transform = `translateX(${transformValue}px)`;
}

// Detect screen size and handle accordingly
function handleCarousel() {
  if (window.innerWidth <= 768) {
    // Mobile: one card at a time
    showCard(currentIndex);

    leftArrow.onclick = (e) => {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showCard(currentIndex);
    };

    rightArrow.onclick = (e) => {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % cards.length;
      showCard(currentIndex);
    };
  } else {
    // Desktop: scroll horizontally
    leftArrow.onclick = (e) => {
      e.preventDefault();
      if (currentIndex > 0) currentIndex--;
      updateCarouselPC();
    };

    rightArrow.onclick = (e) => {
      e.preventDefault();
      if (currentIndex < cards.length - 3) currentIndex++;
      updateCarouselPC();
    };
  }
}

handleCarousel();
window.addEventListener("resize", handleCarousel);


 function toggleCard(card) {
    card.classList.toggle('active');
 }


 // --- MOBILE SKILL CLICK FIX ---
skillCards.forEach(card => {
  card.addEventListener("touchstart", () => {
    skillCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    const skillName = card.querySelector("p").textContent.trim();
    skillTitle.textContent = skillName;
    skillDesc.textContent = skillData[skillName] || "No details available.";
  });
});
