let verbe = document.getElementById("verbe");
let submit_btn = document.getElementById("submit_btn");
let conjug = document.getElementById("conjug");
let result = document.getElementById("result");

//Suppression des deux derniers caractères d’une chaîne de caractères :
// let word = "Hello";
// let word_minus_two_last_letters = word.substring(0, word.length - 2)


function conjuguer(verbER){
    let radical = verbER.substring(0,verbER.length - 2);
    let jeConjug = "Je " + radical + "e\n" + "<br>" +"Tu " + radical + "es\n" + "<br>"+ "Il " + radical + "e\n" + "<br>"+ "Nous " + radical + "ons\n" + "<br>"+"Vous " + radical + "ez\n" + "<br>" +"Ils " + radical + "ent";
    return jeConjug;
}

let resultConjuguer = conjuguer("penser");
console.log(resultConjuguer);

submit_btn.addEventListener('click', function(e){
    if(verbe.value==""){
        conjug.textContent = "Veuillez saisir un verbe du premier groupe."
    }else{
        conjug.textContent = conjuguer(verbe.value);   
        result.innerHTML = "<p id=\"conjug\">" + conjug.textContent + "</p>" 
    }
    
});