const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

const formacion = document.getElementsByClassName("formacion")[0];
const aptitudes = document.getElementsByClassName("aptitudes")[0];
const proyectos = document.getElementsByClassName("proyectos")[0];

observer.observe(formacion);
observer.observe(aptitudes);
observer.observe(proyectos);