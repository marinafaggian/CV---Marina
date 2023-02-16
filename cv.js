window.addEventListener("load", () => {
    const contExperiencia = document.querySelector(".contenedor-seccion-experiencia");
    console.log(contExperiencia);
    const botonExperiencia = document.querySelector(".cabezal-boton.experiencia");
    console.log(botonExperiencia);
    botonExperiencia.addEventListener("click", () => {
        contExperiencia.classList.toggle("height-0")
    });


    const contCoreuta = document.querySelector(".lista-coreuta");
    console.log(contCoreuta);
    const botonCoreuta = document.querySelector(".sub-cabezal.coreuta");
    console.log(botonCoreuta);
    botonCoreuta.addEventListener("click", () => {
        contCoreuta.classList.toggle("height-0")
    });
    
});



