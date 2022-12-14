let productInfo;
let images=[];
let relatedProducts=[];
let puntuacion=1;
let estrellasDoradas = "";
let estrellasNegras = "";
let calificacionEstrellas = "";

//función que guarda el productID en el almacenamiento local y recarga la página

function setProductID(id){
    localStorage.setItem("productID",id);
    window.location="product-info.html";
}

//función que obtiene el productID que guardé anteriormente en products.js con la ayuda de setItem:
function getProductID(id){
    localStorage.getItem("productID",id);
}

function mostrarProductInfo(){
    let htmlContentToAppend = "";
    htmlContentToAppend+= `
     <div "getProductID(${"productID"})" class="list-group-item" style="background-color:beige;">
     <div class="row" style="background-color:beige;">
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

function mostrarProductosRelacionados(){
    let htmlContentToAppend="";
    relatedProducts=productInfo.relatedProducts;
    for(let i = 0; i < relatedProducts.length; i++){
        htmlContentToAppend += `
        <div onclick="setProductID(${productInfo.relatedProducts[i].id})" class="list-group-item list-group-item-action cursor-active" style="background-color:beige;">
        <div class="row">
            <div class="col-3">
            <h4 <small class="text">${productInfo.relatedProducts[i].name}</small><br>
            </div>
        <div class="col-3">
        <img src="${productInfo.relatedProducts[i].image}"class="img-thumbnail"></img>
        </div>
        `
    }

 document.getElementById("relatedProducts").innerHTML += htmlContentToAppend;
}

document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(PRODUCTO_INFO).then(function(resultado){
        if (resultado.status === "ok");
        {
            productInfo=resultado.data;
             mostrarProductInfo(productInfo);
             mostrarProductImages(productInfo);
             mostrarProductosRelacionados(productInfo);
             console.log(productInfo);
        }
    })
});

document.addEventListener("DOMContentLoaded", function(){
    getJSONData(PRODUCTO_INFO_COMMENTS).then(function(resultado){
        if (resultado.status === "ok");
        {
            productInfo=resultado.data;
            let htmlContentToAppend = "";
        for(let i = 0; i < productInfo.length; i++){
            let products = productInfo[i];
            
                htmlContentToAppend += `
                <div  class="list-comments-item">
                    <div class="row">
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${products.user} <small class="text-muted"> - ${products.dateTime} - ${calificacionEstrellas}</small><br><small class="text-muted">${products.description}</small></h4>
                        </div>
                    </div>
                </div>
                `
                puntuacion=products.score;
            }
            document.getElementById("prod-comments-container").innerHTML = htmlContentToAppend;
         }
      }
      );
});


for(let i = 0; i < puntuacion; i++){
    estrellasDoradas += `<span class="fa fa-star checked"></span>`;
}
 for (let i = puntuacion + 1; i <=5; i++){
     estrellasNegras+= `<span class="fa fa-star"></span>`;
}
calificacionEstrellas+= `<div style="text-align: right;">${estrellasDoradas+estrellasNegras}</div><br><hr>`;
console.log(estrellas)


document.addEventListener("DOMContentLoaded", function(){
    let email=localStorage.getItem("usuario");
    document.getElementById("emailIngresado").innerHTML= email;
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
   
    
   

