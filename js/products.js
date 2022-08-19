document.addEventListener("DOMContentLoaded", function(){
    getJSONData(PRODUCJSON_URL).then(resultObj=>{
        if(resultObj.status=="ok"){
            let listaProductos=resultObj.data.products
            //mostrar lista;
            console.log(listaProductos);
        }else{
            alert("Hubo un error:"+resultObj.data.products);
        }
    });
});
