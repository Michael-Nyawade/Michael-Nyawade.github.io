// Toggle details for education cards
document.querySelectorAll(".toggle-details").forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isOpen = details.classList.toggle("open");
    button.textContent = isOpen ? "Hide Details" : "Show Details";
    button.setAttribute("aria-expanded", isOpen);
  });
});
