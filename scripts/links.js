const baseURL = "https://BrighamAviles.github.io/wdd230/";
const linksURL = "https://BrighamAviles.github.io/wdd230/data/links.json";

async function getLinksData() {
    try {
        const response = await fetch('data/links.json');

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        displayLinks(data.lessons); // Passing the lessons array to the displayLinks function
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Function to build and display the activity links
function displayLinks(weeks) {
    const container = document.getElementById('linksContainer');

    if (!container) {
        console.error('Container element not found');
        return;
    }

    weeks.forEach(week => {
        const weekDiv = document.createElement('div');
        weekDiv.className = 'week';
        weekDiv.innerHTML = `<h2>Week ${week.lesson}</h2>`;

        const linksList = document.createElement('ul');
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        weekDiv.appendChild(linksList);
        container.appendChild(weekDiv);
    });
}

// Usage
getLinksData();
