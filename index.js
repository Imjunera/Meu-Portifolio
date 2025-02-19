document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const themeToggle = document.getElementById('theme-toggle');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            sections.forEach(section => section.classList.remove('visible'));
            setTimeout(() => {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
                targetElement.classList.add('visible');
            }, 300);
        });
    });

    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });

        if (window.scrollY > 50) {
            header.style.top = '-100px';
        } else {
            header.style.top = '0';
        }
    });

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});