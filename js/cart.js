let carritoInfo = [];
let subtotalCarrito = 0;
let costoEnvioCarrito = 0;
let subtotalGeneralCarrito = 0;
let totalCarrito= 0;

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

/* <div class="d-flex justify-content-between mb-4" id="subtotalesID">
  <h5 class="text-uppercase">Subtotal</h5>
</div> */

//seguir haciendo
function alertas(){
  let calle = document.getElementById("inputCalle").value;
  let numero = document.getElementById("inputNumero").value;
  let esquina = document.getElementById("inputEsquina").value;

  if(calle==""){
    alert("Debes ingresar una calle")
  }
  if(numero==""){
    alert("Debes ingresar un número de puerta")
  }
  if(esquina==""){
    alert("Debes ingresar una esquina")
  }

  if(document.getElementById("tiposDeEnvio").value !== "0"){
    alert("Debes seleccionar el tipo de envío")
  }

}

//función que calcula el subtotal y es llamada en el input utilizando el evento oninput:
//y llama al subtotal general(suma de subtotales)
function subtotal(cantidad,precio){
  cantidad=document.getElementById("form1").value;
  subtotalCarrito=cantidad*precio
  document.getElementById("subtotalID").innerHTML=`
  <div>
    <h6 class="mb-0">${subtotalCarrito}</h6>
  </div>
  `
  // resolver tema currency
  // <h6 class="mb-0"> ${carritoInfo.articles[i].currency} ${subtotalCarrito}</h6>
  subtotalGeneral(subtotalCarrito);
}

//función que suma los subtotales y llama a la función del costo de envío:
function subtotalGeneral(){
      subtotalGeneralCarrito= 0 + subtotalCarrito;
      document.getElementById("subtotalesID").innerHTML=`
      <div class="d-flex justify-content-between mb-4" id="subtotalesID">
        <h5 class="text-uppercase">Subtotal</h5>
        <h5>${subtotalGeneralCarrito}</h5>
       </div>
      `
      costoEnvio(subtotalGeneralCarrito);
}
// función que calcula el costo de envío (subtotal general más el porcentaje del mismo dependiendo del tipo de envío seleccionado)
//y llama a la función del total
// acordarme de agregar opción value=0 alerta a la hora de apretar botón comprar
function costoEnvio(){
  if (document.getElementById("tiposDeEnvio").value == "1"){
    costoEnvioCarrito= (subtotalGeneralCarrito* 15)/100
  }
  if (document.getElementById("tiposDeEnvio").value == "2"){
    costoEnvioCarrito= (subtotalGeneralCarrito* 7)/100
  }
  if(document.getElementById("tiposDeEnvio").value == "3"){
    costoEnvioCarrito=(subtotalGeneralCarrito*5)/100
  }
  if(document.getElementById("tiposDeEnvio").value == "0"){
    costoEnvioCarrito=""
  }
  document.getElementById("costoEnvioID").innerHTML=`
  <div id="costoEnvioID" class="d-flex justify-content-between mb-5">
    <h5 class="text-uppercase">Costo Envío</h5>
    <h5>${costoEnvioCarrito}</h5>
  </div>
  `
  totalCarritoDeCompra();
  // camposDireccion();
  return costoEnvioCarrito;
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

//   // let titularTarjeta = document.getElementById("titularTarjetaID").value;
//   // let numeroTarjeta = document.getElementById("numeroTarjetaID").value;
//   // let vencimientoTarjeta = document.getElementById("vencimientoTarjetaID").value;
//   // let codigoTarjeta = document.getElementById("codigoTarjetaID").value;
//   // let numeroTransferencia = document.getElementById("numeroTransferenciaID").value;
//     // titularTarjeta!=="" && numeroTarjeta!=="" && vencimientoTarjeta!=="" && codigoTarjeta!=="";
//     // numeroTransferencia!=="";

//forma de pago onclick input opción tarjeta:
function pagoConTarjeta(){
  document.getElementById("numeroTransferenciaID").setAttribute("disabled","true");
  document.getElementById("titularTarjetaID").removeAttribute("disabled","true");
  document.getElementById("numeroTarjetaID").removeAttribute("disabled","true");
  document.getElementById("vencimientoTarjetaID").removeAttribute("disabled","true");
  document.getElementById("codigoTarjetaID").removeAttribute("disabled","true");
}

//forma de pago onclick input opción transferencia:
function pagoConTransferencia(){
  document.getElementById("titularTarjetaID").setAttribute("disabled","true");
  document.getElementById("numeroTarjetaID").setAttribute("disabled","true");
  document.getElementById("vencimientoTarjetaID").setAttribute("disabled","true");
  document.getElementById("codigoTarjetaID").setAttribute("disabled","true");
  document.getElementById("numeroTransferenciaID").removeAttribute("disabled","true");
}
//de acá para abajo hacer
function botonFormaDePago(){
  let calle = document.getElementById("inputCalle").value;
  let numero = document.getElementById("inputNumero").value;
  let esquina = document.getElementById("inputEsquina").value;

  // if (calle!== "" && numero!=="" && esquina!==""&& document.getElementById("tiposDeEnvio").value !== "0"){
  //   document.getElementById("btnFormaDePago").removeAttribute("disabled","true");
  // }else{
  //   alertas();
  // }
  if (calle == "" || numero =="" || esquina =="" || document.getElementById("tiposDeEnvio").value == "0"){
    alertas();
  }
}
//
function camposDireccion(){
  let idTipoEnvio = document.getElementById(tiposDeEnvio);
  // document.getElementById(tiposDeEnvio).classList.remove(input-error-direccion);
  // document.getElementById(tiposDeEnvio).className(input-error-direccion).remove;
  // document.getElementById(tiposDeEnvio).getElementsByClassName(input-error-direccion).remove;
  idTipoEnvio.classList.remove(input-error-direccion);
}

//botón comprar
function finalizarCompra(){
  document.getElementById("botonComprarID").addEventListener("click", function(){
    let calle = document.getElementById("inputCalle").value;
    let numero = document.getElementById("inputNumero").value;
    let esquina = document.getElementById("inputEsquina").value;
        if (calle!== "" && numero!=="" && esquina!==""&&document.getElementById("form1").value>0 && document.getElementById("tiposDeEnvio").value !== "0"){
          formaDePago(carritoInfo);
          document.getElementById("botonComprarID").innerHTML=`
          <button id="botonComprarID" type="button" class="btn btn-dark btn-block btn-lg" data-bs-dismiss="modal" data-mdb-ripple-color="dark">Finalizar compra</button>
          `
          alert("¡Has comprado con éxito!")
        } else {
          alertas()
        }
  })
}

// function finalizarCompra(){
//   document.getElementById("botonComprarID").addEventListener("click", function(){
//     let calle = document.getElementById("inputCalle").value;
//     let numero = document.getElementById("inputNumero").value;
//     let esquina = document.getElementById("inputEsquina").value;
//         if (camposDireccionCompletados && cantidadArticulosMayorAUno && envioSeleccionado && formaDePago(carritoInfo)){
//           document.getElementById("botonComprarID").innerHTML=`
//           <button id="botonComprarID" type="button" class="btn btn-dark btn-block btn-lg" data-bs-dismiss="modal" data-mdb-ripple-color="dark">Finalizar compra</button>
//           `
//           alert("¡Has comprado con éxito!")
//         }else{
//           alertas()
//         }
//   })
// }

function mostrarCarritoInfo(){
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
                      <h6 class="mb-0">${carritoInfo.articles[i].currency} ${carritoInfo.articles[i].count*carritoInfo.articles[i].unitCost}</h6>
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
                      <option value="0">--Selecciona el tipo de envío--</option>
                      <option value="1">Premium 2 a 5 días (15%)</option>
                      <option value="2">Express 5 a 8 días (7%)</option>
                      <option value="3">Standard 12 a 15 días (5%)</option>
                    </select>
                    <p class="input-error-direccion">Debes seleccionar un tipo de envío</p>
                  </div>

                  <hr class="my-4">   

                  <div class="d-flex justify-content-between mb-2">
                  <h5 class="text-uppercase mb-3">Dirección de envío</h5>
                  </div>
                  <div class="container">
                    <form class="row g-3">

                      <div class="mb-1 pb-2">
                        <div class="col-12">
                          <label for="inputCalle"><h6 class="text-uppercase mb-3">Calle</h5></label>
                          <input type="text" name="calle" id="inputCalle" placeholder="Ingresa tu calle" size="30">
                          <p class="input-error-direccion">Debes ingresar una calle</p>
                        </div>
                      </div>
            
                      <div class="mb-1 pb-2">
                        <div class="col-12">
                          <label for="inputNumero"><h6 class="text-uppercase mb-3">Número</h5></label>
                          <input type="text" name="numero" id="inputNumero" placeholder="Ingresa un número de puerta" size="30">
                          <p class="input-error-direccion">Debes ingresar un número de puerta</p>
                        </div>
                      </div>
            
                      <div class="mb-1 pb-2">
                        <div class="col-12">
                          <label for="inputEsquina"><h6 class="text-uppercase mb-3">Esquina</h5></label>
                          <input type="text" name="esquina" id="inputEsquina" placeholder="Ingresa una esquina" size="30">
                          <p class="input-error-direccion">Debes ingresar una esquina</p>
                        </div>
                      </div>
            
                    </form>
                  </div>

                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-4" id="subtotalesID">
                    <h5 class="text-uppercase">Subtotal</h5>
                    <h5>${subtotalGeneralCarrito}</h5>
                  </div>

                  <hr class="my-4">

                  <div id="costoEnvioID" class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Costo Envío</h5>
                  </div>

                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-5" id="totalID">
                    <h5 class="text-uppercase">Total</h5>
                    <h5>0</h5>
                  </div>

                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-5" id="totalID">
                    <h5 class="text-uppercase">Forma de pago</h5>
                    <button type="button" id="btnFormaDePago" class="btn btn-dark btn-primary" data-bs-toggle="modal" data-mdb-ripple-color="dark" data-bs-target="#staticBackdrop" onclick="botonFormaDePago">
                     Seleccionar
                    </button>

                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog modal-lg modal-dialog modal-sm">
                        <div class="modal-content">
                          <div class="modal-body">
                          <div class="col-lg-12">

                          <div class="card bg-secondary text-white rounded-3">
                            <div class="card-body">
                            <h3 class="fw-bold mb-5 mt-2 pt-1">Forma de pago</h3>
                            <hr class="my-4">
                              
                              <form class="mt-4">
                                <div class="d-flex justify-content-between align-items-center mb-4">
                                  <h5 class="mb-0"><input id="opcionTarjetaID" type="radio" name="pago" value="Tarjeta" required onclick="pagoConTarjeta()">Tarjeta de crédito</h5>
                                </div>

                                <p class="mb-0">Tipo de tarjeta</p>
                                <img src="https://1000marcas.net/wp-content/uploads/2019/12/Visa-Logo-2005.jpg" class="img-fluid rounded-3" style="width:60px;">
                                <img src="http://www.descuento.uy/wp-content/uploads/2018/12/logo-Santander.jpg" class="img-fluid rounded-3" style="width:60px;">
                                <img src="https://logos-marcas.com/wp-content/uploads/2020/04/PayPal-Logotipo-2007%E2%80%932014.jpg" class="img-fluid rounded-3" style="width:60px;">
                                <img src="https://logos-marcas.com/wp-content/uploads/2020/09/MasterCard-Logotipo-1979-1990-650x366.jpg" class="img-fluid rounded-3" style="width:60px;">
                                <img src="https://www.expertiza.uy/media/posts/482/logo-bbva.webp" class="img-fluid rounded-3" style="width:60px;">
                                <img src="https://www.todoenuruguay.com/wp-content/uploads/2021/05/scotiabank-logo-min.png" class="img-fluid rounded-3" style="width:60px;">

                                <div class="form-outline form-white mb-4">
                                  <label class="form-label" for="typeName">Nombre del titular</label>
                                  <input type="text" id="titularTarjetaID" class="form-control form-control-lg" 
                                    placeholder="Nombre del titular" />
                                </div>
          
                                <div class="form-outline form-white mb-4">
                                  <label class="form-label" for="typeText">Número de tarjeta</label>
                                  <input type="text" id="numeroTarjetaID" class="form-control form-control-lg" size="16"
                                    placeholder="---- ---- ---- ----" minlength="16" maxlength="16" />
                                </div>
          
                                <div class="row mb-4">
                                  <div class="col-md-6">
                                    <div class="form-outline form-white">
                                      <label class="form-label" for="typeExp">Vencimiento</label>
                                      <input type="text" id="vencimientoTarjetaID" class="form-control form-control-lg"
                                        placeholder="MM/YY" size="4" minlength="4" maxlength="4" />
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="form-outline form-white">
                                      <label class="form-label" for="typeText">CVV</label>
                                      <input type="password" id="codigoTarjetaID" class="form-control form-control-lg"
                                        placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                    </div>
                                  </div>
                                </div>

                                <hr class="my-4">

                                <div class="form-outline form-white mb-4">
                                  <h5 class="mb-0"><input id="opcionTransferenciaID" type="radio" name="pago" value="Transferencia" required onclick="pagoConTransferencia()">Transferencia bancaria</h5>
                                  <label class="form-label" for="typeName">Número de cuenta</label>
                                  <input type="text" id="numeroTransferenciaID" class="form-control form-control-lg" 
                                    placeholder="Número de cuenta" />
                                </div>
          
                              </form>
          
                              <hr class="my-4">
          

                              <button id="botonComprarID" type="button" class="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark" onclick="finalizarCompra()">Finalizar compra</button>
                              <button id="botonCancelarID" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          
                            </div>
                          </div>
          
                        </div>
          
                      </div>
          
                           </div>
                        </div>
                     </div>
                   </div>
                  </div>

                  <hr class="my-4">

                  

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
  console.log(carritoInfo.articles[0].currency)
  console.log(typeof carritoInfo.articles[0].currency)
  console.log(carritoInfo.articles[0].count)
  console.log(typeof carritoInfo.articles[0].count)
  console.log(carritoInfo.articles[0].unitCost)
  console.log(typeof carritoInfo.articles[0].unitCost)
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