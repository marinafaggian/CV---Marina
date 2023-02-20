window.addEventListener("load", () => {
   
    const contLateralizq = document.querySelector(".izquierda")
    console.log(contLateralizq);
    const botonLateral = document.querySelector(".fa-solid.fa-arrow-right-arrow-left")
    console.log(botonLateral);
    botonLateral.addEventListener("click", () => {
        contLateralizq.classList.toggle("lateral")
    });

    const contLateralder = document.querySelector(".derecha")
    console.log(contLateralder);
    const botonLateralder = document.querySelector(".fa-solid.fa-arrow-right-arrow-left")
    console.log(botonLateralder);
    botonLateralder.addEventListener("click", () => {
        contLateralder.classList.toggle("lateralder")
    });
    
      
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

    const botonFlechaCoreuta = document.querySelector(".fa-regular.fa-circle-down.coreuta")
    console.log(botonFlechaCoreuta)
    botonFlechaCoreuta.addEventListener("click", () => {
        botonFlechaCoreuta.classList.toggle("transition")
    });
    
    const contDirectora = document.querySelector(".lista.directora");
    console.log(contDirectora);
    const botonDirectora = document.querySelector(".sub-cabezal.directora");
    console.log(botonDirectora);
    botonDirectora.addEventListener("click", () => {
        contDirectora.classList.toggle("height-lista")
    });

    const botonFlechaDirectora = document.querySelector(".fa-regular.fa-circle-down.directora")
    console.log(botonFlechaDirectora)
    botonFlechaDirectora.addEventListener("click", () => {
        botonFlechaDirectora.classList.toggle("transition")
    });

    const contDocente = document.querySelector(".lista.docente");
    console.log(contDocente);
    const botonDocente = document.querySelector(".sub-cabezal.docente");
    console.log(botonDocente);
    botonDocente.addEventListener("click", () => {
        contDocente.classList.toggle("height-lista")
    });

    const botonFlechaDocente = document.querySelector(".fa-regular.fa-circle-down.docente")
    console.log(botonFlechaDocente)
    botonFlechaDocente.addEventListener("click", () => {
        botonFlechaDocente.classList.toggle("transition")
    });

    const contFormacion = document.querySelector(".contenedor-seccion-formacion");
    console.log(contFormacion);
    const botonFormacion = document.querySelector(".cabezal-boton.formacion");
    console.log(botonFormacion);
    botonFormacion.addEventListener("click", () => {
        contFormacion.classList.toggle("height-Form")
    });

    const botonFlechaFormacion = document.querySelector(".fa-regular.fa-circle-down.formacion")
    console.log(botonFlechaFormacion)
    botonFlechaFormacion.addEventListener("click", () => {
        botonFlechaFormacion.classList.toggle("transition")
    });

    const contAcademica = document.querySelector(".lista.academica");
    console.log(contAcademica);
    const botonAcademica = document.querySelector(".sub-cabezal.academica");
    console.log(botonAcademica);
    botonAcademica.addEventListener("click", () => {
        contAcademica.classList.toggle("height-lista")
    });

    const botonFlechaAcademica = document.querySelector(".fa-regular.fa-circle-down.academica")
    console.log(botonFlechaAcademica)
    botonFlechaAcademica.addEventListener("click", () => {
        botonFlechaAcademica.classList.toggle("transition")
    });

    const contCursos = document.querySelector(".lista.cursos");
    console.log(contCursos);
    const botonCursos = document.querySelector(".sub-cabezal.cursos");
    console.log(botonCursos);
    botonCursos.addEventListener("click", () => {
        contCursos.classList.toggle("height-lista")
    });

    const botonFlechaCursos = document.querySelector(".fa-regular.fa-circle-down.cursos")
    console.log(botonFlechaCursos)
    botonFlechaCursos.addEventListener("click", () => {
        botonFlechaCursos.classList.toggle("transition")
    });

    const contInfoad = document.querySelector(".contenedor-seccion-infoad");
    console.log(contInfoad);
    const botonInfoad = document.querySelector(".cabezal-boton.infoad");
    console.log(botonInfoad);
    botonInfoad.addEventListener("click", () => {
        contInfoad.classList.toggle("height-Infoad")
    });
    
    const botonFlechaInfoad = document.querySelector(".fa-regular.fa-circle-down.infoad")
    console.log(botonFlechaInfoad)
    botonFlechaInfoad.addEventListener("click", () => {
        botonFlechaInfoad.classList.toggle("transition")
    });
});