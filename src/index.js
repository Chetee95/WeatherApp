let currentDate = document.querySelector("#currentDay");
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

let day = currentTime.getDay();
let weekDay = [
    "Sunday","Monday","Tuesday",
    "Wednesday","Thursday","Friday",
    "Saturday"
];
console.log(weekDay[day]);

currentDate.innerHTML = `${weekDay[day]} ${hours}:${minutes}`;

function showTemp (response) {
    console.log(response.data.name);
    document.querySelector("#city").innerHTML = response.data.name; 
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    }

function search(event) {
    event.preventDefault();
    let apiKey = "87ad7e979cfb16d86dadb0ea56c6ac57";
    let city = document.querySelector("#city-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showTemp);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

