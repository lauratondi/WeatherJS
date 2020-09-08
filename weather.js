class Weather {
  constructor(city, country) {
    this.apiKey = config.api_key;
    this.city = city;
    this.country = country;
  }

  // FETCH WEATHER FROM API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
    );

    const responseData = await response.json();
    console.log(responseData);

    return responseData;
  }

  // CHANGE WEATHER LOCATION
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
