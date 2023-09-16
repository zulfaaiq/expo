// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// hamburger menu on click
document.querySelector('#hamburger-menu').onclick = ()  => {
    navbarNav.classList.toggle('active');
};

// sidebar gone with click in another place
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// duplicate logo carousel
const copy = document.querySelector(".logo-slide").cloneNode(true);

document.querySelector('.logos').appendChild(copy);