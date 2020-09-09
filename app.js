// INIT STORAGE
const storage = new Storage();

// GET STORED LOCATION DATA
const weatherLocation = storage.getLocationData();

// INIT WEATHER CLASS
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// INIT UI
const ui = new UI();

// GET WEATHER ON DOM LOAD
document.addEventListener('DOMContentLoaded', getWeather);

// CHANGE LOCATION EVENT
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  // CHANGE LOCATION
  weather.changeLocation(city, country);

  // SET LOCATION IN LS
  storage.setLocationData(city, country);

  //   GET AND DISPLAY WEATHER
  getWeather();

  //   CLOSE MODAL
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
