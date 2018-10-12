window.addEventListener('load', ()=>{
    var container = document.getElementById("c1");
    /* ¿Qué es lo que contiene la variable container? R// Obtiene el elemento
    que tiene el id de "c1"*/

    container.innerText = "Hola Mundo!";
    /* ¿Que visualiza en el navegador? R//Aparece un texto "Hola Mundo" en 
    donde se encuentra el elemento que obtuvimos"*/

    container.style.backgroundColor = "#000000";
    container.style.color = "#1cb723";
    container.style.width = "200px";
    container.style.height = "200px";

    container.innerHTML = "<input type='text' placeholder= 'escriba su texto'>";

    /*  ¿Qué es lo que se muestra en pantalla? R// Muestra un input de tipo texto :v
    ¿Cuál es la diferencia entre las propiedades innerHtml e innerText? 
    R//innerText es para poner texto y innerHtml es para codigo en html*/

    var containers = document.querySelectorAll(".c2");

    /* ¿Qué almacena containers? R// Guarda las etiquetas que contiene
    la clase "c2" */

    containers.forEach(element=>{
        element.style.backgroundColor = "#009999";
        element.innerHTML = "<input type='text' placeholder='Escriba su texto'>";
    }) ;

    /* ¿Qué se mostrará en pantalla? R// Las clases que tenian por nombre "c2"
    fueron alteradoy se le cambio el color de cada uno de ellos*/

    /* ¿Qué se mostrará en pantalla? R// Los elementos fueron afectados y se 
    les agrego una etiqueta <input>

    ¿Cuál es la diferencia entre las propiedas innerText e innerHTML? 
    R//innerText es para poner texto y innerHtml es para codigo en html  */

    var boton = document.getElementById("btn-click");

    boton.onclick = function(evt){
        alert("Hola mundo");
    }

    var btnCopy = document.getElementById("btnCopy");

    btnCopy.onclick = function(evt){
        let msj = document.getElementById('textMsj').value;
        document.getElementById('showMsj').innerText = msj;
    }
    /*¿Qué es lo que sucedera después de darle click al botón? R//Copiara lo que se le escribio en un input */
    /* ¿Cuál es la difernecia entre value e innerText? Value es el valor que se encuentra
    esta en el input, y innerText es donde se retorna o donde se coloca el texto */
});

