let box = document.getElementById('box');
let submitBtn = document.getElementById('submitBtn');
let nbRue= document.getElementById('nbRue');
let typeVoie= document.getElementById('typeVoie');
let nomVoie= document.getElementById('nomVoie');
let codePost= document.getElementById('codePost');
let city= document.getElementById('city');
let result =document.getElementById('result');

box.style.display="flex";
box.style.flexDirection="column";
box.style.width="50%";

submitBtn.style.width="30%";



function makeAdress (a,b,c,d,e){
    let fullAdress = a +", "+ b +" "+c+ " - "+d+ " " +e;
    return fullAdress;
}

submitBtn.addEventListener("click",function(){
    if(nbRue.value == "" | typeVoie.value == "" | nomVoie.value == "" | codePost.value == "" | city.value == ""){
        result.textContent= "Veuillez renseigner les champs demandés."
    }else{
        result.textContent= makeAdress(nbRue.value,typeVoie.value,nomVoie.value,codePost.value,city.value);
    }
});