
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
    });
});

function togglePopup(popupId) {
    var popupText = document.getElementById(popupId);
    popupText.style.display = (popupText.style.display === "none" || popupText.style.display === "") ? "block" : "none";
}
// Get references to the sections and the element to change color
const section1 = document.getElementById('section1-title');
const section2 = document.getElementById('section2-title');
const section3 = document.getElementById('section3-title');
const section3_1 = document.getElementById('section3_1-title');
const section3_2 = document.getElementById('section3_2-title');

const elementToChangeColor = document.getElementById('main-menu');
const items = document.querySelectorAll('.nav-item');

function changeNavItemsColor(color) {
    items.forEach(item => {
        // Select all child elements of the current "item"
        const children = item.querySelectorAll('*');

        // Loop through and change the text color of each child
        children.forEach(child => {
            child.style.color = color; // Change the color to red (or your desired color)
        });
    });
}


// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Event listener for the scroll event
window.addEventListener('scroll', function () {
    if(isElementInViewport(section1)){
        elementToChangeColor.classList.add('section1-background');
        elementToChangeColor.classList.remove('section2-background');
        elementToChangeColor.classList.remove('section3-background');
        elementToChangeColor.classList.remove('section-background');
        changeNavItemsColor('white')
    }
    else if (isElementInViewport(section2)) {
        elementToChangeColor.classList.remove('section1-background');
        elementToChangeColor.classList.add('section2-background');
        elementToChangeColor.classList.remove('section3-background');
        changeNavItemsColor('white')
    } else if (isElementInViewport(section3) || isElementInViewport(section3_1) || isElementInViewport(section3_2)) {

        elementToChangeColor.classList.remove('section1-background');
        elementToChangeColor.classList.remove('section2-background');
        elementToChangeColor.classList.remove('section-background');
        elementToChangeColor.classList.add('section3-background');
        changeNavItemsColor('#444444')
    }
    else {
        elementToChangeColor.classList.remove('section1-background');
        elementToChangeColor.classList.remove('section2-background');
        elementToChangeColor.classList.remove('section3-background');
        elementToChangeColor.classList.add('section-background');
        //elementToChangeColor.classList.add('text-black');
        changeNavItemsColor('#444444')

    }
});
