//de aca
const ORDEN_DESC_PRECIO = "$";
const ORDEN_ASC_PRECIO = "$";
const ORDEN_DESC_RELEVANCIA = "Rel.";
let arrayProducts = [];
let criterioDeOrdenActual= undefined;
let min = undefined;
let max = undefined;

function ordenarLista(criterio, array){
    let result = [];
    if (criterio === ORDEN_ASC_PRECIO)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criterio === ORDEN_DESC_PRECIO){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criterio === ORDEN_DESC_RELEVANCIA){
        result = array.sort(function(a, b) {
            let aRelevancia = a.soldCount;
            let bRelevancia = b.soldCount;

            if ( aRelevancia > bRelevancia ){ return -1; }
            if ( aRelevancia < bRelevancia ){ return 1; }
            return 0;
        });
    }

    return result;
}

//a aca

//variable que contiene el array vacío donde se cargarán los datos recibidos
arrayProducts = [];
function mostrarArrayProducts(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let products = array[i];

            htmlContentToAppend += `
            <div onclick="setCatID(${products.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${products.image}" alt="${products.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${products.name}-${products.currency}" "${products.cost}</h4>
                            <small class="text-muted">${products.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${products.description}</p>
                    </div>
                </div>
            </div>
            `
        }

        document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
    }

//de aca
function sortAndShowCategories(sortCriteria, categoriesArray){
    criterioDeOrdenActual = sortCriteria;

    if(categoriesArray != undefined){
        arrayProducts = categoriesArray;
    }

    arrayProducts = ordenarLista(criterioDeOrdenActual, arrayProducts);

    //Muestro las categorías ordenadas
    mostrarArrayProducts();
}

//a aca

//declaré variable que contiene el url de los productos en formato json
document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(PRODUCTOS_TODOS).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            arrayProducts=resultObj.data.products;
            mostrarArrayProducts(arrayProducts);
            console.log(arrayProducts);
        }
    });
});

//de aca
document.getElementById("ordenAsc").addEventListener("click", function(){
    sortAndShowCategories(ORDEN_ASC_PRECIO);
});

document.getElementById("ordenDesc").addEventListener("click", function(){
    sortAndShowCategories(ORDEN_DESC_PRECIO);
});

document.getElementById("ordenRelevancia").addEventListener("click", function(){
    sortAndShowCategories(ORDEN_DESC_RELEVANCIA);
});

document.getElementById("limpiar").addEventListener("click", function(){
    document.getElementById("rango-min").value = "";
    document.getElementById("rango-max").value = "";

    min = undefined;
    max = undefined;

    mostrarArrayProducts();
});

document.getElementById("filtrar").addEventListener("click", function(){
    //Obtengo el mínimo y máximo para filtrar por precios
    if (document.getElementById("rango-min").value !="") {
        min = document.getElementById("rango-min").value;
    }else{
        min = undefined;
    }
    
    if (document.getElementById("rango-max").value !=""){
        max = document.getElementById("rango-max").value;
    }else{
        max = undefined;
    }
    mostrarArrayProducts();
});
//a aca