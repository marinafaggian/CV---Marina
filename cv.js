window.addEventListener("load", () => {
    const contExperiencia = document.querySelector(".contenedor-seccion-experiencia");
    console.log(contExperiencia);
    const botonExperiencia = document.querySelector(".cabezal-boton.experiencia");
    console.log(botonExperiencia);
    botonExperiencia.addEventListener("click", () => {
        contExperiencia.classList.toggle("height-0")
    });
});




