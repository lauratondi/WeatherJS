// INIT WEATHER CLASS
const weather = new Weather('Amsterdam', 'Netherlands');

// GET WEATHER ON DOM LOAD
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Bologna', 'Italy');

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
    })
    .catch((err) => console.log(err));
}
