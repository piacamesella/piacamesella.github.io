const PRODUCTO_INFO =`https://japceibal.github.io/emercado-api/products/${localStorage.getItem("productID")}.json`;
let productInfo;

document.getElementById("productID").innerHTML= email;
document.addEventListener("DOMContentLoaded", function(a){
    localStorage.getItem("productID");
    getJSONData(PRODUCTO_INFO).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productInfo=resultObj.data.products;
            mostrarArrayProducts(arrayProducts);
            console.log(arrayProducts);
        }
    });
