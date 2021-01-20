//variables screen
let firstScreen = document.getElementById ("screenOne");
let secndScreen = document.getElementById ("screenTwo");
let thirdScreen = document.getElementById ("screenThree");
let fourthScreen = document.getElementById ("screenFour");
let fifthScreen = document.getElementById ("screenFive");

firstScreen.style.display = "flex";
secndScreen.style.display = "none";
thirdScreen.style.display = "none";
fourthScreen.style.display = "none";
fifthScreen.style.display = "none";

//variables screen 1
let sandwich = document.getElementById ("sandwich");
let mezze = document.getElementById ("mezze");
let day = document.getElementById ("day");
let sandPrice = 5.50;
let mezzPrice = 10.50;
let dayPrice = 8;
let totalPrice = 0;
let priceResult= document.getElementById("priceResult");
let firstOk = document.getElementById("firstOk");
let firstError = document.getElementById("firstError");
firstError.style.display = "none";


//Actions screen 1


firstOk.addEventListener('click', function(event){

    if (sandwich.checked == false &&  mezze.checked == false && day.checked == false){
        firstError.style.display = "block";
    }else{
        firstError.style.display = "none";
        totalPrice = 0;
        if (sandwich.checked == true){
        totalPrice = totalPrice+ sandPrice; 
        }
        if (mezze.checked == true ){
        totalPrice = totalPrice+ mezzPrice;
       }
       if (day.checked == true){
        totalPrice = totalPrice+ dayPrice;
       }
        firstScreen.style.display = "none";
        secndScreen.style.display = "flex";
        priceResult.textContent = "Le prix total de votre commande est de " + totalPrice + " euros.";
    }   
});
//ACTIONS SCREEN 2
backTwo.addEventListener('click', function(event){
    firstScreen.style.display = "flex";
    secndScreen.style.display = "none";
    // $(input["type=checkbox"]).prop('checked',false);
});
   
okTwo.addEventListener('click', function(event){
    thirdScreen.style.display = "flex";
    secndScreen.style.display = "none";
});

//ACTIONS SCREEN 3
okThree.addEventListener('click',function(event){
    if (now.checked == true){
        fourthScreen.style.display = "flex";
        thirdScreen.style.display = "none"; 
    }else if (after.checked == true){
        fifthScreen.style.display = "flex";
        thirdScreen.style.display = "none"; 
    }
});
backThree.addEventListener('click',function(event){
    thirdScreen.style.display = "none";
    secndScreen.style.display = "flex";
})
//ACTIONS SCREEN 4
let fourError = document.getElementById("fourError");
fourError.style.display = "none";

backFour.addEventListener('click', function(event){
    thirdScreen.style.display = "flex";
    fourthScreen.style.display = "none";
    // $(input["type=checkbox"]).prop('checked',false);
});

okFour.addEventListener('click',function(event){
    if ((cbId.value == "") || (cbMonth.value == "") || (cbYear.value == "") || (cbPin.value == "") || (cbName.value == "")){
        fourError.style.display = "block";
    }else{
        fifthScreen.style.display = "flex";
        fourthScreen.style.display = "none";
    }
});

//reste à tester la validité des entrées CB avant validation
// + reset des screens au bouton retour
//+ bouton screen 5 "nouvelle commande" >>>screen 1
// mise en page screen à revoir







