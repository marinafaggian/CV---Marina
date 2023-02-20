window.addEventListener("load", () => {
    const contExperiencia = document.querySelector(".contenedor-seccion-experiencia");
    console.log(contExperiencia);
    const botonExperiencia = document.querySelector(".cabezal-boton.experiencia");
    console.log(botonExperiencia);
    botonExperiencia.addEventListener("click", () => {
        contExperiencia.classList.toggle("height-Exp")
               
    });

    const botonFlechaExp = document.querySelector(".fa-regular.fa-circle-down.experiencia")
    console.log(botonFlechaExp)
    botonFlechaExp.addEventListener("click", () => {
        botonFlechaExp.classList.toggle("transition")
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

    const contFormacion = document.querySelector(".contenedor-seccion-formacion");
    console.log(contFormacion);
    const botonFormacion = document.querySelector(".cabezal-boton.formacion");
    console.log(botonFormacion);
    botonFormacion.addEventListener("click", () => {
        contFormacion.classList.toggle("height-Form")
    });

    const contAcademica = document.querySelector(".lista.academica");
    console.log(contAcademica);
    const botonAcademica = document.querySelector(".sub-cabezal.academica");
    console.log(botonAcademica);
    botonAcademica.addEventListener("click", () => {
        contAcademica.classList.toggle("height-lista")
    });

    const contCursos = document.querySelector(".lista.cursos");
    console.log(contCursos);
    const botonCursos = document.querySelector(".sub-cabezal.cursos");
    console.log(botonCursos);
    botonCursos.addEventListener("click", () => {
        contCursos.classList.toggle("height-lista")
    });

    const contInfoad = document.querySelector(".contenedor-seccion-infoad");
    console.log(contInfoad);
    const botonInfoad = document.querySelector(".cabezal-boton.infoad");
    console.log(botonInfoad);
    botonInfoad.addEventListener("click", () => {
        contInfoad.classList.toggle("height-Infoad")
    });
    
});