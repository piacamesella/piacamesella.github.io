const PRODUCTO_INFO =`https://japceibal.github.io/emercado-api/products/${localStorage.getItem("productID")}.json`;
localStorage.getItem("productID");
document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(PRODUCTO_INFO).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            arrayProducts=resultObj.data.products;
            mostrarArrayProducts(arrayProducts);
            console.log(arrayProducts);
        }
    });

