const apiKey = "31ae21a430ca5cb22c5509fdc6da024c";
const input = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");
const weatherDiv = document.querySelector(".weather-card")
const todayContainer = document.querySelector(".daily-weather");

const createWeatherCard = (cityName, weatherItem) => {
    if(index === 0) {
    return `<div class="details">
        <h2>${cityName} (${weatherItem.dt_txt.split(" ")[0]})</h2>
        <h4>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°F</h4>
        <h4>Wind: ${weatherItem.wind.speed} MPH</h4>
        <h4>Humidity: ${weatherItem.main.humidity} %</h4>
            </div>`;
    }else {
        return `<li class="card">
        <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
        <h4>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°F</h4>
        <h4>Wind: ${weatherItem.wind.speed} MPH</h4>
        <h4>Humidity: ${weatherItem.main.humidity} %</h4>
    </li>`;
    }
}

const getWeather = (cityName, lat, lon) => {
    const weatherApiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(weatherApiUrl).then(res => res.json()).then(data => {
        const uniqueForecastDays = [];
        const fiveDayForecast = data.list.filter(forecast => {
            const forecastDate = new Date(forecast.dt_txt).getDate();
            if(uniqueForecastDays.includes(forecastDate)) {
                return uniqueForecastDays.push(forecastDate);
            }
        });

        cityInput.value = "";
        todayContainer.innerHTML ="";
        weatherDiv.innerHTML = "";

        fiveDayForecast.forEach(weatherItem => {
            if(index === 0) {
                todayContainer.insertAdjacentHTML("beforeend", createWeatherCard(cityName, weatherItem));
            } else {
            weatherDiv.insertAdjacentHTML("beforeend", createWeatherCard(cityName, weatherItem));
            }
        });
    }).catch(() => {
        alert("Error occurred2.");
    });
}

const getCityCoords = () => {
    const cityName = input.value.trim();
    if(!cityName) return;
    const geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;

    fetch(geoApiUrl).then(res => res.json()).then(data => {
        if(!data.length) return alert(`${cityName} coordinates not found`);
        const { name, lat, lon } = data[0];
        getWeather(name, lat, lon);
    }).catch(() => {
        alert("Error occurred1.");
    });
}

searchButton.addEventListener("click", getCityCoords);