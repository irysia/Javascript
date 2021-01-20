let nbMonth = document.getElementById("nbMonth");
let nbDay = document.getElementById("nbDay");
let result = document.getElementById("result");
let order = document.getElementById("order");

function orderDay (day,month){
    //l'année comporte 366 jours
    //01 = Janvier 1-31
    //02 = Février 32- 60
    //03 = Mars 61 - 91
    //04 = Avril 92 - 121
    //05 = Mai 122 - 152
    //06 = Juin 153 - 182
    //07 = Juillet 183 -213
    //08= Août 214 - 244
    //09= Septembre 245-274
    //10=Octobre 275 - 305
    //11=Novembre 306 - 335
    //12=Decembre 336 -366
    if (nbMonth.value == 1){
        return nbDay.value;
    }else if (nbMonth.value == 2){
        return  Number(nbDay.value) +31;
    }else if (nbMonth.value == 3){
        return Number(nbDay.value)+60;
    }else if (nbMonth.value == 4){
        return Number(nbDay.value)+91;
    }else if (nbMonth.value == 5){
        return Number(nbDay.value)+121;
    }else if (nbMonth.value == 6){
        return Number(nbDay.value)+152;
    }else if (nbMonth.value == 7){
        return Number(nbDay.value)+182;
    }else if (nbMonth.value == 8){
        return Number(nbDay.value)+213;
    }else if (nbMonth.value == 9){
        return Number(nbDay.value)+244;
    }else if (nbMonth.value == 10){
        return Number(nbDay.value)+274;
    }else if (nbMonth.value == 11){
        return Number(nbDay.value)+305;
    }else if (nbMonth.value == 12){
        return Number(nbDay.value)+335;
    }
}

order.addEventListener("click",function(){
    let resultOrder = orderDay(nbDay,nbMonth);
    result.textContent = "Le " + nbDay.value + "/" + nbMonth.value + " est le " + resultOrder+ "e jour de l'année.";
});
