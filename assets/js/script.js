// TOGGLE DETAILS (Education Cards)

document.querySelectorAll(".toggle-details").forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    if (!details) return;

    const isOpen = details.classList.toggle("open");
    button.textContent = isOpen ? "Hide Details" : "Show Details";
    button.setAttribute("aria-expanded", isOpen);
  });
});


// MANUAL HORIZONTAL SCROLL FUNCTION

function setupScrollButtons(wrapperSelector, containerSelector) {
  const wrapper = document.querySelector(wrapperSelector);
  if (!wrapper) return;

  const container = wrapper.querySelector(containerSelector);
  const btnLeft = wrapper.querySelector(".scroll-btn.left");
  const btnRight = wrapper.querySelector(".scroll-btn.right");

  if (!container || !btnLeft || !btnRight) return;

  const scrollAmount = container.clientWidth * 0.9;

  btnLeft.addEventListener("click", () => {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
}

// Apply manual horizontal scroll to sections
// Projects
setupScrollButtons(
  "#projects .projects-wrapper",
  ".projects-grid.horizontal-scroll"
);

// Experience
setupScrollButtons(
  "#experience .experience-wrapper",
  ".experience-grid.horizontal-scroll"
);


// AUTO-SCROLL FUNCTION

function setupAutoScroll(containerSelector, cardSelector, gap = 30, intervalTime = 3500) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  let autoScrollInterval;

  function start() {
    autoScrollInterval = setInterval(() => {
      const card = container.querySelector(cardSelector);
      if (!card) return;

      const cardWidth = card.clientWidth + gap;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 5
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, intervalTime);
  }

  function stop() {
    clearInterval(autoScrollInterval);
  }

  // Pause on hover
  container.addEventListener("mouseenter", stop);
  container.addEventListener("mouseleave", start);

  // Start immediately
  start();
}

// Apply auto-scroll to sections

// Projects section
setupAutoScroll(
  ".projects-grid.horizontal-scroll",
  ".project-card-link",
);

// Experience section
setupAutoScroll(
  ".experience-grid.horizontal-scroll",
  ".experience-card"
);
