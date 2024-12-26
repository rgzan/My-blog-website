function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    const overlay = document.querySelector('.overlay');

    menuItems.classList.toggle('open');
    overlay.classList.toggle('open');

    console.log("Menu toggled:", menuItems.classList.contains('open'));
}
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const alertMessage = document.getElementById('alert-message');
    const formContainer = document.querySelector('.form');

    if (!name || !email || !message) {
        alertMessage.textContent = 'All fields are required.';
        alertMessage.className = 'alert-error';
        formContainer.appendChild(alertMessage);
        alertMessage.classList.remove('hidden');
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alertMessage.textContent = 'Please enter a valid email address.';
        alertMessage.className = 'alert-error';
        alertMessage.classList.remove('hidden');
        formContainer.appendChild(alertMessage);
        return false;
    }
    alertMessage.textContent = 'Message sent successfully!';
    alertMessage.className = 'alert-success';
    alertMessage.classList.remove('hidden');
    setTimeout(() => {
        alertMessage.classList.add('hidden');
    }, 3000);
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    return true;
}
document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.querySelector('input[type="button"]');
    sendButton.addEventListener('click', validateForm);
});