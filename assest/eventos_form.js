let botonBorrar =document.getElementById("borrarForm");
let formulario = document.getElementById("formulario");

botonBorrar.addEventListener("click", function(e){
    e.preventDefault();
    formulario.reset();
})