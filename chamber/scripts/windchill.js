

function calculateWindChill(temp, windspeed) {
    if (temp <= 50 && windspeed > 3) {
        let windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16));
        return windChill.toFixed(2);
    } else {
        return "N/A";
    }
}

// Function to read input values, calculate wind chill, and display it
function calculateAndDisplayWindChill() {
    let tempElement = document.getElementById("temp");
    let windspeedElement = document.getElementById("windspeed");
    let windchillElement = document.getElementById("windchill");

    // Get input values
    let curtemp = parseFloat(tempElement.value);
    let windspeed = parseFloat(windspeedElement.value);

    // Calculate wind chill
    let windChill = calculateWindChill(curtemp, windspeed);

    // Display wind chill
    windchillElement.innerText = windChill;
}

// Update year and last modified date in the footer
document.getElementById("currentYear").innerText = new Date().getFullYear();
document.getElementById("lastModified").innerText = `Last Modified: ${document.lastModified}`;