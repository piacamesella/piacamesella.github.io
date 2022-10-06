let productInfo;
let images=[];
let productosRelacionados=[];
let estrellasScore = 0;
let estrellasDoradas = `
<span  class="fa fa-star checked"></span>
`
let estrellasNegras = `
<span class="fa fa-star"></span>
`

//función que obtiene el productID que guardé anteriormente en products.js con la ayuda de setItem:
function getProductID(id){
    localStorage.getItem("productID",id);
}

function mostrarProductInfo(){
    let htmlContentToAppend = "";
    htmlContentToAppend+= `
     <div onclick="getProductID(${"productID"})" class="list-group-item">
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
         <h4 <small class="text">Imágenes ilustrativas</small><br>
         </div>
     </div>
 `   
 document.getElementById("contenedor").innerHTML += htmlContentToAppend;
 console.log(productInfo.name);
 }

 function mostrarProductImages(){
    images=productInfo.images;
    for(let i = 0; i < images.length; i++){
        let htmlContentToAppend = "";
        htmlContentToAppend += `
        <div class="col-3">
        <img src="${productInfo.images[i]}"class="img-thumbnail"></img>
        </div>
        `
        document.getElementById("contenedorImagenes").innerHTML = htmlContentToAppend;
    }     
}

function mostrarProductosRelacionados(){
    productosRelacionados=productInfo.relatedProducts;
    for(let i = 0; i < productInfo.relatedProducts.length; i++){
        let htmlContentToAppend = "";
        htmlContentToAppend += `
        <div onclick="getProductID(${"productID"})" class="list-group-item">
        <div class="row">
            <div class="col-3">
            <h2 <small class="text">${productInfo.relatedProducts[i].name}</small><br>
            </div>
        <div class="col-3">
        <img src="${productInfo.relatedProducts[i].image}"class="img-thumbnail"></img>
        </div>
        `
    }
      
 document.getElementById("relatedProducts").innerHTML += htmlContentToAppend;
 console.log(productInfo.relatedProducts);
 console.log(productInfo.relatedProducts[0].name);
 console.log(productInfo.relatedProducts[0].image);
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

//document.addEventListener("DOMContentLoaded", function(a){
    //getJSONData(PRODUCTO_INFO).then(function(resultado){
        //if (resultado.status === "ok");
        //{
            //productInfo=resultado.data;
            //let htmlContentToAppend = "";
            //htmlContentToAppend+= `
     //<div onclick="getProductID(${"productID"})" class="list-group-item">
     //<div class="row">
         //<div class="col-3">
         //<h2 <small class="text">${productInfo.name}</small><br>
         //</div>
         //<h4 <small class="text">Precio</small><br>
         //<small class="text-muted">${productInfo.currency} ${productInfo.cost}</small><br>
         //<h4 <small class="text">Descripción</small><br>
         //<small class="text-muted">${productInfo.description}</small><br>
         //<h4 <small class="text">Categoría</small><br>
         //<small class="text-muted">${productInfo.category}</small><br>
         //<h4 <small class="text">Cantidad de vendidos</small><br>
         //<small class="text-muted">${productInfo.soldCount} artículos</small>
         //<h4 <small class="text">Imágenes ilustrativas</small><br>
         //</div>
     //</div>
 //`   
 //document.getElementById("contenedor").innerHTML += htmlContentToAppend;
             //mostrarProductImages(productInfo);
             //console.log(productInfo);
        //}
    //})
//});

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
                            <h4 class="mb-1">${products.user} <small class="text-muted"> - ${products.dateTime} - </small> ${estrellas(products.score)}<br><small class="text-muted">${products.description}</small></h4>
                        </div>
                    </div>
                </div>
                `
            }
            document.getElementById("prod-comments-container").innerHTML = htmlContentToAppend;
         }
      }
      );
      function estrellas(score){
        for(let i = 0; i < 5; i++){
            let estrellasScore = score[i];
            console.log(estrellasScore);
            document.getElementById("estrellasDoradas").innerHTML = estrellasDoradas;
            estrellasScore=5-score;
            console.log(estrellasScore);
            document.getElementById("estrellasNegras").innerHTML = estrellasNegras;
            }
    }        
});

let email=localStorage.getItem("usuario");
document.getElementById("emailIngresado").innerHTML= email;
   
    
   

