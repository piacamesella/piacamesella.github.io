let arrayProductos=[];
function mostrarArrayProductos(arrayProductos){
    let htmlContentToAppend = "";

    for(let i = 0; i < arrayProductos; i++){ 
        let products = arrayProductos[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + products.imgSrc + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ products.name + products.currency +products.cost `</h4> 
                        <p> `+ products.description +`</p> 
                        </div>
                        <small class="text-muted">` + products.soldCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("autos").innerHTML = htmlContentToAppend;
    }
}
//a aca arreglar
var produjsonUrl = "https://japceibal.github.io/emercado-api/cats_products/101.json";

document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(produjsonUrl).then(function(resultObj){
        if (resultObj.status === "ok")
        console.log(resultObj)
        {
            let arrayProductos=resultObj.data.products;
            mostrarArrayProductos(arrayProductos);
            console.log(arrayProductos);
        }
    });
});
