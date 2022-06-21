console.log("Hola");

let popup = document.getElementById("popup");

function abrirPopup(){
    popup.classList.add("open-popup");
}

function cerrarPopup(){

}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })