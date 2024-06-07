document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
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
});

