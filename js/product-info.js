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
   productInfo = document.getElementById(localStorage.getItem(localStorage.getItem(productInfo)));
    mostrarArrayProducts();
});