// Toggle details for education cards
document.querySelectorAll(".toggle-details").forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isOpen = details.classList.toggle("open");
    button.textContent = isOpen ? "Hide Details" : "Show Details";
    button.setAttribute("aria-expanded", isOpen);
  });
});

// Horizontal scroll for project section
const container = document.querySelector(".projects-grid.horizontal-scroll");
const btnLeft = document.querySelector(".scroll-btn.left");
const btnRight = document.querySelector(".scroll-btn.right");

const scrollAmount = container.clientWidth * 0.9;

btnLeft.addEventListener("click", () => {
  container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  container.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

/* ============================
   AUTO-SCROLL FOR PROJECTS
   ============================ */

const autoScrollContainer = document.querySelector(
  ".projects-grid.horizontal-scroll"
);
let autoScrollInterval;

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    // Scroll by one card width each time
    const cardWidth =
      autoScrollContainer.querySelector(".project-card-link").clientWidth + 30; // 30 = gap

    // If near the end, wrap back to the start
    if (
      autoScrollContainer.scrollLeft + autoScrollContainer.clientWidth >=
      autoScrollContainer.scrollWidth - 5
    ) {
      autoScrollContainer.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      autoScrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  }, 3500); // time between auto-scrolls (3.5 seconds)
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Pause auto-scroll while hovering over the project section
autoScrollContainer.addEventListener("mouseenter", stopAutoScroll);
autoScrollContainer.addEventListener("mouseleave", startAutoScroll);

// Start auto-scroll on page load
startAutoScroll();
