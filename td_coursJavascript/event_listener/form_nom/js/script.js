let username = document.getElementById("usrtxt");
let name = document.getElementById("nmtxt");
let button = document.getElementById ("btn");
let paragraph=document.getElementById("message");
let formul=document.getElementsByClassName("formulaire");

button.addEventListener('click', function(event){
    if ((name.value == "") && (username.value == "")){
        paragraph.textContent="Formulaire invalide, veuillez renseigner tous les champs."
        formul.style.display="block";
    }else{ 
        paragraph.textContent="Bienvenu(e) " + username.value +" "+ name.value + "."
        formul.style.display= "none";
    }
});

