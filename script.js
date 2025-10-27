const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

const formacion = document.getElementById("formacion");
const aptitudes = document.getElementById("aptitudes");
const proyectos = document.getElementById("proyectos");
const navbar = document.getElementById("mainNavbar");

let lastScrollPosition = 0;
window.addEventListener("scroll", () => {
    //ScrollY es 0 en la parte de arriba y aumenta segun bajas

    //si aumenta el numero el menu nav se esconde y si disminuye se muestra
    if (window.scrollY > lastScrollPosition) {
        navbar.classList.add("navbarVisible");
    } else {
        navbar.classList.remove("navbarVisible");
    }
    lastScrollPosition = window.scrollY;
});


observer.observe(formacion);
observer.observe(aptitudes);
observer.observe(proyectos);