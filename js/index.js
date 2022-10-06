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

//obtengo y muestro email del usuario que ingresó
//let email=localStorage.getItem("usuario");
//document.getElementById("emailIngresado").innerHTML= email;

document.addEventListener("DOMContentLoaded", function(){
    let email=localStorage.getItem("usuario");
    document.getElementById("emailIngresado").innerHTML= email;
    document.getElementById("miCarrito").addEventListener("click", function() {
        window.location = "cart.html"
    });
    document.getElementById("miPerfil").addEventListener("click", function() {
        window.location = "my-profile.html"
    });
    document.getElementById("cerrarSesion").addEventListener("click", function() {
        window.location = "index.html"
        localStorage.removeItem("usuario");
    });
    
});

//<a class="nav-link" id="emailIngresado"></a> 