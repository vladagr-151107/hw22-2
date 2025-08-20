import "./styles.css";
const city = "Odesa";
function updateCurrentTime(){
    const now = new Date();
    let hours = now.getHours();
    if(hours < 10){
        hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    const currentDay = now.getDate();
    const days = [ "Sunday", "Monday", "Tuesday", "Wednesday",
 "Thursday", "Friday", "Saturday",];
 const months = ["Jan","Feb","Mar", "Apr","May","Jun","Jul",
    "Aug","Sep","Oct","Nov","Dec",
  ];
  const month = months[now.getMonth()];
  const day = days[now.getDay()];
  const year = now.getFullYear();
  const dateElement = document.getElementById('date');
  const timeElement = document.getElementById('time');
  if(dateElement){
    dateElement.innerHTML = `${month} ${currentDay}, ${year} - ${day}`;
  }
  if(timeElement){
    timeElement.innerHTML = `${hours}:${minutes}`;
  }
}
function search(city){
    const apiKey = "c6fb9cf9fcf533911a33d1b36aed1619";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => showTemperature(data))
    .catch(error => console.log("Mistake with uploaading weather", error));
}
function showTemperature(response){
    document.getElementById('city').innerHTML  = `${city}`;
    const temperature = Math.round(response.main.temp);
    document.getElementById('temperature').innerHTML = `${temperature}°C`;
    const humidity = response.main.humidity;
    document.getElementById('humidity').innerHTML = `${humidity}%`;
    const pressure  =response.main.pressure;
    document.getElementById('pressure').innerHTML = `${pressure}Pa`;
    const wind = response.wind.speed;
    document.getElementById('wind').innerHTML = `${wind} km/h`;
    const feelsLike = response.main.feels_like;
    document.getElementById('feels-like').innerHTML = `Feels like ${feelsLike}°C`;
    const description = response.weather[0].description;
    document.getElementById('description').innerHTML = `${description}`;
    const iconCode = response.weather[0].icon;
    document.getElementById('icon').setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconCode}@2x.png`
  );
  document.getElementById('icon').setAttribute("alt", description);
} 
updateCurrentTime();
setInterval(updateCurrentTime, 60000); 
search(city);
document.getElementById("refresh").addEventListener("click", function () {
    search(city);
});