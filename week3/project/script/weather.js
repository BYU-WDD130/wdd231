const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic'); 

// Trier, Germany coordinates
const myKey = '4ac296a5f6369d6a2fa3671432ec2fc4'; 
const myLat = 49.75;
const myLong = 6.63;

// OpenWeatherMap API URL
const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}appid=${myKey}`;


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
  myGraphic.setAttribute('src', iconSrc);
  myGraphic.setAttribute('alt', data.weather[0].description);
}

apiFetch();