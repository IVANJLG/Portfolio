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

const cargarProyectos = async () => {
    const InfoProyectos = fetch("./proyectos.json").then((response) => {
        if (!response.ok) {
            throw new TypeError("La informacion no se ha podido recuperar con exito");
        }
        return response.json();
    }).then((data) => {
        //aqui se carga dinamicamente el contenido en el html de proyectos

        var proyectos = document.getElementsByClassName("infoProyectos")[0];

        for (let i = 0; i < data.proyectos.length; i++) {
            var nuevaSeccion = document.createElement("section");
            nuevaSeccion.classList.add("proyecto");
            //asignamos el titulo
            var tituloProyecto = document.createElement("h4");
            tituloProyecto.innerHTML = data.proyectos[i].titulo;
            nuevaSeccion.appendChild(tituloProyecto);

            var descripcionProyecto = document.createElement("p");
            descripcionProyecto.innerHTML = data.proyectos[i].descripcion;
            nuevaSeccion.appendChild(descripcionProyecto);

            var tecnologiasProyecto = document.createElement("p");
            tecnologiasProyecto.classList.add("tecnologias");

            var tecnologias = "";
            for (let j = 0; j < data.proyectos[i].tecnologias.length; j++) {
                tecnologias += data.proyectos[i].tecnologias[j];

                if (j != data.proyectos[i].tecnologias.length - 1) {
                    tecnologias += ", ";
                }
            }

            tecnologiasProyecto.innerHTML = '<i class="fa-solid fa-code"></i> ' + tecnologias;

            nuevaSeccion.appendChild(tecnologiasProyecto);

            //añadimos el proyecto a la lista
            proyectos.appendChild(nuevaSeccion);
        }
    }).catch((error) => {
        console.log(error);
    });
};

//cargar los datos de los proyectos de proyectos.json
window.addEventListener("load", cargarProyectos);

