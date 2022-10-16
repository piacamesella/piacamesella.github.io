let carritoInfo = [];

function setUserID(id){
    localStorage.setItem("userID",id);
}

function mostrarCarritoInfo(){
    let htmlContentToAppend = "";
    for(let i = 0; i < carritoInfo.length; i++){
        let articles = carritoInfo[i];
        htmlContentToAppend +=`
    <section class="h-100 h-custom" style="background-color: #d2c9ff;">
  <div "setUserID(${25801})" class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style="border-radius: 15px;">
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-8">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h1 class="fw-bold mb-0 text-black">Carrito de compras</h1>
                    <h6 class="mb-0 text-muted">3 items</h6>
                  </div>
                  <hr class="my-4">

                  <div class="row mb-4 d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img src="${articles.image}"class="img-thumbnail"></img>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <h6 <small class="text">${articles.name}</small></h6>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">

                      <input id="form1" min="0" name="quantity" value="${articles.count}" type="number"
                        class="form-control form-control-sm" />

                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 class="mb-0">${articles.currency} ${articles.unitCost}</h6>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="pt-5">
                    <h6 class="mb-0"><a href="#!" class="text-body"><i
                          class="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 bg-grey">
                <div class="p-5">
                  <h3 class="fw-bold mb-5 mt-2 pt-1">Subtotal</h3>
                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="text-uppercase">items 3</h5>
                    <h5>€ 132.00</h5>
                  </div>

                  <h5 class="text-uppercase mb-3">Tipo de envío</h5>

                  <div class="mb-4 pb-2">
                    <select class="select" required>
                      <option value="1">Premium 2 a 5 días (15%)</option>
                      <option value="2">Express 5 a 8 días (7%)</option>
                      <option value="3">Standard 12 a 15 días (5%)</option>
                    </select>
                  </div>

                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Subtotal</h5>
                    <h5>€ 137.00</h5>
                  </div>

                  <button type="button" class="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">Comprar</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    `
document.getElementById("contenedor").innerHTML += htmlContentToAppend;
console.log(articles);
    }
}

// function mostrarCarritoInfo(){
//        let htmlContentToAppend = "";
//     for(let i = 0; i < carritoInfo.length; i++){
//       let articles = carritoInfo[i];
//       htmlContentToAppend +=`
//      <div "setUserID(${25801})" class="list-group-item">
//      <div class="row">
//          <div class="col-3">
//          <img src="${articles.image}"class="img-thumbnail"></img>
//          <h2 <small class="text">${articles.name}</small><br>
//          </div>
//          <h4 <small class="text">Precio</small><br>
//          <small class="text-muted">${articles.currency} ${articles.unitCost}</small><br>
//          <small class="text-muted">${articles.count} artículos</small>
//          </div>
//      </div>
//  `   
//  document.getElementById("contenedor").innerHTML += htmlContentToAppend;
//  console.log(articles.name);
//     }
//  }

document.addEventListener("DOMContentLoaded", function(a){
    getJSONData(CARRITO_INFO_USUARIO_25801).then(function(resultado){
        if (resultado.status==="ok");
        {
            carritoInfo=resultado.data;
            mostrarCarritoInfo(carritoInfo);
            console.log(carritoInfo);
        }
    })
})

document.addEventListener("DOMContentLoaded", function(){
    let email=localStorage.getItem("usuario");
    document.getElementById("emailIngresado").innerHTML= email;
    document.getElementById("miCarrito").addEventListener("click", function() {
        window.location = "cart.html"
    });
    document.getElementById("miPerfil").addEventListener("click", function() {
        window.location = "my-profile.html"
    });
    document.getElementById("cerrarSesion").addEventListener("click", function() {
        localStorage.removeItem("usuario");
        window.location = "index.html"
    });
    
});