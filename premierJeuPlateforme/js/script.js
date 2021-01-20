
///////////////////////////
//ECRAN DE JEU
let screen_game = document.getElementById('screen_game');
//traitement cadre jeu
screen_game.style.height = "500px";
screen_game.style.width = "1000px";
screen_game.style.margin = "0 auto";
screen_game.style.border = "1px solid black";
screen_game.style.position = "relative";
screen_game.style.backgroundColor ="grey";
setInterval(countDown,1000);

///////////////////////////
//DATA JEU
let game_data = document.getElementById('game_data');
//traitement cadre data
game_data.style.backgroundColor ="black";
game_data.style.color ="white";
game_data.style.height = "100px";
game_data.style.width = "1000px";
game_data.style.margin = "0 auto";
game_data.style.border = "1px solid black";
game_data.style.display ="flex";
game_data.style.justifyContent ="center";
game_data.style.alignItems ="center";

//mise en place timer
let timer = document.getElementById('timer');
let timer_value = 10;

timer.textContent = timer_value;
timer.style.color ="yellow";
timer.style.fontSize ="3rem";
timer.style.display ="flex";
timer.style.justifyContent ="center";
timer.style.alignItems ="center";
timer.style.margin ="0";

function countDown(){
    if (timer_value > 1){
        timer_value = timer_value -1;
        timer.textContent = timer_value;
    }else{
        arrow.textContent = "DEAD";
        arrow.style.color = "red";
        arrow.style.fontSize = "2rem";
        game_obstacle1.style.backgroundColor ="red";
        game_obstacle2.style.backgroundColor ="red";
        game_obstacle3.style.backgroundColor ="red";
        game_winZone.style.backgroundColor= "red";
        exit.textContent="BYE";
        timer.textContent = "YOU LOOSE !";
        window.alert('You are out of time, sorry you loose this!');
        location.reload();        
    }
}

///////////////////////////
//PERSONNAGE
let game_character = document.getElementById('game_character');
let arrow = document.getElementById('arrow');
let movingX = 3;
let movingY = 3;

//traitement visuel du personnage joueur
game_character.style.height = "100px";
game_character.style.width = "100px";
game_character.style.border = "3px solid yellow";
game_character.style.backgroundColor = "black";
game_character.style.position = "relative";
game_character.style.top = movingY + "px";
game_character.style.left = movingX + "px";
game_character.style.display ="flex";
game_character.style.justifyContent ="center";
game_character.style.alignItems ="center";
game_character.style.zIndex ="1";
arrow.textContent = "☻";
arrow.style.color="yellow";
arrow.style.fontSize="3rem";

//DEPLACEMENTS PERSONNAGE
function stepRight(){
    game_character.style.left = (movingX -= 10) +"px";
}
function stepLeft(){
    game_character.style.left = (movingX += 10) +"px";
}
function stepUp(){
    game_character.style.top = (movingY -= 10) +"px";
}
function stepDown(){
    game_character.style.top = (movingY += 10) +"px";
}

////////////////////////////////
//mise en place des obstacles
let game_obstacle1 = document.getElementById('game_obstacle1');
let game_obstacle2 = document.getElementById('game_obstacle2');
let game_obstacle3 = document.getElementById('game_obstacle3');

//visuel et position obstacles
game_obstacle1.style.position = "absolute";
game_obstacle1.style.top = "120px";
game_obstacle1.style.left = "50px";
game_obstacle1.style.width = "800px";
game_obstacle1.style.height = "40px";
game_obstacle1.style.backgroundColor = "black";

game_obstacle2.style.position = "absolute";
game_obstacle2.style.top = "295px";
game_obstacle2.style.left = "160px";
game_obstacle2.style.width = "700px";
game_obstacle2.style.height = "40px";
game_obstacle2.style.backgroundColor = "black";

game_obstacle3.style.position = "absolute";
game_obstacle3.style.top = "272px";
game_obstacle3.style.left = "160px";
game_obstacle3.style.width = "40px";
game_obstacle3.style.height = "100px";
game_obstacle3.style.backgroundColor = "black";

////////////////////////////////////
//mise en place win zone
let game_winZone = document.getElementById('game_winZone');
let exit = document.getElementById('exit');

// traitement visuel win zone
game_winZone.style.display= "flex";
game_winZone.style.justifyContent= "center";
game_winZone.style.alignItems= "center";
game_winZone.style.backgroundColor= "yellow";
game_winZone.style.height= "150px";
game_winZone.style.width= "150px";
game_winZone.style.position= "relative";
game_winZone.style.top= "233px";
game_winZone.style.left= "265px";
exit.style.color="black";
exit.style.fontSize="3rem";


///////////////////////////////////////////////////////////////////////////
/////////////////////////////////GAMEPLAY/////////////////////////////////

//on créer la fonction permettant d'étudier les déplacements du personnage:
let character_move = function(e){
    e.stopPropagation();
    e.preventDefault();
    //gestion déplacements personnage et limites du cadre de jeu
    if ( e.key == 'z'){
        if (movingY <= 3){
            game_character.style.top = movingY + "px";
            arrow.textContent = "▲";
        }else{
            stepUp();
            arrow.textContent = "▲";
        }
    }else if ( e.key == 's'){
        if (movingY < 390){
            stepDown();
            arrow.textContent = "▼";
        }else{
            game_character.style.top = movingY + "px";
            arrow.textContent = "▼";
        }
    }else if ( e.key == 'q'){
        if (movingX <= 3){
            game_character.style.left = movingX + "px";
            arrow.textContent = "◄";
        }else{
            stepRight();
            arrow.textContent = "◄";
        }
    }else if ( e.key == 'd'){
        if (movingX > 888){
            game_character.style.left = movingX + "px";
            arrow.textContent = "►";
        }else{
            stepLeft();
            arrow.textContent = "►";
        }
    }
    ///////////////////////////////////////////
    //comparaison position joueur, obstables & winning zone
    //winning zone
    if ( (movingX > 265) & (movingX  < 315) & (movingY >= 340) & (movingY < 383)){
        game_winZone.style.backgroundColor= "green";
        arrow.textContent = "WIN";
        window.alert("Congrats you just escape ! Can you do better this time ?");
        location.reload();
        //on enlève le listener lorsque que le joueur à réussi à atteindre l'objectif
        document.removeEventlistener('keydown',character_move);   
    //obstacles
    //obstacle 1 -barre horizontale start - obstacle 2 barre hori middle - obstacle3 barre verti middle
    }else if (((movingX > 0) & (movingX  < 850) & (movingY >= 13) & (movingY < 160)) | ((movingX > 103) & (movingX  <= 853) & (movingY >= 193) & (movingY < 333)) | ((movingX > 53) & (movingX  < 193) & (movingY >= 173) & (movingY < 373) )){
        //any obstacle
        arrow.textContent = "DEAD";
        arrow.style.color = "red";
        arrow.style.fontSize = "2rem";
        timer.textContent = "YOU LOOSE !";
        window.alert("You hurt a wall! Sorry you loose.");
        location.reload();
        //obstacle1 -barre horizontale start
        if((movingX > 0) & (movingX  < 850) & (movingY >= 13) & (movingY < 160)){
            game_obstacle1.style.backgroundColor ="red";
        //obstacle2 barre hori middle
        }else if ((movingX > 103) & (movingX  <= 853) & (movingY >= 193) & (movingY < 333)){
            game_obstacle2.style.backgroundColor ="red";
        //obstacle3 barre verti middle
        }else{
            game_obstacle3.style.backgroundColor ="red";
        }
        //on enlève le listener lorsque qu'un obstacle est touché
        document.removeEventlistener('keydown',character_move);
    }
    else{
        game_winZone.style.backgroundColor= "yellow";
        game_obstacle1.style.backgroundColor ="black";
        game_obstacle2.style.backgroundColor ="black";
        game_obstacle3.style.backgroundColor ="black";
        arrow.style.color = "yellow";
        arrow.style.fontSize = "3rem";
    }
    
}

//on ajoute un listener sur le clavier joueur pour comprendre les demandes de déplacements 
document.addEventListener('keydown',character_move);

