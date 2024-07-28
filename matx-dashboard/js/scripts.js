// Event listener for page navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.side-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('href');
            loadPage(page);
        });
    });

    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                document.querySelector('.main-content').innerHTML = html;
            })
            .catch(error => console.error('Error loading page:', error));
    }
});
