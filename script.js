document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            sections.forEach(section => {
                if (section === targetSection) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("nav a");
    links.forEach(function(link) {
        link.addEventListener("click", function() {
            document.getElementById("bienvenida").style.display = "none";
        });
    });
});
