import "./style.css";
import fetchWeather from "./fetchWeather";

function checkWeather() {
  const searchBtn = document.querySelector(".searchBtn");
  searchBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const location = document.querySelector("#search").value;
    fetchWeather(location);
  });
}
fetchWeather();
checkWeather();
