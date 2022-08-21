let arrayProducts = [];
function mostrarArrayProducts(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        console.log(i);
        let products = array[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + products.imgSrc + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ products.name + products.currency + products.cost `</h4> 
                        <p> `+ products.description +`</p> 
                        </div>
                        <small class="text-muted">` + products.soldCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
    }
}
//a aca arreglar
var producjsonUrl="https://japceibal.github.io/emercado-api/cats_products/101.json";
document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(producjsonUrl).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            arrayProductos=resultObj.data.products;
            mostrarArrayProducts(arrayProducts);
            console.log(arrayProducts);
        }
    });
});
