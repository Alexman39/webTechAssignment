
    const menuButton = document.getElementById('menu-button');
    const menuContent = document.getElementById('menu-content');
    const menuCloseButton = document.getElementById('close-button');

    menuButton.addEventListener('click', () => {
    menuContent.classList.toggle('show');
});

    menuCloseButton.addEventListener('click', () => {
    menuContent.classList.remove('show');
});

    window.addEventListener('DOMContentLoaded', () => {
        const track = document.querySelector('.carousel-track');
        const images = Array.from(track.children);

        // Duplicate images for seamless scrolling
        images.forEach(img => {
            const clone = img.cloneNode(true);
            track.appendChild(clone);
        });
    });