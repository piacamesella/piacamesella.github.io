document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
    
});

function mostrarUsuario(){
    if(localStorage.getItem("usuario")){
        email=localStorage.getItem("usuario");
        usuario=email;
        document.getElementById("emailIngresado").innerHTML=email;
    }
}
mostrarUsuario(getElementById("emailIngresado"));

