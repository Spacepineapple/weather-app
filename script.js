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
            })
    })

