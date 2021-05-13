let input = document.getElementById("email");
input.value = "a329898@uach.mx";

let button = document.getElementById("show");
let button2 = document.getElementById("hide");

function mostrarPassword(){
 let password = document.getElementById("pass");
 password.type = "text";
}
function ocultarPassword(){
 let password = document.getElementById("pass");
 password.type = "password";
}

button.onclick = mostrarPassword;
button2.onclick = ocultarPassword;
