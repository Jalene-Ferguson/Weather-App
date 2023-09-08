// const apiKey = "31ae21a430ca5cb22c5509"
// const apiRootUrl = "https://api.openweathermap.org"
// const form = document.getElementById("search-form")
// const input = document.getElementById("search-input")
// const button = document.getElementById("search-btn")
// const todayContainer = document.getElementById("daily-weather")



// form.addEventListener("submit", searchFormSubmit)

// function searchFormSubmit(event) {
// console.log(event)
// event.preventDefault()

// const searchData = input.value.trim()
// console.log("searchData", searchData)

// getCoords(searchData)
// }

// function getCoords(city) {
//     apiUrl = `${apiRootUrl}/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
//     fetch(apiUrl)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//     console.log("data", data)
//     getWeather(data.lat, data.lon, city)
//     })
//     .catch(function (err) {
//       console.error(err);
//     });
// }

// function getWeather(lat, long, cityName) {
//     const apiUrl = `${apiRootUrl}/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`
//     fetch(apiUrl)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//     console.log("data", data)
//     renderTodayForcast(data)
//     })
//     .catch(function (err) {
//       console.error(err);
//     });
// }

// function renderTodayForcast(forecast) {
//     // variables for data from api
//   var iconUrl = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
//   var iconDescription = forecast.weather[0].description;
//   var tempF = forecast.main.temp;
//   var humidity = forecast.main.humidity;
//   var windMph = forecast.wind.speed;

//   // Create elements for a card
//   var col = document.createElement('div');
//   var card = document.createElement('div');
//   var cardBody = document.createElement('div');
//   var cardTitle = document.createElement('h5');
//   var weatherIcon = document.createElement('img');
//   var tempEl = document.createElement('p');
//   var windEl = document.createElement('p');
//   var humidityEl = document.createElement('p');

//   col.append(card);
//   card.append(cardBody);
//   cardBody.append(cardTitle, weatherIcon, tempEl, windEl, humidityEl);

//   // Add content to elements
//   weatherIcon.setAttribute('src', iconUrl);
//   weatherIcon.setAttribute('alt', iconDescription);
//   tempEl.textContent = `Temp: ${tempF} °F`;
//   windEl.textContent = `Wind: ${windMph} MPH`;
//   humidityEl.textContent = `Humidity: ${humidity} %`;

//   todayContainer.append(col);
// }