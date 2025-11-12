const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic'); 

// Trier, Germany coordinates
const myKey = 'f3849d6e217234d7429486bdaab8f5bb'; 
const lat = 49.75;
const long = 6.63;

// OpenWeatherMap API URL
const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`;


async function apiFetch() {
  try {
    const response = await fetch(myUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  myTown.textContent = data.name;
  myDescription.textContent = data.weather[0].description;
  myTemperature.innerHTML = `${data.main.temp.toFixed(0)}°F`;

  const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  myGraphic.setAttribute('SRC', iconSrc);
  myGraphic.setAttribute('alt', data.weather[0].description);
}

apiFetch();