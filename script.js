document.getElementById('searchBtn').addEventListener('click', function() {
    var city = document.getElementById('cityInput').value;
    fetchWeather(city);
});

function fetchWeather(city) {
    var apiKey = '89aa06afa99f4d8ce74dc350b84a625f';
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            showWeather(data);
        })
        .catch(function(error) {
            console.log('Error:', error);
        });
}

function showWeather(data) {
    var weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '';

    var cityName = data.name;
    var temperature = Math.round(data.main.temp - 273.15); 
    var description = data.weather[0].description;

    var weatherHtml = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;

    weatherInfo.innerHTML = weatherHtml;
}
