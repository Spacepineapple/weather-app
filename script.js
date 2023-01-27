let lat;
let lon;
let apiKey = localStorage.getItem("apiKey");
let cityName = "London";
let limit = 5;
let city = document.querySelector("#search-input").value;



let cityQueryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`


fetch(cityQueryURL)
    .then(response => response.json())
    .then(function(response) {
        console.log(response);
        lat = response[0].lat;
        lon = response[0].lon;
        let forecastQueryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        fetch(forecastQueryURL)
            .then(response => response.json())
            .then(function(response) {
                console.log(response);
                getCurrentConditions(response);
            })
    })

function getCurrentConditions(response) {
    let temperature = response.list[0].main.temp;
    let wind = response.list[0].wind.speed;
    let humidity = response.list[0].main.humidity;
    console.log(temperature);
    console.log(wind);
    console.log(humidity);
}