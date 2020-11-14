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
const navBar = document.getElementById("navbar__list");
const mainSections = document.querySelectorAll(".landing__container");
const mainSectionParent = [];

function parent(sections) {
    for (const section of sections) {
        sectionParent = section.parentElement;
        mainSectionParent.push(sectionParent);
    }
}

parent(mainSections);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Check if section is in viewport
function inViewport(sec) {
    const position = sec.getBoundingClientRect();
    if (
        position.top >= 0 && position.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        position.left >= 0 && position.right <= (window.innerWidth || document.documentElement.clientWidth)) {
            sec.classList.add("your-active-class");
    } else {
            sec.classList.remove("your-active-class");

    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navSection(Items) {
    let i = 0;
    for (const item of Items) {
        const navListItem = document.createElement("li");
        navListItem.innerText = item.dataset.nav;
        navBar.appendChild(navListItem);
        navListItem.classList.add(`listItem${i}`);
        i++;
    }
}

navSection(mainSectionParent);

// Add class 'active' to section when near top of viewport
function activeClass(secs) {
    for (const sec of secs) {
        inViewport(sec);
    }
}

// Scroll to section using .scrollIntoView method
function scrollToSection() {
    for (let i=0; i<mainSectionParent.length; i++) {
        const navItem = document.getElementsByClassName(`listItem${i}`);
        navItem[0].addEventListener("click", function(){
            mainSectionParent[i].scrollIntoView({behavior:"smooth"})
        })
    }
}

scrollToSection()

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Set sections as active
document.addEventListener("scroll", function() {
    activeClass(mainSectionParent)
    })

