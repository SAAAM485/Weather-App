import fetchIcon from "./fetchGif";

export default async function fetchWeather(location = "taipei") {
  try {
    if (location === "") {
      location = "taipei";
    }
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=current&key=4AHLWJMH6SU66A3Y4F8FDG4JK&contentType=json`,
      { mode: "cors" },
    );
    const city = document.querySelector("#city");
    const weather = document.querySelector("#weather");
    const weatherInfo = await response.json();
    const address = weatherInfo.address;
    const currentWeather = weatherInfo.days[0];
    const weatherIcon = currentWeather.icon;
    fetchIcon(weatherIcon);
    city.textContent = address.toUpperCase();
    weather.textContent = `Temperature ${currentWeather.temp} ℃ / Precipitation Prob ${currentWeather.precipprob} %`;
  } catch (error) {
    console.log(error);
  }
}
