let carritoInfo = [];
let subtotalCarrito = 0;
let costoEnvioCarrito = 0;
let subtotalGeneralCarrito = 0;
let totalCarrito= 0;
let currencyCarrito = "";

function setUserID(id){
    localStorage.setItem("userID",id);
}

// function getUserID(id){
//     localStorage.getItem("userID",id);
// }

// function subtotal(cantidad,precio){
//   document.getElementById("form1").addEventListener("click", function(){
//     cantidad=document.getElementById("form1").value;
//     subtotalCarrito=cantidad*precio
//     document.getElementById("subtotalID").innerHTML=`
//     <div>
//       <h6 class="mb-0">${subtotalCarrito}</h6>
//     </div>
//     `
//   })
// }

//función que calcula el costo de envío dependiendo el tipo de envío y el subtotal(porque es de donde se saca el porcentaje)
// function costoEnvio(){
//     if (document.getElementById("tiposDeEnvio").value == "1"){
//       costoEnvioCarrito= (subtotalCarrito* 15)/100
//     }else if (document.getElementById("tiposDeEnvio").value == "2"){
//       costoEnvioCarrito= (subtotalCarrito * 7)/100
//     }else{
//       costoEnvioCarrito=(subtotalCarrito*5)/100
//     }
//     document.getElementById("costoEnvioID").innerHTML=`
//     <div id="costoEnvioID" class="d-flex justify-content-between mb-5">
//       <h5 class="text-uppercase">Costo Envío</h5>
//       <h5>${costoEnvioCarrito}</h5>
//     </div>
//     `
// }

function costoEnvio(){
  if (document.getElementById("tiposDeEnvio").value == "1"){
    costoEnvioCarrito= (subtotalGeneralCarrito* 15)/100
  }else if (document.getElementById("tiposDeEnvio").value == "2"){
    costoEnvioCarrito= (subtotalGeneralCarrito* 7)/100
  }else{
    costoEnvioCarrito=(subtotalGeneralCarrito*5)/100
  }
  document.getElementById("costoEnvioID").innerHTML=`
  <div id="costoEnvioID" class="d-flex justify-content-between mb-5">
    <h5 class="text-uppercase">Costo Envío</h5>
    <h5>${costoEnvioCarrito}</h5>
  </div>
  `
}
//función que calcula el subtotal dependiendo del precio y la cantidad
// function subtotal(cantidad,precio){
//   document.getElementById("form1").addEventListener("click", function(){
//     cantidad=document.getElementById("form1").value;
//     subtotalCarrito=cantidad*precio
//     document.getElementById("subtotalID").innerHTML=`
//     <div>
//       <h6 class="mb-0">${subtotalCarrito}</h6>
//     </div>
//     `
//     costoEnvio(subtotalCarrito);
//     subtotalGeneral(subtotalCarrito);
//     totalCarrito(subtotalCarrito)
//   })
// }

// function subtotal(cantidad,precio){
//     cantidad=document.getElementById("form1").value;
//     subtotalCarrito=cantidad*precio
//     document.getElementById("subtotalID").innerHTML=`
//     <div>
//       <h6 class="mb-0">${subtotalCarrito}</h6>
//     </div>
//     `
//     subtotalGeneral(subtotalCarrito);
//     costoEnvio(subtotalGeneralCarrito);
//     totalCarritoDeCompra(subtotalGeneralCarrito)
// }

/* <div class="d-flex justify-content-between mb-4" id="subtotalesID">
  <h5 class="text-uppercase">Subtotal</h5>
</div> */

function subtotal(cantidad,precio){
  cantidad=document.getElementById("form1").value;
  subtotalCarrito=cantidad*precio
  document.getElementById("subtotalID").innerHTML=`
  <div>
    <h6 class="mb-0">${currencyCarrito} ${subtotalCarrito}</h6>
  </div>
  `
  subtotalGeneral(subtotalCarrito);
  costoEnvio(subtotalGeneralCarrito);
  totalCarritoDeCompra(subtotalGeneralCarrito)
}

//función que suma los subtotales:
function subtotalGeneral(){
      subtotalGeneralCarrito= 0 + subtotalCarrito;
      document.getElementById("subtotalesID").innerHTML=`
      <div class="d-flex justify-content-between mb-4" id="subtotalesID">
        <h5 class="text-uppercase">Subtotal</h5>
        <h5>${subtotalGeneralCarrito}</h5>
       </div>
      `
}
//función que suma el subtotal general y el costo del envío
function totalCarritoDeCompra(){
  totalCarrito = subtotalGeneralCarrito + costoEnvioCarrito;
  document.getElementById("totalID").innerHTML=`
  <div class="d-flex justify-content-between mb-5" id="totalID">
    <h5 class="text-uppercase">Total</h5>
    <h5>${totalCarrito}</h5>
  </div>
  `
}

function mostrarCarritoInfo(){
  currencyCarrito = carritoInfo.articles[i].currency;
    let htmlContentToAppend = "";
    for(let i = 0; i < carritoInfo.articles.length; i++){

        htmlContentToAppend +=`
    <section class="h-100 h-custom" style="background-color: #fdfcfa;">
  <div "setUserID(${25801})" class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style="border-radius: 15px;">
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-8" style="background-color:#f2dec9">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h1 class="fw-bold mb-0 text-black">Carrito de compras</h1>
                  </div>
                  <hr class="my-4">

                  <div class="row mb-4 d-flex justify-content-between align-items-center">
                    <div class="col-xs-2 col-md-2 col-lg-2 col-xl-2">
                      <img src="${carritoInfo.articles[i].image}"class="img-thumbnail"></img>
                    </div>
                    <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                      <h6 <small class="text">${carritoInfo.articles[i].name}</small></h6>
                    </div>
                    <div class="col-xs-3 col-md-3 col-lg-3 col-xl-2 d-flex">

                      <input id="form1" min="0" name="quantity" value="${carritoInfo.articles[i].count}" type="number" oninput="subtotal(${carritoInfo.articles[i].count},${carritoInfo.articles[i].unitCost})"
                        class="form-control form-control-sm"/>

                    </div>
                    <div class="col-xs-2 col-md-3 col-lg-2 col-xl-2 offset-lg-1" id="subtotalID">
                      <h6 class="mb-0">${carritoInfo.articles[i].currency} ${carritoInfo.articles[i].unitCost}</h6>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="pt-5">
                    <h6 class="mb-0"><a href="https://piacamesella.github.io/categories.html" class="text-body"><i
                          class="fas fa-long-arrow-alt-left me-2"></i>Volver a categorías productos</a></h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 bg-mostaza">
                <div class="p-5">
                  <h3 class="fw-bold mb-5 mt-2 pt-1">Costos</h3>
                  <hr class="my-4">
                
                  <h5 class="text-uppercase mb-3">Tipo de envío</h5>

                  <div class="mb-4 pb-2">
                    <select id="tiposDeEnvio" class="select" required onchange="costoEnvio(subtotalCarrito)">
                      <option value="1">Premium 2 a 5 días (15%)</option>
                      <option value="2">Express 5 a 8 días (7%)</option>
                      <option value="3">Standard 12 a 15 días (5%)</option>
                    </select>
                  </div>

                  <hr class="my-4">   

                  <div class="d-flex justify-content-between mb-2">
                  <h5 class="text-uppercase mb-3">Dirección de envío</h5>
                  </div>
                  <div class="container">
                    <form class="row g-3">

                      <div class="mb-1 pb-2">
                        <div class="col-6">
                          <label for="inputCalle"><h6 class="text-uppercase mb-3">Calle</h5></label>
                          <input type="text" name="calle" id="inputCalle">
                        </div>
                      </div>
            
                      <div class="mb-1 pb-2">
                        <div class="col-6">
                          <label for="inputNumero"><h6 class="text-uppercase mb-3">Número</h5></label>
                          <input type="text" name="numero" id="inputNumero">
                        </div>
                      </div>
            
                      <div class="mb-1 pb-2">
                        <div class="col-6">
                          <label for="inputEsquina"><h6 class="text-uppercase mb-3">Esquina</h5></label>
                          <input type="text" name="esquina" id="inputEsquina">
                        </div>
                      </div>
            
                    </form>
                  </div>

                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-4" id="subtotalesID">
                    <h5 class="text-uppercase">Subtotal</h5>
                  </div>

                  <hr class="my-4">

                  <div id="costoEnvioID" class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Costo Envío</h5>
                  </div>

                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-5" id="totalID">
                    <h5 class="text-uppercase">Total</h5>
                    <h5>AgregarCalculoTotal</h5>
                  </div>

                  <hr class="my-4">

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
    }
document.getElementById("contenedor").innerHTML += htmlContentToAppend;
}

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