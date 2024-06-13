// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const offset = 60; // Height of the navbar

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#222';
        } else {
            navbar.style.backgroundColor = '#333';
        }

        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.clientHeight;
            const id = section.getAttribute('id');

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                document.querySelector('.nav-link.active')?.classList.remove('active');
                document.querySelector(`a[href="#${id}"]`).classList.add('active');
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({ 
                behavior: 'smooth'
            });
        });

        link.addEventListener('mouseenter', () => {
            link.style.color = '#FFD700'; // Gold color
        });

        link.addEventListener('mouseleave', () => {
            if (!link.classList.contains('active')) {
                link.style.color = 'white';
            }
        });
    });
});
