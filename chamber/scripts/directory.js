// scripts/directory.js

document.addEventListener('DOMContentLoaded', function () {
    const listViewBtn = document.getElementById('list-view-btn');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const businessList = document.getElementById('business-list');

    listViewBtn.addEventListener('click', () => {
        businessList.classList.remove('grid-view');
        businessList.classList.add('list-view');
    });

    gridViewBtn.addEventListener('click', () => {
        businessList.classList.remove('list-view');
        businessList.classList.add('grid-view');
    });

    function renderBusinesses(members) {
        businessList.innerHTML = '';
        members.forEach(member => {
            const card = document.createElement('div');
            card.className = 'business-card';
            card.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <div>
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                </div>
            `;
            businessList.appendChild(card);
        });
    }

    // Fetch the JSON data
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            renderBusinesses(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

// Dark mode toggle functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
});