arrayProducts = [];
function mostrarArrayProducts(){

    let htmlContentToAppend = "";
            htmlContentToAppend += `
            <div onclick="setProductID(${products.id})" class="list-group-item list-group-item-action cursor-active">
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
        document.getElementById("productsId").innerHTML = htmlContentToAppend;
     }
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
    document.getElementById(localStorage.getItem("productID")).addEventListener("click", function(){
        productInfo = document.getElementById(localStorage.getItem((productInfo)));
         mostrarArrayProducts();
});

document.localStorage.getItem("productID").addEventListener("click", function(){
    productInfo = localStorage.getItem(productInfo);
    mostrarArrayProducts();
});
