//intentando hacer que la flecha de despliegue funcione

let listElements = document.querySelectorAll('.fa-circle-down');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');
        

    })

});