window.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const images = Array.from(track.children);

    // Duplicate images for seamless scrolling
    images.forEach(img => {
        const clone = img.cloneNode(true);
        track.appendChild(clone);
    });
});