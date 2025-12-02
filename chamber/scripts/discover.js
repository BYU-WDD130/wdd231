const { places } = await import("../data/places.mjs");

// ----- Build Cards -----
const cardsContainer = document.querySelector("#cards");

places.forEach(place => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img 
                src="${place.image}" 
                alt="${place.name}"
                loading="lazy"
                decoding="async"
            >
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button aria-label="Learn more about ${place.name}">Learn More</button>
    `;

    cardsContainer.appendChild(card);
});

// ----- Visit Message -----
const msgBox = document.querySelector("#last-visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    msgBox.textContent = "Places in Newark, that you need to visit.";
} else {
    const dayMs = 1000 * 60 * 60 * 24;
    const daysPassed = Math.floor((now - lastVisit) / dayMs);

    if (daysPassed < 1) {
        msgBox.textContent = "Back so soon! Awesome!";
    } else if (daysPassed === 1) {
        msgBox.textContent = "You last visited 1 day ago.";
    } else {
        msgBox.textContent = `You last visited ${daysPassed} days ago.`;
    }
}

// ---- HAMBURGER MENU TOGGLE ----
const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navBar.classList.toggle('show');  
});

// ---- FOOTER DATES ----
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("LastModified").textContent = "Last Modified: " + document.lastModified;

// Save last visit
localStorage.setItem("lastVisit", now);