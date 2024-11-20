const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggleBtn.classList.toggle('active');

    // Change button icon between burger and cross
    if (toggleBtn.classList.contains('active')) {
        toggleBtn.innerHTML = '&#10005;'; // Unicode for cross icon
    } else {
        toggleBtn.innerHTML = '&#9776;'; // Unicode for burger icon
    }
});
