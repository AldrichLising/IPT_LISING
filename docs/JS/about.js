const text ="Hello! I'm Aldrich Lising, an aspiring IT professional with a strong passion for technology and innovation. Currently, I am pursuing a degree in Information Technology, where I have developed a broad skill set in software development, system administration, and troubleshooting.";
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