function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    const overlay = document.querySelector('.overlay');
    const middleBar = document.querySelector('.bar.middle');

    menuItems.classList.toggle('open');
    overlay.classList.toggle('open');
    middleBar.classList.toggle('hidden');
}
