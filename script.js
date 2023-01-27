let lat;
let lon;
let apiKey = localStorage.getItem("apiKey");
let cityName = "London";
let limit = 5;
let city = document.querySelector("#search-input").value;
let today = document.querySelector("#today");
let forecast = document.querySelector("#forecast");
let todayDate = moment().format("D/M/YYYY");
let currentHour = moment().format("H");
let targetDate = moment().format()



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
                getFiveDayForecast(response);
            })
    })

function getCurrentConditions(response) {
    let temperature = response.list[0].main.temp-273;
    let wind = response.list[0].wind.speed;
    let humidity = response.list[0].main.humidity;
    let icon = response.list[0].weather[0].icon;
    today.innerHTML = `
        <h3>${cityName} ${todayDate}</h3><img src="http://openweathermap.org/img/wn/${icon}@2x.png">
        <p>Temp: ${temperature}</p>
        <p>Wind: ${wind}</p>
        <p>Humidity: ${humidity}</p>
    `;
    console.log(temperature);
    console.log(wind);
    console.log(humidity);
    console.log(icon);
}

function getFiveDayForecast(response) {
    let hourOffset = 8;
    for (let i=0; i<response.list.length; i+=hourOffset) {
        let temperature = response.list[i].main.temp-273;
        let wind = response.list[i].wind.speed;
        let humidity = response.list[i].main.humidity;
        let icon = response.list[i].weather[0].icon;
        let date = response.list[i].dt_txt;
        forecast.innerHTML = `
            <h3>${cityName} ${date}</h3><img src="http://openweathermap.org/img/wn/${icon}@2x.png">
            <p>Temp: ${temperature}</p>
            <p>Wind: ${wind}</p>
            <p>Humidity: ${humidity}</p>
        `;
        console.log(i);
    }
}