const body = document.body;
body.style.background = 'black';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const movingLetters = [];

letters.forEach(letter => {
  movingLetters.push({
    char: letter.toUpperCase(),
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speedX: (Math.random() - 0.5) * 2,
    speedY: (Math.random() - 0.5) * 2,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 2,
    opacity: Math.random(),
    fadeSpeed: Math.random() * 0.01,
    curveAmplitude: Math.random() * 1 + 5,
    curveFrequency: Math.random() * 0.1 + 0.1,
  });
});

function animation() {
  ctx.clearRect(0,0, canvas.width, canvas.height);

movingLetters.forEach(letter => {
  ctx.save();

  ctx.globalAlpha = letter.opacity;
  ctx.translate(letter.x, letter.y);
  ctx.rotate((letter.rotation * Math.PI) / 180);

  ctx.font = '20px Arial, sans-serif';
  ctx.fillStyle = 'lime';
  ctx.fillText(letter.char,0,0);

  ctx.restore();

  letter.x += letter.speedX;
  letter.y += letter.speedY;
  letter.rotation += letter.rotationSpeed;
  letter.opacity += letter.fadeSpeed;

  letter.y += Math.sin(letter.x * letter.curveFrequency) * letter.curveAmplitude;

  if (letter.x < 0 || letter.x > canvas.width) letter.speedX *= -1;
  if (letter.y < 0 || letter.y > canvas.height) letter.speedY *= -1;
  if (letter.opacity <= 0 || letter.opacity >= 1) letter.fadeSpeed *= -1;
});
requestAnimationFrame(animation);
}
animation();


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