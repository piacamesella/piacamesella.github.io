// const formDireccionEnvio=document.getElementById("formDireccionEnvio");
const formFormaDePago=document.getElementById("formFormaDePago");
let carritoInfo = [];
let subtotalCarrito = 0;
let costoEnvioCarrito = 0;
let subtotalGeneralCarrito = 0;
let totalCarrito= 0;
let valorInputCalle = "";
let valorInputNumero = "";
let valorInputEsquina = "";
let valorTipoEnvio = 0;
let valorCantidad = 0;

function setUserID(id){
    localStorage.setItem("userID",id);
}

//función que calcula el subtotal y es llamada en el input utilizando el evento oninput:
//y llama al subtotal general(suma de subtotales)
function subtotal(cantidad,precio){
  cantidad=document.getElementById("form1").value;
  valorCantidad=document.getElementById("form1").value;
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
//probar bucle incrementar
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
//la llamo en onchange()
function costoEnvio(){
  valorTipoEnvio = document.getElementById("tiposDeEnvio").value;
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
//forma de pago onclick input opción tarjeta, deshabilita opción transferencia y valida campos de tarjeta:
function pagoConTarjeta(){
  // let titularTarjeta = document.getElementById("titularTarjetaID").value;
  // let numeroTarjeta = document.getElementById("numeroTarjetaID").value;
  // let vencimientoTarjeta = document.getElementById("vencimientoTarjetaID").value;
  // let codigoTarjeta = document.getElementById("codigoTarjetaID").value;

  document.getElementById("numeroTransferenciaID").setAttribute("disabled","true");
  document.getElementById("titularTarjetaID").removeAttribute("disabled","true");
  document.getElementById("numeroTarjetaID").removeAttribute("disabled","true");
  document.getElementById("vencimientoTarjetaID").removeAttribute("disabled","true");
  document.getElementById("codigoTarjetaID").removeAttribute("disabled","true");
  
  // document.getElementById("botonComprarID").addEventListener("click",function(){
  //   if(titularTarjeta==""||numeroTarjeta==""||vencimientoTarjeta==""||codigoTarjeta==""){
  //     alert("Debes introducir los datos de la tarjeta");
  //   }
  // })
}
//forma de pago onclick input opción transferencia, deshabilita opción tarjeta y valida campos de transferencia:
function pagoConTransferencia(){
  // let numeroTransferencia = document.getElementById("numeroTransferenciaID").value;

  document.getElementById("titularTarjetaID").setAttribute("disabled","true");
  document.getElementById("numeroTarjetaID").setAttribute("disabled","true");
  document.getElementById("vencimientoTarjetaID").setAttribute("disabled","true");
  document.getElementById("codigoTarjetaID").setAttribute("disabled","true");
  document.getElementById("numeroTransferenciaID").removeAttribute("disabled","true");

  // document.getElementById("botonComprarID").addEventListener("click",function(){
  //   if(numeroTransferencia==""){
  //     alert("Debes introducir el número de transferencia");
  //   }
  // })
}
// onkeyup
// function inputTransferencia(){
//   let numeroTransferencia = document.getElementById("numeroTransferenciaID").value;

//   document.getElementById("botonComprarID").addEventListener("click",function(){
//     if(numeroTransferencia==""){
//       alert("Debes introducir el número de transferencia");
//     }
//   })
// }

// function  validacionEnvio(envio){
//   let errorEnvio = document.getElementById("errorEnvio");
//   envio =valorTipoEnvio;
//     if (envio.value!=="0"){
//       errorEnvio.classList.remove("input-error-envio-activado");
//       errorEnvio.classList.add("input-error-envio-desactivado");
//     }else{
//       document.getElementById("btnFormaDePago").setAttribute("disabled","true");
//       errorEnvio.classList.remove("input-error-envio-desactivado");
//       errorEnvio.classList.add("input-error-envio-activado");
//     }
// }

//funcion input calle que avisa si el campo está vacío adjudicándole clases, y de lo contrario se le quitarán
//onkeyup
function validacionInputCalle(calleValue){
  let errorCalle =  document.getElementById("errorInputCalle");
  let calle=document.getElementById("inputCalle");
  calleValue=document.getElementById("inputCalle").value;
  valorInputCalle=calleValue;
  if (calleValue==""){
    document.getElementById("btnFormaDePago").setAttribute("disabled","true");
    errorCalle.classList.remove("input-error-direccion");
    errorCalle.classList.add("input-error-direccion-activado");
    calle.classList.remove("error-borde-desactivado");
    calle.classList.add("error-borde");
    // document.getElementById("btnFormaDePago").removeAttribute("disabled","true");
  }else{
    document.getElementById("btnFormaDePago").removeAttribute("disabled","true");
    errorCalle.classList.remove("input-error-direccion-activado");
    errorCalle.classList.add("input-error-direccion");
    calle.classList.remove("error-borde");
    calle.classList.add("error-borde-desactivado");
  }
  return valorInputCalle;
}
//funcion input numero que avisa si el campo está vacío adjudicándole clases, y de lo contrario se le quitarán
//onkeyup
function validacionInputNumero(numeroValue){
  let errorNumero =  document.getElementById("errorInputNumero");
  let numero=document.getElementById("inputNumero");
  numeroValue=document.getElementById("inputNumero").value;
  valorInputNumero=numeroValue;
  if (numeroValue==""){
    document.getElementById("btnFormaDePago").setAttribute("disabled","true");
    errorNumero.classList.remove("input-error-direccion");
    errorNumero.classList.add("input-error-direccion-activado");
    numero.classList.remove("error-borde-desactivado");
    numero.classList.add("error-borde");
    // document.getElementById("btnFormaDePago").removeAttribute("disabled","true");
  }else{
    document.getElementById("btnFormaDePago").removeAttribute("disabled","true");
    errorNumero.classList.remove("input-error-direccion-activado");
    errorNumero.classList.add("input-error-direccion");
    numero.classList.remove("error-borde");
    numero.classList.add("error-borde-desactivado");
  }
  return valorInputNumero;
}
//funcion input esquina que avisa si el campo está vacío adjudicándole clases, y de lo contrario se le quitarán
//onkeyup
function validacionInputEsquina(esquinaValue){
  let errorEsquina = document.getElementById("errorInputEsquina");
  let esquina=document.getElementById("inputEsquina");
  esquinaValue=document.getElementById("inputEsquina").value;
  valorInputEsquina=esquinaValue;
  if (esquinaValue==""){
    document.getElementById("btnFormaDePago").setAttribute("disabled","true");
    errorEsquina.classList.remove("input-error-direccion");
    errorEsquina.classList.add("input-error-direccion-activado");
    esquina.classList.remove("error-borde-desactivado");
    esquina.classList.add("error-borde");
  }else{
    document.getElementById("btnFormaDePago").removeAttribute("disabled","true");
    errorEsquina.classList.remove("input-error-direccion-activado");
    errorEsquina.classList.add("input-error-direccion");
    esquina.classList.remove("error-borde");
    esquina.classList.add("error-borde-desactivado");
  }
  return valorInputEsquina;
}

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

                      <input id="form1" min="1" name="quantity" value="${carritoInfo.articles[i].count}" type="number" oninput="subtotal(${carritoInfo.articles[i].count},${carritoInfo.articles[i].unitCost})"
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
                    <p class="input-error-envio-activado" id="errorEnvio">Debes seleccionar un tipo de envío</p>
                  </div>

                  <hr class="my-4">   

                  <div class="d-flex justify-content-between mb-2">
                  <h5 class="text-uppercase mb-3">Dirección de envío</h5>
                  </div>
                  <div class="container">
                    <form id="formDireccionEnvio" class="row g-3">

                      <div class="mb-1 pb-2">
                        <div class="col-12">
                          <label for="inputCalle"><h6 class="text-uppercase mb-3 error-borde-desactivado">Calle</h5></label>
                          <input type="text" name="calle" id="inputCalle" placeholder="Ingresa tu calle" size="30" onkeyup="validacionInputCalle(${valorInputCalle})">
                          <p class="input-error-direccion" id="errorInputCalle">Debes ingresar una calle</p>
                        </div>
                      </div>
            
                      <div class="mb-1 pb-2">
                        <div class="col-12">
                          <label for="inputNumero"><h6 class="text-uppercase mb-3 error-borde-desactivado">Número</h5></label>
                          <input type="text" name="numero" id="inputNumero" placeholder="Ingresa un número de puerta" size="30" onkeyup="validacionInputNumero()">
                          <p class="input-error-direccion" id="errorInputNumero">Debes ingresar un número de puerta</p>
                        </div>
                      </div>
            
                      <div class="mb-1 pb-2">
                        <div class="col-12">
                          <label for="inputEsquina"><h6 class="text-uppercase mb-3 error-borde-desactivado">Esquina</h5></label>
                          <input type="text" name="esquina" id="inputEsquina" placeholder="Ingresa una esquina" size="30" onkeyup="validacionInputEsquina()">
                          <p class="input-error-direccion" id="errorInputEsquina">Debes ingresar una esquina</p>
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
                    <button type="button" id="btnFormaDePago" class="btn btn-dark btn-primary" data-bs-toggle="modal" data-mdb-ripple-color="dark" data-bs-target="#staticBackdrop" onclick="botonFormaDePago()">
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
                              
                              <form id="formFormaDePago" class="mt-4">
                                <div class="d-flex justify-content-between align-items-center mb-4">
                                  <h5 class="mb-0"><input id="opcionTarjetaID" type="radio" name="pago" value="Tarjeta" required onclick="pagoConTarjeta()">Tarjeta de crédito</h5>
                                </div>

                                <p class="mb-0">Tipo de tarjeta</p>
                                <a href="#!" type="submit" class="text-white"><i
                                class="fab fa-cc-mastercard fa-2x me-2"></i></a>
                                <a href="#!" type="submit" class="text-white"><i
                                class="fab fa-cc-visa fa-2x me-2"></i></a>
                                <a href="#!" type="submit" class="text-white"><i
                                class="fab fa-cc-amex fa-2x me-2"></i></a>
                                <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>
        

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
                                    placeholder="Número de cuenta"  onkeyup="inputTransferencia()"/>
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
      if (email.valueOf!==""){
        window.location = "my-profile.html" 
    }
    });
    //cambiar el cerrar sesión para que no borre al usuario del local storage
    document.getElementById("cerrarSesion").addEventListener("click", function() {
        // localStorage.removeItem("usuario");
        window.location = "index.html"
    });
    
});