const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

// Trier, Germany coordinates
const myKey = 'f3849d6e217234d7429486bdaab8f5bb';
const lat = 49.75;
const lon = 6.63;

// OpenWeatherMap API URL (replace YOUR_API_KEY_HERE with your actual key)
const myUrl = `http//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=metric&appid=&unit=imperial=${myKey}`;

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

function displayResults(data) {
    console.log("hello")

    myTown.textContent = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = data.main.temp.toFixed(0);
    currentTemp.textContent = `${data.main.temp.toFixed(0)}°F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('SRC', iconsrc)
    myGraphic.setAttribute('alt', data.weather[0].description);

}

apiFetch();