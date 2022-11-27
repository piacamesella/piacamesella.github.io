// let email=localStorage.getItem("usuario");
let inputEmail=document.getElementById("emailID");
let inputNombre=document.getElementById("primerNombre");
let inputSegundoNombre=document.getElementById("segundoNombre");
let inputApellido= document.getElementById("primerApellido");
let inputSegundoApellido= document.getElementById("segundoApellido");
let inputTel=document.getElementById("numeroTel");
let datoNombre="";
let datoSegundoNombre="";
let datoApellido="";
let datoSegundoApellido="";
let datoTel="";
let datos=[];
//
let datosPerfill;
let nombree;

// document.getElementById("guardarCambiosID").addEventListener("click", function(){
//     if(inputNombre.value!=="" && inputApellido.value!=="" && inputTel.value!==""){
//         datos={
//             nombre:inputNombre.value,
//             segundoNombre: inputSegundoNombre.value,
//             apellido: inputApellido.value,
//             segundoApellido:inputSegundoApellido.value,
//             emailLogin: email,
//             tel:inputTel.value,
//         };
//         // localStorage.setItem("datosPerfil",JSON.stringify(datos));
//         localStorage.setItem("datosPerfil",datos);
//         console.log(datos.nombre);
//         localStorage.setItem("nombre",inputNombre.value)
//     }
// })

// document.addEventListener("DOMContentLoaded", function(){
//     if(localStorage.getItem("datosPerfil")==null){
//         inputEmail.value=email && inputNombre.value=="" && inputSegundoNombre.value=="" && inputApellido.value=="" && inputSegundoApellido.value=="" && inputTel.value=="";
//     }else{
//         localStorage.getItem("datosPerfil");
//         inputNombre.value=localStorage.getItem("nombre");
//         inputApellido.value=localStorage.getItem("datosPerfil");
//         inputSegundoNombre.value=datos.segundoNombre
//         inputEmail.value=datos.emailLogin
//     }
// })

document.getElementById("guardarCambiosID").addEventListener("click", function(){
    if(inputNombre.value!=="" && inputApellido.value!=="" && inputTel.value!==""){
        localStorage.setItem("nombre",inputNombre.value);
        localStorage.setItem("segundoNombre",inputSegundoNombre.value)
        localStorage.setItem("apellido",inputApellido.value)
        localStorage.setItem("segundoApellido",inputSegundoApellido.value)
        localStorage.setItem("tel",inputTel.value)
        };
    }
)

document.addEventListener("DOMContentLoaded", function(){
    if(localStorage.getItem("nombre")==null && localStorage.getItem("apellido")==null && localStorage.getItem("tel")==null){
        inputEmail.value=document.getElementById("emailIngresado").value && inputNombre.value=="" && inputSegundoNombre.value=="" && inputApellido.value=="" && inputSegundoApellido.value=="" && inputTel.value=="";
    }else{
        inputNombre.value=localStorage.getItem("nombre");
        inputSegundoNombre.value=localStorage.getItem("segundoNombre");
        inputApellido.value=localStorage.getItem("apellido");
        inputSegundoApellido.value=localStorage.getItem("segundoApellido");
        inputEmail.value=localStorage.getItem("usuario");
        inputTel.value=localStorage.getItem("tel");
    }
})

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
        window.location = "index.html"
    });
    
  });