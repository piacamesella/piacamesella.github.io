function setUserID(id){
    localStorage.setItem("userID",id);
}

setUserID(25801);

function mostrarCarritoInfo(){
    let htmlContentToAppend = "";
    htmlContentToAppend+= `
     <div "getProductID(${"productID"})" class="list-group-item">
     <div class="row">
         <div class="col-3">
         <h2 <small class="text">${productInfo.name}</small><br>
         </div>
         <h4 <small class="text">Precio</small><br>
         <small class="text-muted">${productInfo.currency} ${productInfo.cost}</small><br>
         <h4 <small class="text">Descripción</small><br>
         <small class="text-muted">${productInfo.description}</small><br>
         <h4 <small class="text">Categoría</small><br>
         <small class="text-muted">${productInfo.category}</small><br>
         <h4 <small class="text">Cantidad de vendidos</small><br>
         <small class="text-muted">${productInfo.soldCount} artículos</small>
         <h4 <small class="text">Imágenes ilustrativas<br>
         </div>
     </div>
 `   
 document.getElementById("contenedor").innerHTML += htmlContentToAppend;
 console.log(productInfo.name);
 }

 function mostrarProductImages(){
    let htmlContentToAppend = "";
    images=productInfo.images;
    for(let i = 0; i < images.length; i++){
        htmlContentToAppend += `
        <div class="col-3">
        <img src="${productInfo.images[i]}"class="img-thumbnail"></img>
        </div>
        `
        document.getElementById("contenedorImagenes").innerHTML = htmlContentToAppend;
    }     
}

document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(CARRITO_INFO_USUARIO_25801).then(function(resultado){
        if (resultado.status==="ok");
        {
            carritoInfo=resultado.data;

        }
    })
})

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
        localStorage.removeItem("usuario");
        window.location = "index.html"
    });
    
});