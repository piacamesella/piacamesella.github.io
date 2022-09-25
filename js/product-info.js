let productInfo;
let estrellasScore

document.getElementById("resultadoId").innerHTML= getProductID(resultado.data.id);
document.getElementById("resultadoName").innerHTML= resultado.data.name;
document.getElementById("resultadoCost").innerHTML= resultado.data.cost;
document.getElementById("resultadoDescription").innerHTML= resultado.data.description;
document.getElementById("resultadoCategory").innerHTML= resultado.data.category;
document.getElementById("resultadoSoldCount").innerHTML= resultado.data.soldCount;

function getProductID(id){
    localStorage.getItem("productID");
}


document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(PRODUCTO_INFO).then(function(resultado){
        if (resultado.status === "ok");
        {
            productInfo=resultado.data;
            document.getElementById("contenedor").innerHTML += `
                <"getProductID(${resultado.data.id})" class="list-group-item">
                <div class="row">
                    <div class="col-3">
                        <h4 <small class="text">${resultado.data.name} </small>>
                    </div>
                    <h2 "Precio" </h2>
                    <p class="mb-1">${resultado.data.cost}</p> 
                    <p "${resultado.data.description}" >
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <p class="mb-1">${resultado.data.category}</p>
                            <small class="text-muted">${resultado.data.soldCount} artículos</small>
                        </div>
                        <img src="${resultado.data.image}" class="img-thumbnail">
                    </div>
                </div>
            </div>
            `   
            }
        })
});

document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(PRODUCTO_INFO_COMMENTS).then(function(){
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





   
    
   

