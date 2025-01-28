document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links-container');

    hamburger.addEventListener('click', function() {
        if (navLinks.style.transform === 'translateY(0%)') {
            navLinks.style.transform = 'translateY(-100%)'; // Hide menu
        } else {
            navLinks.style.transform = 'translateY(0%)'; // Show menu
        }
    });
});