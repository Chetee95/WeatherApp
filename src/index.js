let currentDate = document.querySelector("#currentDay");
let currentTime = new Date();
let hours = currentTime.getHours();
if (hours < 10) {
    hours = `0${hours}`
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`
}

let day = currentTime.getDay();
let weekDay = [
    "Sunday","Monday","Tuesday",
    "Wednesday","Thursday","Friday",
    "Saturday"
];

currentDate.innerHTML = `${weekDay[day]} ${hours}:${minutes}`;

function showTemp (response) {
    document.querySelector("#city").innerHTML = response.data.name; 
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#description").innerHTML = response.data.weather[0].description;
    }

function search(event) {
    event.preventDefault();
    let apiKey = "87ad7e979cfb16d86dadb0ea56c6ac57";
    let city = document.querySelector("#city-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showTemp);
}

function showfahrenheitLink(event) {
    event.preventDefault();
    let tempElement = document.querySelector("#fahrenheit-link");
    let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
    tempElement.innerHTML = Math.round(tempElement);
}

function showCelsiusLink(event) {
    event.preventDefault();
    let tempElement = document.querySelector("#fahrenheit-link");
    let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
    tempElement.innerHTML = Math.round(tempElement);
}

let celsiusTemp = null;

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showfahrenheitLink);

let celsiusLink = document.querySelector("#celsius-link");
fahrenheitLink.addEventListener("click", showCelsiusLink);

