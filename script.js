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

observer.observe(formacion);
observer.observe(aptitudes);
observer.observe(proyectos);