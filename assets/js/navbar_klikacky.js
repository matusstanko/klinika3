document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', function() {
        const submenu = this.nextElementSibling;
        submenu.classList.toggle('hidden');
        this.classList.toggle('open');  // Optional: to rotate the arrow when active
    });
});