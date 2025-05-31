
    const menuButton = document.getElementById('menu-button');
    const menuContent = document.getElementById('menu-content');
    const menuCloseButton = document.getElementById('close-button');

    menuButton.addEventListener('click', () => {
    menuContent.classList.toggle('show');
});

    menuCloseButton.addEventListener('click', () => {
    menuContent.classList.remove('show');
});
