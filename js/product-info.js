let productInfo;
let estrellasScore
let htmlContentToAppend = "";

function getProductID(id){
    localStorage.getItem("productID");
}


document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(PRODUCTO_INFO).then(function(resultado){
        if (resultado.status === "ok");
        {
            productInfo=resultado.data.product;
            document.getElementById("contenedor").innerHTML += `
                <"getProductID(${product.id})" class="list-group-item">
                <div class="row">
                    <div class="col-3">
                        <h4 <small class="text">${product.name} </small>>
                    </div>
                    <h2 "Precio" </h2>
                    <p class="mb-1">${product.cost}</p> 
                    <p "${product.description}" >
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <p class="mb-1">${product.category}</p>
                            <small class="text-muted">${product.soldCount} artículos</small>
                        </div>
                        <img src="${product.image}" class="img-thumbnail">
                    </div>
                </div>
            </div>
            `   
            }
        })
});

document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(PRODUCTO_INFO_COMMENTS).then(function(resultado){
        if (resultado.status === "ok");
        {
            productInfo=resultado.data;
            let htmlContentToAppend = "";
        for(let i = 0; i < productInfo.length; i++){
            let products = productInfo[i];
            
                htmlContentToAppend += `
                <div (${products.description}) class="list-comments-item">
                    <div class="row">
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">${products.user} - ${products.dateTime} ${estrellas(products.score)}</h4>
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
            if (estrellasScore>0){
                htmlContentToAppend += `
                <span  class="fa fa-star checked"></span>
                `
                document.getElementById("estrellas").innerHTML = htmlContentToAppend;
            }else{
                htmlContentToAppend += `
                <span class="fa fa-star"></span>
                `
                document.getElementById("estrellas").innerHTML = htmlContentToAppend;
            }
    }
  }  
})





   
    
   

