document.addEventListener('DOMContentLoaded', function () {
    const currentTemp = document.getElementById('current-temp');
    const weatherDesc = document.getElementById('weather-desc');
    const weatherIcon = document.getElementById('weather-icon');
    const forecastContainer = document.getElementById('forecast');

    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const chamberLat = 41.88;
    const chamberLon = -87.63;

    // Fetch current weather data
    async function fetchCurrentWeather() {
        const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.88&lon=87.63&appid=9c21468737a3f9f27c79846926994293';

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data = await response.json();
            console.log(data); // For testing purposes

            // Update DOM with current weather data
            currentTemp.textContent = `${data.main.temp} °C`;
            weatherDesc.textContent = data.weather[0].description;
            const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            weatherIcon.src = iconUrl;
        } catch (error) {
            console.error('Error fetching current weather:', error);
        }
    }

    // Fetch 3-day forecast data
    async function fetchForecast() {
        const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.88&lon=87.63&appid=9c21468737a3f9f27c79846926994293';

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch forecast data');
            }
            const data = await response.json();
            console.log(data); // For testing purposes

            // Process forecast data and display
            const forecasts = data.list.slice(0, 3); // Take first 3 forecasts
            forecastContainer.innerHTML = ''; // Clear previous content

            forecasts.forEach(forecast => {
                const forecastDate = new Date(forecast.dt * 1000);
                const temp = forecast.main.temp;
                const weatherDesc = forecast.weather[0].description;

                const forecastElement = document.createElement('div');
                forecastElement.classList.add('forecast-item');
                forecastElement.innerHTML = `
                    <p>${forecastDate.toDateString()}</p>
                    <p>${temp} °C</p>
                    <p>${weatherDesc}</p>
                `;
                forecastContainer.appendChild(forecastElement);
            });
        } catch (error) {
            console.error('Error fetching forecast data:', error);
        }
    }

    // Execute functions to fetch and display weather data
    fetchCurrentWeather();
    fetchForecast();
});
