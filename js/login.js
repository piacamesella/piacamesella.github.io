document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("submitButton").addEventListener("click",function(){
        if (getElementById("inputEmail")!== "" && getElementById("inputPassword")!==""){
            window.location.replace("https://github.com/piacamesella/piacamesella.github.io/blob/main/portada.html");
        }})
    })
    let email=document.getElementById("inputEmail").value;
    let password=document.getElementById("inputPassword").value;
    