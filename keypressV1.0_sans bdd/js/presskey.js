let screen_home = document.getElementById("screen_home");
let screen_game = document.getElementById("screen_game");
let screen_partyEnd = document.getElementById("screen_partyEnd");
let screen_uploadScore = document.getElementById("screen_uploadScore");

screen_home.style.display = "flex";
screen_game.style.display = "none";
screen_partyEnd.style.display = "none";
screen_uploadScore.style.display = "none";

let btn_start = document.getElementById('start');

////////////////////////////////
////mise en place du chronomètre
//prend la valeur du champs compteur
let timer = document.getElementById("timer");
let count = false; 
// chronomètre Diminue le champs compteur jusqu'à 0
function countdown(){
    // Conversion en nombre du texte du compteur
    let timernb = Number(timer.textContent);           
    // timer.textContent = timernb - 1;
    if (timernb > 1) {
        timer.textContent = timernb - 1;
    }else{
        //Si compteur arrive zero, actions à effectuer
        // ammène au screen 3
        screen_game.style.display = "none";
        screen_partyEnd.style.display = "flex";
        count = true
    }return count
}
////////////////////////////////////
//mise en place du générateur de lettres    

//récupère le champs texte de la lettre
let rdm_letter = document.getElementById('rdm-letter');

////générateur chaine de caracères
//on vérifie qu'il n'y ai pas de chaine de caractère au chargement de la page
document.addEventListener("DOMContentLoaded", RandomLetter, false);

//on génère une lettre en faisant un index de l'alphabet déclaré en var=alphabet avec la propriété Math.floor puis math.random
function RandomLetter(){
    // Ici on initialise l'alphabet 
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
     
    // Et ici on récupère l'élément html qui possède l'id 'rdm-letter' et on lui assigne un charactère aléatoire de 'alphabet'
    //
    // Plus précisément,
    // 1) on génère un index aléatoire en fonction de la longueur du string :
    // Math.floor(Math.random() * alphabet.length) ==> index aléatoire
    // 2) avec l'index, on récupère simplement la lettre associée :
    // alphabet[index]
    /*window.setTimeout("pickRandomLetter()",1000); */
    rdm_letter.textContent = alphabet[Math.floor(Math.random() * alphabet.length)];    
}
 

// /fonction de sauvegarde du score final du joueur
function storeValue(){
    localStorage.setItem ("saved_Score" , "playerName");
}

// fonction récupère score et affiche
function getScore(){
    //récupère les données
    localStorage.getItem ("saved_Score" , "playerName");
    ///manque l'affichage
}


//ACTION SCREEN 1 // HOME

btn_start.addEventListener('click', function(event){
    event.stopPropagation();
    screen_home.style.display = "none";
    screen_game.style.display = "flex";
     // Appelle la fonction countdown toutes les secondes (1000 millisecondes)
    timer.textContent = 10; // temps imparti
    setInterval(countdown, 1000);
    // if (count == true){
    //     screen_partyEnd.style.display = "flex";
    // }   
    
});

//action SCREEN 2 //GAME
let scorenb = 0;
let score = document.getElementById("score");
let finalScore = document.getElementById("finalScore");
let saved_Score = document.getElementById("saved_Score");

let roundNb = 10;
let round = document.getElementById("round");

document.addEventListener('keydown', function (e){
    if(e.key == rdm_letter.textContent) {
        e.preventDefault();
        //app-specific code goes here
        scorenb++;
        roundNb--;
        round.textContent = roundNb;
        score.textContent =  scorenb;
    }else{
        roundNb--;
        round.textContent =  roundNb;
        score.textContent =  scorenb;
    }
    RandomLetter()
    finalScore.textContent = scorenb;  
    saved_Score.textContent = scorenb; 
});

//action screen 3 // SCORE TAB

let btn_gosave = document.getElementById("go-save");
let btn_replay = document.getElementById("new-game");

btn_replay.addEventListener('click',function(event){
    event.stopPropagation();
    screen_partyEnd.style.display = "none";
    screen_game.style.display = "flex";
    timer.textContent = 10; 
    scorenb =  0;
    roundNb = 10;
    round.textContent = 10;
    score.textContent =  0;     
});
//MISE EN PLACE DE LA BASE DE DONNEE. A REVOIR
// btn_gosave.addEventListener('click',function(event){
//     event.stopPropagation();
//     screen_partyEnd.style.display = "none";
//     screen_uploadScore.style.display = "flex";    
// });


//actions screen 4 //STORAGE

let save_btn = document.getElementById("save_btn");

save_btn.addEventListener('click',function(event){
    storeValue();
    screen_partyEnd.style.display = "flex";
    screen_uploadScore.style.display = "none";  
});



