const myTown = document.querySelector('#town');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Trier, Germany coordinates
const myKey = f3849d6e217234d7429486bdaab8f5bb;
const lat = 49.75156;
const lon = 6.63713;

// OpenWeatherMap API URL (replace YOUR_API_KEY_HERE with your actual key)
const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${myKey}&unit=imperial`

async function apiFetch() {
  try {
    const response = await fetch(myUrl);
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
    console.log("hello")


}