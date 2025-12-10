document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".activities-grid");

  if (!grid) return console.error("The .activities-grid container was not found.");

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
            <button class="details-btn">View Details</button>
          </div>
        `;

        card.querySelector(".details-btn").addEventListener("click", () => {
          showActivityDetails(activity);
        });

        grid.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error loading activities:", err);
      grid.innerHTML = "<p>Unable to load activities at this time.</p>";
    });
});


// ---------------------------------
// Modal to show activity details
// ---------------------------------
function showActivityDetails(activity) {
  const modal = document.createElement("div");
  modal.classList.add("modal-overlay");

  const placesList = activity.places ? activity.places.join(", ") : "Not specified";

  modal.innerHTML = `
    <div class="modal">
      <h2>${activity.title}</h2>

      <p><strong>Price:</strong> $${activity.price} USD</p>
      <p><strong>Places to Visit:</strong> ${placesList}</p>
      <p><strong>Duration:</strong> ${activity.days} day(s)</p>

      <button class="close-modal">Close</button>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".close-modal").addEventListener("click", () => {
    modal.remove();
  });
}


document.getElementById("currentyear").textContent = new Date().getFullYear();

// Última modificación
document.getElementById("LastModified").textContent =
  "Last Modified: " + document.lastModified;

// NAV hamburguesa
const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navBar.classList.toggle('show');
});



const myTown = document.querySelector('#town')
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('#weatherDesc');


// Trier, Germany coordinates
const myKey = 'f3849d6e217234d7429486bdaab8f5bb'; 
const myLat = 15.79;
const myLong = -86.62;

// OpenWeatherMap API URL
const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`;


async function apiFetch() {
  try {
    const response = await fetch(myUrl);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // testing only
     displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}



function displayResults(data) {


    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather icon');
    captionDesc.textContent = `${data.weather[0].description} `;
    myTown.innerHTML = data.name
}

apiFetch();