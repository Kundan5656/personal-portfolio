// Get the navigation links
const navLinks = document.querySelectorAll('.nav-links a');
const contentDiv = document.getElementById('content');

// Function to load content based on the clicked link
function loadContent(event) {
    event.preventDefault();
    const targetPage = event.target.getAttribute('href');
    fetch(targetPage)
        .then((response) => response.text())
        .then((data) => {
            contentDiv.innerHTML = data;
        });
}

// Add click event listeners to the navigation links
navLinks.forEach((link) => {
    link.addEventListener('click', loadContent);
});
