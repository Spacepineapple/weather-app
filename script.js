let lat = "51.52588653564453";
let lon = "-0.3017457127571106";
let apiKey = localStorage.getItem("apiKey");
let cityName = "London";

let city = document.querySelector("#search-input").value;


//let queryURL = `https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={apiKey}`
let queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;


fetch(queryURL)
    .then(response => response.json())
    .then(function(response) {
        console.log(response);
    })
