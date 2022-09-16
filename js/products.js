let arrayProducts = [];
let min = undefined;
let max = undefined;

//variable que contiene el array vacío donde se cargarán los datos recibidos
arrayProducts = [];
function mostrarArrayProducts(){

    let htmlContentToAppend = "";
    for(let i = 0; i < arrayProducts.length; i++){
        let products = arrayProducts[i];
        if ((min==undefined && max==undefined)||(products.cost>=min && products.cost<=max)||
        (products.cost>=min && max==undefined)||(products.cost<=max && min==undefined)){

            htmlContentToAppend += `
            <div onclick="setCatID(${products.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${products.image}" alt="${products.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${products.name} - ${products.currency} ${products.cost}</h4>
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
  }

//paso nuevo url de los productos 
document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(PRODUCTOS_TODOS).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            arrayProducts=resultObj.data.products;
            mostrarArrayProducts(arrayProducts);
            console.log(arrayProducts);
        }
    });

    document.getElementById("filtrar").addEventListener("click", function(){
        min = document.getElementById("rango-min").value;
        max = document.getElementById("rango-max").value;
    
        //Obtengo el mínimo y máximo para filtrar por precios
        if (document.getElementById("rango-min").value !=""){
            min = document.getElementById("rango-min").value
        }else{
            min = undefined;
        }
        
        if (document.getElementById("rango-max").value !=""){
            max = document.getElementById("rango-max").value
        }else{
            max = undefined;
        }
        mostrarArrayProducts();
    });

    document.getElementById("limpiar").addEventListener("click", function(){
        document.getElementById("rango-min").value = "";
        document.getElementById("rango-max").value = "";
    
        min = undefined;
        max = undefined;
    
        mostrarArrayProducts();
    });

    document.getElementById("ordenAsc").addEventListener("click", function(){
        arrayProducts.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
            })
            mostrarArrayProducts(arrayProducts);
        });

    document.getElementById("ordenDesc").addEventListener("click", function(){
        arrayProducts.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
            })
            mostrarArrayProducts(arrayProducts);
        });

    document.getElementById("ordenRelevancia").addEventListener("click", function(){
        arrayProducts.sort(function(a, b) {
            let aCount = a.soldCount;
            let bCount = b.soldCount;

            if ( aCount > bCount){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
            })
            mostrarArrayProducts(arrayProducts);
        });  
    
});

let email=localStorage.getItem("usuario");
document.getElementById("emailIngresado").innerHTML= email;

function setProductI(id) {
    localStorage.setItem("producID", id);
    window.location = "products.html";
    window.location.replace("portada.html");
}
localStorage.getItem("productID");
function setProductID(id){
    localStorage.setItem("productID", arrayProducts[0])
    window.location = "products.html";
}