function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    const overlay = document.querySelector(".overlay");

    menuItems.classList.toggle('open');
    overlay.classList.toggle('open');
}

function validateForm(){
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const alertMessage = document.getElementById('alert-message');

    if (!name || !email || !message) {
        alertMessage.textContent = 'All field are required.';
        alertMessage.className = 'alert-error';
        alertMessage.classList.remove('hidden');
        setTimeout(() => {
            alertMessage.classList.add('hidden');
        }, 3000);
        return false;
    }
    alertMessage.textContent = 'Message sent successfully!';
    alertMessage.className = 'alert-success';
    alertMessage.classList.remove('hidden');
    return true;
}
document.addEventListener("DOMContentLoaded", function() {
document.querySelector('input[type="button"]').addEventListener('click', validateForm);
});