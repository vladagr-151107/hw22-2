"use strict";

var city = "Odesa";
function updateCurrentTime() {
  var now = new Date();
  var hours = now.getHours();
  if (hours < 10) {
    hours = "0".concat(hours);
  }
  var minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0".concat(minutes);
  }
  var currentDay = now.getDate();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var month = months[now.getMonth()];
  var day = days[now.getDay()];
  var year = now.getFullYear();
  var dateElement = document.getElementById('date');
  var timeElement = document.getElementById('time');
  if (dateElement) {
    dateElement.innerHTML = "".concat(month, " ").concat(currentDay, ", ").concat(year, " - ").concat(day);
  }
  if (timeElement) {
    timeElement.innerHTML = "".concat(hours, ":").concat(minutes);
  }
}
function search(city) {
  var apiKey = "c6fb9cf9fcf533911a33d1b36aed1619";
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey, "&units=metric");
  fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    return showTemperature(data);
  })["catch"](function (error) {
    return console.log("Mistake with uploaading weather", error);
  });
}
function showTemperature(response) {
  document.getElementById('city').innerHTML = "".concat(city);
  var temperature = Math.round(response.main.temp);
  document.getElementById('temperature').innerHTML = "".concat(temperature, "\xB0C");
  var humidity = response.main.humidity;
  document.getElementById('humidity').innerHTML = "".concat(humidity, "%");
  var pressure = response.main.pressure;
  document.getElementById('pressure').innerHTML = "".concat(pressure, "Pa");
  var wind = response.wind.speed;
  document.getElementById('wind').innerHTML = "".concat(wind, " km/h");
  var feelsLike = response.main.feels_like;
  document.getElementById('feels-like').innerHTML = "Feels like ".concat(feelsLike, "\xB0C");
  var description = response.weather[0].description;
  document.getElementById('description').innerHTML = "".concat(description);
  var iconCode = response.weather[0].icon;
  document.getElementById('icon').setAttribute("src", "http://openweathermap.org/img/wn/".concat(iconCode, "@2x.png"));
  document.getElementById('icon').setAttribute("alt", description);
}
updateCurrentTime();
setInterval(updateCurrentTime, 60000);
search(city);
document.getElementById("refresh").addEventListener("click", function () {
  search(city);
});
