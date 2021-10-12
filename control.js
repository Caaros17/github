let form = document.getElementById("form");
let input = document.getElementById("usuario");
let input = document.getElementById("clave");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    var usuario = usuario.value;

    if(!visualViewport.includes("@")){
        alert("No incluyo el caracter @");
    }
    else if(visualViewport.trim().lenght == 0){
        alert("Por favor ingrese su correo");
    } 
    else if(valor.includes("@") && valor.trim().lenght != 0){
        alert ("Formulario enviado exitosamente!");
    }

})