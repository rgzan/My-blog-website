function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    const middleBar = document.querySelector('.bar.middle');
    menuItems.classList.toggle('open');
    middleBar.classList.toggle('hidden');s
}