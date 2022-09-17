let productInfo;

document.getElementById("productID").innerHTML= productInfo;
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
    
});
