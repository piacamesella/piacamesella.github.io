//de aca
function mostrarListaProductos(arrayProducts){
    for (const products of arrayProducts){
        let contenido=`
        <li>
        Título:${products.name}
        `

    }
}
function showCategoriesList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
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
                        <h4>`+ products.name + products.currency +products.cost `</h4> 
                        <p> `+ products.description +`</p> 
                        </div>
                        <small class="text-muted">` + products.soldCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("autos").innerHTML;//innerHTML+=talcosa
    }
}
//a aca arreglar

document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(PRODUCJSON_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            let listaProductos=resultObj.data.products;
            mostrarListaProductos(listaProductos);
            console.log(listaProductos);
        }
    });
});