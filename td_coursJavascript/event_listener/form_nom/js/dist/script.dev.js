"use strict";

var username = document.getElementById("usrtxt");
var name = document.getElementById("nmtxt");
var button = document.getElementById("btn");
button.addEventListener('click', function (event) {
  if (name == "" && username == "") {
    console.log("Formulaire invalide, veuillez renseigner tous les champs.");
  } else {
    console.log("Bienvenu(e)" + username + " " + name + ".");
  }
});