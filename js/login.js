document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("submitButton").addEventListener("click",function(){
        if (email!=="" && password!==""){
            window.location.replace("portada.html");
        }})
    })
    let email=document.getElementById("inputEmail").value;
    let password=document.getElementById("inputPassword").value;