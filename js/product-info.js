productInfo = [];
function mostrarInfoProducts(){
    document.getElementById("prod-info-container").innerHTML = htmlContentToAppend;
        let htmlContentToAppend = "";
        htmlContentToAppend += `
        <div onclick="setProductID(${product.id})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <h4 <small class="text-muted">${product.name} </small>>
                </div>
                <p class="mb-1">${product.cost}</p> 
                <p "${product.description}" >
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${product.category}</h4>
                        <p ${product.soldCount}>
                        <small class="text-muted">${product.soldCount} artículos</small>
                    </div>
                    <img src="${product.image}" class="img-thumbnail">
                </div>
            </div>
        </div>
        `   
}
let productInfo;

document.addEventListener("DOMContentLoaded", function(a){
    localStorage.getItem("productID");
    getJSONData(PRODUCTO_INFO).then(function(resultado){
        if (resultado.status === "ok")
        {
            productInfo=resultado.data;
            mostrarInfoProducts(productInfo);
            console.log(productInfo);
        }
    });

localStorage.getItem("productID").addEventListener("click", function(){
    productInfo = localStorage.getItem(productInfo);
    mostrarArrayProducts();
});
})
