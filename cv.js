window.addEventListener("load", () => {
    const contExperiencia = document.querySelector(".contenedor-seccion-experiencia");
    console.log(contExperiencia);
    const botonExperiencia = document.querySelector(".cabezal-boton.experiencia");
    console.log(botonExperiencia);
    botonExperiencia.addEventListener("click", () => {
        contExperiencia.classList.toggle("height-Exp")
    });


    const contCoreuta = document.querySelector(".lista.coreuta");
    console.log(contCoreuta);
    const botonCoreuta = document.querySelector(".sub-cabezal.coreuta");
    console.log(botonCoreuta);
    botonCoreuta.addEventListener("click", () => {
        contCoreuta.classList.toggle("height-lista")
    });
    
    const contDirectora = document.querySelector(".lista.directora");
    console.log(contDirectora);
    const botonDirectora = document.querySelector(".sub-cabezal.directora");
    console.log(botonDirectora);
    botonDirectora.addEventListener("click", () => {
        contDirectora.classList.toggle("height-lista")
    });

    const contDocente = document.querySelector(".lista.docente");
    console.log(contDocente);
    const botonDocente = document.querySelector(".sub-cabezal.docente");
    console.log(botonDocente);
    botonDocente.addEventListener("click", () => {
        contDocente.classList.toggle("height-lista")
    });

});



