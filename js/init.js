const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const PRODUCTOS_TODOS = `https://japceibal.github.io/emercado-api/cats_products/${localStorage.getItem("catID")}.json`;
const PRODUCTO_INFO = `https://japceibal.github.io/emercado-api/products/${localStorage.getItem("productID")}.json`;
const PRODUCTO_INFO_COMMENTS = `https://japceibal.github.io/emercado-api/products_comments/${localStorage.getItem("productID")}.json`
const CARRITO_INFO = `https://japceibal.github.io/emercado-api/user_cart/${localStorage.getItem("userID")}.json`;
const CARRITO_INFO_USUARIO_25801 = `https://japceibal.github.io/emercado-api/user_cart/25801.json`;



let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

// let menuDesplegable= function(){
//   document.addEventListener("DOMContentLoaded", function(){
//     let email=localStorage.getItem("usuario");
//     document.getElementById("emailIngresado").innerHTML=email;
//     document.getElementById("miCarrito").addEventListener("click", function() {
//         window.location = "cart.html"
//     });
//     document.getElementById("miPerfil").addEventListener("click", function() {
//         if (email.valueOf!==""){
//             window.location = "my-profile.html" 
//         }
//     });
//     document.getElementById("cerrarSesion").addEventListener("click", function() {
//         window.location = "index.html"
//     });
    
//   });
// }