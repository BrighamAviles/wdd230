

let tempElement = document.getElementById('temp');
const windSpeedElement = document.getElementById('wind-speed');
const windChillElement = document.getElementById('wind-chill');

// Get the values from the elements and parse them
let temp = tempElement.textContent;
const windSpeed = parseFloat(windSpeedElement.textContent);

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    // Check if the values meet the specification limits
    if (temp <= 50 && windSpeed > 3.0) {
        // Calculate the wind chill using the formula
        const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2); // Round to 2 decimal places
    } else {
        return "N/A";
    }
}

// Calculate the wind chill and update the HTML
const windChill = calculateWindChill(temp, windSpeed);
windChillElement.textContent = windChill;
console.log(temp)

