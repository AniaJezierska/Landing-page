/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const navBar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// Build the nav
sections.forEach((sections) => {
    const navElement = document.createElement('li');
    navElement.className = 'menu__link';
    navElement.dataset.nav = sections.id;
    navElement.innerText = sections.dataset.nav;
    navBar.appendChild(navElement);
});

// Scroll to section on click.
navBar.addEventListener('click', (event) => {
    event.preventDefault();
    const clicked = document.querySelector(`#${event.target.dataset.nav}`);
    clicked.scrollIntoView({
        behavior: 'smooth',
    });
});


// Add class 'active' to section when near top of viewport

function isInViewport(elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top + 150 >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 150 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', activSection);

function activSection() {
    const eachSec = document.querySelectorAll('section');
    for (i = 0; i < eachSec.length; i++) {
        if (!isInViewport(eachSec[i])) {
            eachSec[i].classList.remove('your-active-class');
        } else {
            eachSec[i].classList.add('your-active-class');
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active
