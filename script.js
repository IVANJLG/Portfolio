const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

const aptitudes = document.getElementsByClassName("aptitudes")[0];
const formacion = document.getElementsByClassName("formacion")[0];

observer.observe(aptitudes);
observer.observe(formacion);