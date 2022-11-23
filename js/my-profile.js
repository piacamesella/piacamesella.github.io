let email=localStorage.getItem("usuario");
let inputEmail=document.getElementById("emailID");
let inputNombre=document.getElementById("primerNombre");
let inputSegundoNombre=document.getElementById("segundoNombre");
let inputApellido= document.getElementById("primerApellido");
let inputSegundoApellido= document.getElementById("segundoApellido");
let inputTel=document.getElementById("numeroTel");

// document.addEventListener("DOMContentLoaded",function(){
//   if(){
//     inputEmail.value=email && inputNombre.value=="" && inputSegundoNombre.value=="" && inputApellido.value=="" && inputSegundoApellido.value=="" && inputTel.value=="";
//   }
// })
document.getElementById("emailID").value=email;

document.addEventListener("DOMContentLoaded", function(){
    let email=localStorage.getItem("usuario");
    document.getElementById("emailIngresado").innerHTML=email;
    document.getElementById("miCarrito").addEventListener("click", function() {
        window.location = "cart.html"
    });
    document.getElementById("miPerfil").addEventListener("click", function() {
        if (email.valueOf!==""){
            window.location = "my-profile.html" 
        }
    });
    document.getElementById("cerrarSesion").addEventListener("click", function() {
        localStorage.removeItem("usuario");
        window.location = "index.html"
    });
    
});