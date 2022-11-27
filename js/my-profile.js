let email=localStorage.getItem("usuario");
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
let datosLocal=[];

// function nombreIngresado(){
//     datoNombre=inputNombre.value;
// }

// function segundoNombreIngresado(){
//     datoSegundoNombre=inputSegundoNombre.value;
// }

// function apellidoIngresado(){
//     datoApellido=inputApellido.value;
// }

// function segundoApellidoIngresado(){
//     datoSegundoApellido=inputSegundoApellido.value;
// }

// function telIngresado(){
//     datoTel=inputTel.value;
// }


// document.addEventListener("DOMContentLoaded",function(){
//   if(localStorage.getItem("datosPerfil")=""){
//     inputEmail.value=email && inputNombre.value=="" && inputSegundoNombre.value=="" && inputApellido.value=="" && inputSegundoApellido.value=="" && inputTel.value=="";
//   }
// })


document.getElementById("guardarCambiosID").addEventListener("click", function(){
    if(inputNombre.value!=="" && inputApellido.value!=="" && inputTel.value!==""){
        let datos={
            nombre:inputNombre.value,
            segundoNombre: inputSegundoNombre.value,
            apellido: inputApellido.value,
            segundoApellido:inputSegundoApellido.value,
            emailLogin: email,
            tel:inputTel.value,
        };
        datosLocal.push(datos);
        localStorage.setItem("datosPerfil",JSON.stringify(datos));
        console.log(datos.nombre);
    }
})

document.addEventListener("DOMContentLoaded", function(){
    if(localStorage.getItem("datosPerfil")==null){
        inputEmail.value=email && inputNombre.value=="" && inputSegundoNombre.value=="" && inputApellido.value=="" && inputSegundoApellido.value=="" && inputTel.value=="";
    }else{
        localStorage.getItem("datosPerfil");
        inputNombre.value=datos.nombre;
        inputApellido.value=datos.apellido;
    }
})

document.getElementById("emailID").innerHTML=email;

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