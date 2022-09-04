//variable que contiene el array vacío donde se cargarán los datos recibidos
let arrayProducts = [];
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
                            <h4 class="mb-1">${products.name}</h4>
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


//declaré variable que contiene el url de los productos en formato json
var producjsonUrl="https://japceibal.github.io/emercado-api/cats_products/101.json";
document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(productos_todos).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            arrayProducts=resultObj.data.products;
            mostrarArrayProducts(arrayProducts);
            console.log(arrayProducts);
        }
    });
});
