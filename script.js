// ===== NAVBAR ACTIVE LINK ON SCROLL =====
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

// ===== SKILLS CAROUSEL =====
const wrapper = document.querySelector(".cards-wrapper");
const cards = document.querySelectorAll(".skill-card");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let currentIndex = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove("active");
    card.style.display = "none";
    if (i === index) {
      card.classList.add("active");
      card.style.display = "flex";
    }
  });
}

function updateCarouselPC() {
  const CARD_WIDTH = 230;
  const CARD_GAP = 30;
  const SLIDE_DISTANCE = CARD_WIDTH + CARD_GAP;
  wrapper.style.transform = `translateX(-${currentIndex * SLIDE_DISTANCE}px)`;
}

function handleCarousel() {
  if (window.innerWidth <= 768) {
    wrapper.style.transform = "none";
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
    cards.forEach((card) => (card.style.display = "flex"));
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

// ===== PROJECT CARD FLIP =====
function toggleCard(card) {
  card.classList.toggle("active");
}

// ===== SIDE NAVBAR =====
const sidenav = document.querySelector(".side-navbar");
function showNavbar() { sidenav.style.left = "0"; }
function closeNavbar() { sidenav.style.left = "-60%"; }
