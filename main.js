// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});