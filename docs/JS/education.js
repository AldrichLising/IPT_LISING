const text = `ELEMENTARY: Bangkulasi Elementary School
JUNIOR HIGH SCHOOL: Navotas National High School
SENIOR HIGH SCHOOL: Filemon T. Lizan Senior High School
COLLEGE: City of Malabon University`;

const typingText = document.getElementById("typing");

let currentIndex = 0;
let typingSpeed = 20; 

// Function to type out the text character by character
function typeText() {
    if (currentIndex < text.length) {
        // Check for newlines and replace them with <br> for proper line breaks in HTML
        let char = text.charAt(currentIndex);
        if (char === '\n') {
            typingText.innerHTML += "<br>";
        } else {
            typingText.innerHTML += char;
        }
        currentIndex++;
        setTimeout(typeText, typingSpeed);
    }
}

// Start typing after 1 second
setTimeout(typeText, 1000);

// Navigation menu toggle
const nav = document.querySelector('.navigation');
const navBtn = document.getElementById('navBtn');

let navOpen = false; // Initialize navOpen to track state

function navMenu() {
    nav.classList.toggle('active');
    navBtn.classList.toggle('active');

    if (!navOpen) {
        navBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        navOpen = true;
    } else {
        navBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        navOpen = false;
    }
}
