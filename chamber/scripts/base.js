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
});


