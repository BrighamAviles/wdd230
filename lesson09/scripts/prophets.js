// Declare the URL of the JSON resource
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Declare a const variable to select the HTML div element with id "cards"
const cards = document.querySelector('#cards');

// Define an async function to fetch data from the JSON source URL
async function getProphetData() {
    // Fetch the data from the URL
    const response = await fetch(url);

    // Convert the response to JSON
    const data = await response.json();

    // Log the data to the console for testing
    console.table(data.prophets);

    // Call the function to display the prophets
    displayProphets(data.prophets);
}

// Define the function to display the prophets
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        card.classList.add('card');

        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(portrait);

        // Add the section card to the "cards" div that was selected at the beginning of the script file
        cards.appendChild(card);
    });
}

// Call the function to fetch and process the data
getProphetData();
