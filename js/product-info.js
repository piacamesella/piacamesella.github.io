arrayProducts = [];
function mostrarArrayProducts(){

        let htmlContentToAppend = "";
        htmlContentToAppend += `
        <div onclick="setProductID(${products.id})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <h4 <small class="text-muted">${products.name} </small>>
                </div>
                <p class="mb-1">${products.cost}</p> 
                <p "${products.description}" >
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${products.category}</h4>
                        <p ${products.soldCount}>
                        <small class="text-muted">${products.soldCount} artículos</small>
                    </div>
                    <img src="${products.image}" class="img-thumbnail">
                </div>
            </div>
        </div>
        `
    document.getElementById("prod-info-container").innerHTML = htmlContentToAppend;
}
let productInfo;

document.addEventListener("DOMContentLoaded", function(a){
    localStorage.getItem("productID");
    getJSONData(PRODUCTO_INFO).then(function(resultado){
        if (resultado.status === "ok")
        {
            productInfo=resultado.data;
            mostrarArrayProducts(productInfo);
            console.log(productInfo);
        }
    });
    document.getElementById("productID").innerHTML= productInfo;
    });
    
document.localStorage.getItem("productID").addEventListener("click", function(){
    productInfo = localStorage.getItem(productInfo);
    mostrarArrayProducts();
});
