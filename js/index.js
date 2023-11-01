
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
