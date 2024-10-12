function UpdateTime(){
    const d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;
document.getElementById('clock').innerHTML = `${hours}:${mins}:${secs}`;
}
setInterval(UpdateTime, 1000);

UpdateTime();

function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    const overlay = document.querySelector(".overlay");

    menuItems.classList.toggle('open');
    overlay.classList.toggle('open');
}