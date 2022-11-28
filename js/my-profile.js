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
let datos=[];
let nombre="";
let segundoNombre="";
let apellido="";
let segundoApellido="";
let emailLogin="";
let tel="";


// arrayDatos=JSON.parse(datosGuardados);
// function datosCampos(datosCampos){
//     localStorage.setItem("datosPerfil");
//     JSON.stringify(datosCampos)
// }
// //
// let datosPerfill;
// let nombree;
//función para guardar datos perfil:
// function guardarDatos(campoNombre,campoSegundoNombre,campoApellido,campoSegundoApellido,emailIngresado,campoTel){
//     datos={
//         nombre:campoNombre.value,
//         segundoNombre: campoSegundoNombre.value,
//         apellido: campoApellido.value,
//         segundoApellido:campoSegundoApellido.value,
//         emailLogin: emailIngresado,
//         tel:campoTel.value,
//     }
//     // localStorage.setItem("datosPerfil",datos);
//     localStorage.setItem("datosPerfil",JSON.stringify(datos));
// }
//función para mostrar datos:
// function mostrarDatos(datosIngresados){
//     inputNombre.value=datosIngresados.nombre
//     inputSegundoNombre.value=datosIngresados.segundoNombre
//     inputApellido.value=datosIngresados.apellido
//     inputSegundoApellido.value=datosIngresados.segundoApellido
//     inputEmail.value=datosIngresados.emailLogin
//     inputTel.value=datosIngresados.tel
// }

//función que valida si los datos pueden ser guardados y llama a la función guardar datos:
// document.getElementById("guardarCambiosID").addEventListener("click", function(){
//     if(inputNombre.value!=="" && inputApellido.value!=="" && inputTel.value!==""){
//         guardarDatos(inputNombre,inputSegundoNombre,inputApellido,inputSegundoApellido,email,inputTel)
//         // localStorage.setItem("datosPerfil",JSON.stringify(datos));
//     }else{
//         alert("Debes completar los campos obligatorios(*)");
//     }
// });
// //mostrar datos dependiendo de si el usuario ya ha ingresado o no:
// document.addEventListener("DOMContentLoaded", function(){
//     if(localStorage.getItem("datosPerfil")==null){
//         inputEmail.value=email && inputNombre.value=="" && inputSegundoNombre.value=="" && inputApellido.value=="" && inputSegundoApellido.value=="" && inputTel.value=="";
//     }else{
//         mostrarDatos(datos);
//     }
// })

function mostrarDatos(datosIngresados){
    inputNombre.value=datosIngresados.nombre
    inputSegundoNombre.value=datosIngresados.segundoNombre
    inputApellido.value=datosIngresados.apellido
    inputSegundoApellido.value=datosIngresados.segundoApellido
    inputEmail.value=datosIngresados.emailLogin
    inputTel.value=datosIngresados.tel
}

document.getElementById("guardarCambiosID").addEventListener("click", function(){
    if(inputNombre.value!=="" && inputApellido.value!=="" && inputTel.value!==""){
        datos={
            nombre:inputNombre.value,
            segundoNombre: inputSegundoNombre.value,
            apellido: inputApellido.value,
            segundoApellido:inputSegundoApellido.value,
            emailLogin: email,
            tel:inputTel.value,
        }
            // localStorage.setItem("datosPerfil",datos);
            localStorage.setItem("datosPerfil",JSON.stringify(datos));
    }else{
        alert("Debes completar los campos obligatorios(*)");
    }
});
//mostrar datos dependiendo de si el usuario ya ha ingresado o no:
document.addEventListener("DOMContentLoaded", function(){
    if(localStorage.getItem("datosPerfil")==null){
        inputEmail.value=email && inputNombre.value=="" && inputSegundoNombre.value=="" && inputApellido.value=="" && inputSegundoApellido.value=="" && inputTel.value=="";
    }else{
        datos=JSON.parse(localStorage.getItem("datosPerfil"));
        if(datos.emailLogin=email){
            mostrarDatos(datos);
            console.log(datos);
            console.log(datos.emailLogin)
        }
        // mostrarDatos(datos);
        // inputNombre.value=datos.nombre
        // inputSegundoNombre.value=datos.segundoNombre
        // inputApellido.value=datos.apellido
        // inputSegundoApellido.value=datos.segundoApellido
        // inputEmail.value=datos.emailLogin
        // inputTel.value=datos.tel
        // console.log(datos);
    }
})

// document.getElementById("guardarCambiosID").addEventListener("click", function(){
//     if(inputNombre.value!=="" && inputApellido.value!=="" && inputTel.value!==""){
//         localStorage.setItem("nombre",inputNombre.value);
//         localStorage.setItem("segundoNombre",inputSegundoNombre.value)
//         localStorage.setItem("apellido",inputApellido.value)
//         localStorage.setItem("segundoApellido",inputSegundoApellido.value)
//         localStorage.setItem("tel",inputTel.value)
//         }else{
//             alert("Debes completar los campos obligatorios(*)");
//         }
//     }
// )

// document.addEventListener("DOMContentLoaded", function(){
//     if(localStorage.getItem("nombre")==null && localStorage.getItem("apellido")==null && localStorage.getItem("tel")==null){
//         inputEmail.value=document.getElementById("emailIngresado").value && inputNombre.value=="" && inputSegundoNombre.value=="" && inputApellido.value=="" && inputSegundoApellido.value=="" && inputTel.value=="";
//     }else{
//         inputNombre.value=localStorage.getItem("nombre");
//         inputSegundoNombre.value=localStorage.getItem("segundoNombre");
//         inputApellido.value=localStorage.getItem("apellido");
//         inputSegundoApellido.value=localStorage.getItem("segundoApellido");
//         inputEmail.value=localStorage.getItem("usuario");
//         inputTel.value=localStorage.getItem("tel");
//     }
// })

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