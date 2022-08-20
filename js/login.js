document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("submitButton").addEventListener("click",function(){
        let email=document.getElementById("inputEmail").value;
        let password=document.getElementById("inputPassword").value;
        if (email!== "" && password!==""){
            window.location.replace("https://github.com/piacamesella/piacamesella.github.io/blob/main/portada.html");
        }})
    })

    