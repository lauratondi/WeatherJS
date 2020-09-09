// INIT WEATHER CLASS
const weather = new Weather('Amsterdam', 'Netherlands');

// INIT UI
const ui = new UI();

// GET WEATHER ON DOM LOAD
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Bologna', 'Italy');

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
