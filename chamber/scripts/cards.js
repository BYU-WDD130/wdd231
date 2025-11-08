document.addEventListener("DOMContentLoaded", () => {
  // --- QUICK LINKS SECTION ---
  const cards = document.querySelectorAll(".quick-links .card");

  const quickLinkImages = [
    "images/membership1.jpg",
    "images/events1(1).jpg",
    "images/suitcase(1).jpg",
    "images/resources.jpg"
  ];

  cards.forEach((card, index) => {
    const img = document.createElement("img");
    img.src = quickLinkImages[index];
    img.alt = card.textContent + " images";
    img.classList.add("card-img");
    card.prepend(img);
  });

  // --- EVENTS SECTION ---
  const eventCards = document.querySelectorAll(".events .event-card");

  const eventImages = [
    "images/mixernet(1).jpg",
    "images/workshop(1).jpg",
    "images/marketing(2).jpg",
    "images/marketing(2).jpg",
    "images/marketing(2).jpg",
    "images/marketing(2).jpg",
    "images/marketing(2).jpg",
    "images/marketing(2).jpg"
  ];

  eventCards.forEach((eventCard, index) => {
    const img = document.createElement("img");
    img.src = eventImages[index];
    img.alt = eventCard.querySelector("h3").textContent + " images";
    img.classList.add("event-img");
    eventCard.prepend(img);
  });


  // --- BUSINESS CARDS SECTION ---
  const businessCards = document.querySelectorAll('.featured-businesses .business-card');
  
  const businessImages = [
    "images/fitness.jpg",
    "images/Bakery.jpg",
    "images/downtown.jpg"
  ];
  businessCards.forEach((businessCard, index) => {
    const img = document.createElement("img");
    img.src = businessImages[index];
    img.alt = businessCard.querySelector("h3").textContent.trim() + " logo";
    img.classList.add("business-logo");
    businessCard.prepend(img);
  });


});