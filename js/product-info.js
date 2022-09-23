let productInfo;

function mostrarInfoProducts(){

        let htmlContentToAppend = "";
        htmlContentToAppend += `
        <div onclick="setProductID(${products.id})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <h4 <small class="text-muted">${resultado.data.name} </small>>
                </div>
                <p class="mb-1">${products.cost}</p> 
                <p "${products.description}" >
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${products.category}</h4>
                        <p ${products.soldCount}>
                        <small class="text-muted">${products.soldCount} artículos</small>
                    </div>
                    <img src="${products[0].image}" class="img-thumbnail">
                </div>
            </div>
        </div>
        `   
        document.getElementById("prod-info-container").innerHTML = htmlContentToAppend;
}

document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(PRODUCTO_INFO).then(function(resultado){
        if (resultado.status === "ok")
        {
            productInfo=resultado.data;
            document.getElementById("contenedor").innerHTML += `
                <   <div onclick="setProductID(${products.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <h4 <small class="text-muted">${resultado.data.name} </small>>
                    </div>
                    <p class="mb-1">${products.cost}</p> 
                    <p "${products.description}" >
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${products[products.findIndex(prinf => products.id = localStorage.getItem("productID"))].category}</h4>
                            <p ${products.soldCount}>
                            <small class="text-muted">${products.soldCount} artículos</small>
                        </div>
                        <img src="${products.image}" class="img-thumbnail">
                    </div>
                </div>
            </div>
            `   
            }
        })
});





