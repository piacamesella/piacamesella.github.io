
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("submitButton").addEventListener("click",function(){
        let email=document.getElementById("inputEmail").value;
        let password=document.getElementById("inputPassword").value;
        if (email!== "" && password!==""){
            console.log(localStorage.setItem);
            localStorage.setItem("usuario",email);
            window.location.replace("portada.html");
        }})
    })
    function mostrarUsuario(){
        if(localStorage.getItem("usuario")){
            email=localStorage.getItem("usuario");
            usuario=email;
            document.getElementById("emailIngresado").innerHTML=email;
        }
    }
    