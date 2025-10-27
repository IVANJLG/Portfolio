const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

let lastScrollPosition = 0;
const formacion = document.getElementById("formacion");
const aptitudes = document.getElementById("aptitudes");
const proyectos = document.getElementById("proyectos");
const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
    //si aumenta el numero el menu nav se esconde y si disminuye se muestra
    if (window.scrollY > lastScrollPosition) {
        navbar.classList.add("navbarVisible");
        lastScrollPosition = window.scrollY;
        console.log("ESTA BAJANDO");
    } else {
        navbar.classList.remove("navbarVisible");
        console.log("ESTA SUBIENDO");
    }
});


observer.observe(formacion);
observer.observe(aptitudes);
observer.observe(proyectos);