// Select the hamburger button and navigation menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Add click event to toggle the 'show' class on the nav
hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Close the navigation menu when a link is clicked
document.addEventListener("DOMContentLoaded", () => {
    function toggleDetails(id) {
        const element = document.getElementById(id);
        element.style.display = element.style.display === "none" ? "block" : "none";
    }

    // Attach toggleDetails to all buttons with the class 'toggle-files'
    document.querySelectorAll('.toggle-files').forEach((button) => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('onclick').match(/'([^']+)'/)[1];
            toggleDetails(targetId);
        });
    });
});

