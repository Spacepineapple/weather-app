let lat = "51.52588653564453";
let lon = "-0.3017457127571106";
let apiKey = "204554443c50d8fae62b9fffc22f9589";

let queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;


fetch(queryURL)
    .then(response => response.json())
    .then(function(response) {
        console.log(response);
    })
