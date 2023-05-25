let botonEncriptar = document.getElementById("boton-Encriptar");
let botonDesncriptar = document.getElementById("boton-Desencriptar");
let botonCopiar = document.getElementById("boton-Copiar");

let seccionSinRta =  document.getElementById("sin-rta");
var mensajeRta = document.getElementById("texto-rta");

botonEncriptar.onclick = encriptarTexto;
botonDesncriptar.onclick = desencriptarTexto;
botonCopiar.onclick = CopiarRta;

function encriptarTexto() {
    // Se captura el texto
    var mensaje = document.getElementById("mensaje").value;
    
    // Se encrita
    mensaje = mensaje.replace(/e/g, "enter");
    mensaje = mensaje.replace(/i/g, "imes");
    mensaje = mensaje.replace(/a/g, "ai");
    mensaje = mensaje.replace(/o/g, "ober");
    mensaje = mensaje.replace(/u/g, "ufat");

    //Ocuto sinRta, muestro conRta
    seccionSinRta.style.display = "none";
    mensajeRta.innerHTML="mensaje encriptado";

    // Se muestra mensaje enctriptado
    mensajeRta.innerHTML = mensaje;
}

function desencriptarTexto(){
    var mensaje = document.getElementById("mensaje").value;
    
    // Se encrita
    mensaje = mensaje.replace(/ufat/g, "u");
    mensaje = mensaje.replace(/ober/g, "o");
    mensaje = mensaje.replace(/ai/g, "a");
    mensaje = mensaje.replace(/imes/g, "i");
    mensaje = mensaje.replace(/enter/g, "e");
    
    //Ocuto sinRta, muestro conRta. Se deja por si se empieza desencriptando un msj
    seccionSinRta.style.display = "none";
    mensajeRta.innerHTML="mensaje encriptado";

    // Se muestra mensaje enctriptado
    mensajeRta.innerHTML = mensaje;
}

function CopiarRta (){
    var textoACopiar = document.getElementById("texto-rta")

    var seleccion = document.createRange();
    seleccion.selectNodeContents(textoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
    
}