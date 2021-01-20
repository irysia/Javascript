//exercice 1

function introduce (name){
    console.log ("Hello my name is " + name);
}

introduce ("Jim");
introduce ("Johnny");
introduce ("Nick");

//exercice 2

let para_one = document.getElementById("para_one");

function changeParagraphColor (color){
    para_one.style.color = color;
}

// changeParagraphColor ("blue");
// changeParagraphColor ("red");
// changeParagraphColor ("Yellow");

//exercice 3

let btn_red = document.getElementById("btn_red");
let btn_blue = document.getElementById ("btn_blue");
let btn_yellow = document.getElementById("btn_yellow");

btn_red.addEventListener('click',function (e){
    changeParagraphColor ("red");
});

btn_blue.addEventListener('click',function (e){
    changeParagraphColor ("blue");
});

btn_yellow.addEventListener('click',function(e){
    changeParagraphColor ("yellow");
});


//exercice 4

function welcome (name){
    console.log ("Nice to meet you " + name);
}

welcome ("Jim");

let username = "Mick";

welcome(username);

//exercice 5

function tellWeight (weight){
    console.log ("Your weight is " + weight + " Kg.");
}

tellWeight(62);
let userweight = 70;
tellWeight(userweight);


//exercie 6

let voltage =500;

function getVoltageType (voltageValue){
    if(voltageValue <= 50 ){
        console.log("Très basse tension TBT");
    }else if (voltageValue > 50 & voltageValue<= 1000){
        console.log("Basse tension BT")
    }else if (voltageValue > 1000 & voltageValue<= 50000) {
        console.log("Haute tension A HTA")
    }else{
        console.log("Haute tension B HTB")
    }
}

getVoltageType(voltage);

//exercice 7

function congratulate (firstname, lastname){
    console.log("Congratulations "+firstname+ " " + lastname + " , you won!");
}

let userFirstName = "Mick";
let userLastName = "Cliff";
congratulate ("simon", "petit");
congratulate ("Julia", "grande");
congratulate (userFirstName, userLastName);

//exercice 8

function averageValue (int1,int2,int3,int4){
 console.log (((int1+int2+int3+int4)/4));
}

let int1_value=10;
let int2_value=10;
let int3_value=10;
let int4_value=10;

averageValue(int1_value,int2_value,int3_value,int4_value);

//exercice 9

let userWeight = document.getElementById("weight");
let userSize = document.getElementById("size");
let para_result= document.getElementById("result");
let calculate_btn = document.getElementById("calculate");
let result;
let imcState;

function imc (weight,size){
    result = (weight.value / ((size.value/100)*(size.value/100)));
    if (result < 16.5){
        imcState= "Votre indice de masse corporelle indique une dénutrition ou une anoréxie."
    }else if ( result >=16.5 & result< 18.5){
        imcState= "Votre indice de masse corporelle indique une maigreure."
    }else if (result >= 18.5 & result<25){
        imcState="Votre indice de masse corporelle indique un poids normal."
    }else if (result>=25 & result<30){
        imcState="Votre indice de masse corporelle indique un surpoids."
    }else if ( result >= 30 & result< 35){
        imcState="Votre indice de masse corporelle indique une obésité modérée."
    }else if (result >= 25 & result<40){
        imcState="Votre indice de masse corporelle indique une obésité sévère."
    }else{
        imcState="Votre indice de masse corporelle indique une obésité morbide ou massive."
    }
    // para_result.textContent = " Votre IMC est de " + String(result) + "." + imcState;
    para_result.innerHTML= " Votre IMC est de " + String(result) + ". <br>"  + imcState

}


calculate_btn.addEventListener("click",function(){
    imc(userWeight,userSize);
});




