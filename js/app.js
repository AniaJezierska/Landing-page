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
const navBar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/*Test if an element is in the viewport*/ 
const isInViewport = (elem) => {
	const bounding = elem.getBoundingClientRect();
	return (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(let i = 0; i < sections.length; i++){
    const newElement = document.createElement('li');
    newElement.className = 'menu__link';
    newElement.innerText = sections.dataset.nav;
    navbar.appendChild(newElement)
};    


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
window.addEventListener('scroll', function() {
    for (const section of sections) {
        if (inViewport(section)) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    }
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
