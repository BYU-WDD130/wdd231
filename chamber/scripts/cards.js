document.addEventListener("DOMContentLoaded", () => {
  // --- QUICK LINKS SECTION ---
  const cards = document.querySelectorAll(".quick-links .card");

  const quickLinkImages = [
    "image/membership1.jpg",
    "image/events1(1).jpg",
    "image/suitcase(1).jpg",
    "image/resources.jpg"
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
    "image/mixernet(1).jpg",
    "image/workshop(1).jpg",
    "image/marketing(2).jpg",
    "image/marketing(2).jpg",
    "image/marketing(2).jpg",
    "image/marketing(2).jpg",
    "image/marketing(2).jpg",
    "image/marketing(2).jpg"
  ];

  eventCards.forEach((eventCard, index) => {
    const img = document.createElement("img");
    img.src = eventImages[index];
    img.alt = eventCard.querySelector("h3").textContent + " image";
    img.classList.add("event-img");
    eventCard.prepend(img);
  });


  // --- BUSINESS CARDS SECTION ---
  const businessCards = document.querySelectorAll('.featured-businesses .business-card');
  
  const businessImages = [
    "image/fitness.jpg",
    "image/Bakery.jpg",
    "image/downtown.jpg"
  ];
  businessCards.forEach((businessCard, index) => {
    const img = document.createElement("img");
    img.src = businessImages[index];
    img.alt = businessCard.querySelector("h3").textContent.trim() + " logo";
    img.classList.add("business-logo");
    businessCard.prepend(img);
  });


});