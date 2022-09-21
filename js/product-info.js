function mostrarInfoProducts(){

        let htmlContentToAppend = "";
        htmlContentToAppend += `
        <div onclick="setProductID(${productInfo[0].data})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <h4 <small class="text-muted">${productInfo[0].name} </small>>
                </div>
                <p class="mb-1">${productInfo[0].cost}</p> 
                <p "${productInfo[0].description}" >
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${productInfo[0].category}</h4>
                        <p ${productInfo[0].soldCount}>
                        <small class="text-muted">${productInfo[0].soldCount} artículos</small>
                    </div>
                    <img src="${productInfo[0].image}" class="img-thumbnail">
                </div>
            </div>
        </div>
        `   
        document.getElementById("prod-info-container").innerHTML = htmlContentToAppend;
}

let productInfo;

document.addEventListener("DOMContentLoaded", function(a){
    JSON.parse.localStorage.getItem("productID").value;
    getJSONData(PRODUCTO_INFO).then(function(resultado){
        if (resultado.status === "ok")
        {
            productInfo=resultado.data;
            mostrarInfoProducts(productInfo);
            console.log(productInfo);
        }
    });

    document.getElementById(JSON.parse.localStorage.getItem("productID").value).addEventListener("click", function(){
    productInfo = JSON.parse.localStorage.getItem("productInfo").value;
    mostrarInfoProducts();
});
})


document.addEventListener("DOMContentLoaded",() => {
        document.getElementById("prod-info-container")[0].innerHTML=`<p>${productInfo[0].name}</p>`       
    })


