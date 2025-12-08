document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".activities-grid");

  if (!grid) return console.error("No se encontró el contenedor .activities-grid");

  fetch("data/activities.json")
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      if (!data.activities || data.activities.length === 0) {
        grid.innerHTML = "<p>No activities available at this time.</p>";
        return;
      }

      data.activities.forEach(activity => {
        const card = document.createElement("div");
        card.classList.add("activity-card");

        card.innerHTML = `
          <img src="${activity.image}" alt="${activity.title}">
          <div class="card-content">
            <h3>${activity.title}</h3>
            <p>${activity.description}</p>
          </div>
        `;

        grid.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error loading activities:", err);
      grid.innerHTML = "<p>Unable to load activities at this time.</p>";
    });
});