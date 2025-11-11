
const myTown = document.querySelector('#town-name')
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Trier, Germany coordinates
const lat = 49.75;
const lon = 6.64;
const myKey = f3849d6e217234d7429486bdaab8f5bb;

// OpenWeatherMap API URL (replace YOUR_API_KEY_HERE with your actual key)
const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${myKey}&inits=imperial`

async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
    console.log('Hello World');
  // Display current temperature (°C)
  currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;

  // Build icon and description
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const desc = data.weather[0].description;

  // Set image attributes
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  // Add text description
  captionDesc.textContent = desc;
}