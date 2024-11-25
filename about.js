const text = `
    I am Aldrich Lising, a dedicated student at City of Malabon University, currently pursuing a Bachelor of Science in Information Technology.
    I have a strong passion for programming, particularly in web development, and I enjoy creating user-friendly and visually appealing websites.
    In my free time, I love exploring the latest technological trends, engaging in coding challenges, and working on personal projects.

    Besides my academic pursuits, I am also interested in graphic design, digital illustration, and learning about the intersection of technology and creativity.
    I'm a proactive learner, always seeking to expand my skill set in areas like software development, data analysis, and cloud computing.

    On this page, you’ll discover my educational journey, the skills I've developed, and the projects I've completed. Feel free to explore my portfolio,
    and don't hesitate to reach out if you’d like to connect or collaborate on a tech project! Let’s create something amazing together!
`;

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

const nav = document.querySelector('.navigation');
const navBtn = document.getElementById('navBtn');
let navOpen = false;

function navMenu() {
    nav.classList.toggle('active');
    navBtn.classList.toggle('active');
    navOpen = !navOpen;
    navBtn.innerHTML = navOpen ? `<i class="fa-solid fa-xmark"></i>` : `<i class="fa-solid fa-bars"></i>`;
}
