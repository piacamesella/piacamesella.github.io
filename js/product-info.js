let productInfo;
let htmlContentToAppend = "";
let estrellasScore
let estrellasDoradas = `
<span  class="fa fa-star checked"></span>
`
let estrellasNegras = `
<span class="fa fa-star"></span>
`


function getProductID(id){
    localStorage.getItem("productID",id);
}


document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(PRODUCTO_INFO).then(function(resultado){
        if (resultado.status === "ok");
        {
            productInfo=resultado.data;
            
            htmlContentToAppend+= `
            <div onclick="getProductID(${"productID"})" class="list-group-item">
            <div class="row">
                <div class="col-3">
                <h2 <small class="text">${productInfo.name}</small><br>
                </div>
                <h4 <small class="text">Precio</small><br>
                <p class="text-muted"${productInfo.cost}</p><br>
                <h4 <small class="text">Descripción</small><br>
                <p class="text-muted"${productInfo.descrption}</p><br>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                    <h4 <small class="text">Categoría</small><br>
                        <p class="text-muted"${productInfo.category}</p><br>
                        <h4 <small class="text">Cantidad de vendidos</small><br>
                        <small class="text-muted">${productInfo.soldCount} artículos</small>
                        <h4 <small class="text">Imágenes ilustrativas</small><br>
                    </div>
                </div>
            </div>
        `   
        document.getElementById("contenedor").innerHTML += htmlContentToAppend;
        }
        
            for(let i = 0; i < productInfo.images.length; i++){
                htmlContentToAppend += `
                <div class="col-3">
                <img src="${productInfo.images}" class="img-thumbnail"></img>
                </div>
                `
                console.log(productInfo.images);
                document.getElementById("contenedorImagenes").innerHTML = htmlContentToAppend;
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
                            <h4 class="mb-1">${products.user} - ${products.dateTime} ${estrellas(products.score)}</h4><br
                        </div>
                        <div <small class="text">${products.description}
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



   
    
   

