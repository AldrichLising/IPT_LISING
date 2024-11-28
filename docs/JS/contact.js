function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    menuBtn.classList.toggle('menu-open');
    dropdownContent.classList.toggle('show');
}
