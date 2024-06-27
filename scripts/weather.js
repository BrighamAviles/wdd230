document.addEventListener('DOMContentLoaded', function () {
    // Select HTML elements
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');

    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.88&lon=87.63&appid=9c21468737a3f9f27c79846926994293';

    async function apiFetch() {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log(data); // Testing output
                displayResults(data); // Call displayResults function with fetched data
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    function displayResults(data) {
        currentTemp.innerHTML = `${data.main.temp}&deg;F`;
        const iconCode = data.weather[0].icon; // Example: "10d"
        const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
        const description = data.weather[0].description;

        weatherIcon.setAttribute('src', iconUrl);
        weatherIcon.setAttribute('alt', description);
        captionDesc.textContent = description;
    }

    apiFetch(); // Invoke the function to initiate the fetch process
});

