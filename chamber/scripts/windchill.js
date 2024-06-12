

// let tempElement = document.getElementById('temp');
// const windSpeedElement = document.getElementById('wind-speed');
// const windChillElement = document.getElementById('wind-chill');

// // Get the values from the elements and parse them
// let temp = tempElement.textContent;
// const windSpeed = parseFloat(windSpeedElement.textContent);

// // Function to calculate wind chill
// function calculateWindChill(temp, windSpeed) {
//     // Check if the values meet the specification limits
//     if (temp <= 50 && windSpeed > 3.0) {
//         // Calculate the wind chill using the formula
//         const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
//         return windChill.toFixed(2); // Round to 2 decimal places
//     } else {
//         return "N/A";
//     }
// }

// // Calculate the wind chill and update the HTML
// const windChill = calculateWindChill(temp, windSpeed);
// windChillElement.textContent = windChill;
// console.log(temp)

// Function to calculate wind chill
// Function to calculate wind chill
// Function to calculate wind chill
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
    let windspeedElement = document.getElementById("wind-speed");
    let windchillElement = document.getElementById("wind-chill");

    // Get input values
    let curtemp = parseFloat(tempElement.innerText);
    let windspeed = parseFloat(windspeedElement.innerText);

    // Calculate wind chill
    let windChill = calculateWindChill(curtemp, windspeed);

    // Display wind chill
    windchillElement.innerText = windChill;
}

// Update year and last modified date in the footer
document.getElementById("currentYear").innerText = new Date().getFullYear();
document.getElementById("lastModified").innerText = `Last Modified: ${document.lastModified}`;