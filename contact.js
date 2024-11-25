const text ="Phone: 09568591199";
const typingText = document.getElementById("typing");

let currentIndex = 0;
let typingSpeed = 20; 

function typeText() {
if (currentIndex < text.length) {
    typingText.textContent += text.charAt(currentIndex);
    currentIndex++;
    setTimeout(typeText, typingSpeed);
}
}

setTimeout(typeText, 1000);

const nav = document.querySelector('.navigation')
const navBtn = document.getElementById('navBtn')


var navOpen;
function navMenu() {
    nav.classList.toggle('active')
    navBtn.classList.toggle('active')
    if (!navOpen) {
        navBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        navOpen = true;
    } else {
        navBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        navOpen = false;
    }
}