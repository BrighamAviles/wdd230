document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for nav links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal functionality
    const modal = document.getElementById("modal");
    const btn = document.querySelector(".join-button");
    const span = document.querySelector(".close-button");

    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    btn.addEventListener('click', openModal);
    span.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Page visit counter
    let visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
        visitCount = 0;
    }
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visit-count').textContent = visitCount;

    // Hamburger menu functionality
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
    });

});


// Visit message logic
const visitMessageElement = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = Date.now();

if (lastVisit) {
    const daysBetween = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysBetween < 1) {
        visitMessageElement.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        visitMessageElement.textContent = "You last visited 1 day ago.";
    } else {
        visitMessageElement.textContent = `You last visited ${daysBetween} days ago.`;
    }
} else {
    visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem('lastVisit', currentVisit);

// Highlight current day on the calendar
const today = new Date();
const currentDay = today.getDate();
const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(); // Number of days in current month

const calendarTable = document.querySelector('.calendar-table');
const calendarCells = calendarTable.querySelectorAll('td');

calendarCells.forEach(cell => {
    if (cell.textContent === String(currentDay)) {
        cell.classList.add('current-day');
    }
});


window.onload = function () {
    document.getElementById('dateTime').value = Date.now();
};


document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');

    toggleSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
    });
});
