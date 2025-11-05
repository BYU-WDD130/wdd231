document.addEventListener("DOMContentLoaded", () => {
  // --- QUICK LINKS SECTION ---
  const cards = document.querySelectorAll(".quick-links .card");

  const quickLinkImages = [
    "images/membership.jpg",
    "images/events.jpg",
    "images/directory.jpg",
    "images/resources.jpg"
  ];

  cards.forEach((card, index) => {
    const img = document.createElement("img");
    img.src = quickLinkImages[index];
    img.alt = card.textContent + " image";
    img.classList.add("card-img");
    card.prepend(img);
  });

  // --- EVENTS SECTION ---
  const eventCards = document.querySelectorAll(".events .event-card");

  const eventImages = [
    "images/mixer.jpg",
    "images/workshop.jpg",
    "images/marketing.jpg"
  ];

  eventCards.forEach((eventCard, index) => {
    const img = document.createElement("img");
    img.src = eventImages[index];
    img.alt = eventCard.querySelector("h3").textContent + " image";
    img.classList.add("event-img");
    eventCard.prepend(img);
  });
});