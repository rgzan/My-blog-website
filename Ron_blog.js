function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    const overlay = document.querySelector(".overlay");

    menuItems.classList.toggle('open');
    overlay.classList.toggle('open');
}
