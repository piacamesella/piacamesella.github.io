let productInfo;

document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(PRODUCTO_INFO).then(function(resultado){
        if (resultado.status === "ok")
        {
            productInfo=resultado.data;
            document.getElementById("contenedor").innerHTML += `
                <(${resultado.data.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <h4 <small class="text-muted">${resultado.data.name} </small>>
                    </div>
                    <p class="mb-1">${resultado.data.cost}</p> 
                    <p "${resultado.data.description}" >
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${resultado.data[resultado.data.findIndex(prinf => resultado.data.id = localStorage.getItem("productID"))].category}</h4>
                            <p ${resultado.data.soldCount}>
                            <small class="text-muted">${resultado.data.soldCount} artículos</small>
                        </div>
                        <img src="${resultado.data.image}" class="img-thumbnail">
                    </div>
                </div>
            </div>
            `   
            }
        })
});





