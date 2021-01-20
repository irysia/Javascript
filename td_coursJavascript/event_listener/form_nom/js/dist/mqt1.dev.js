"use strict";

var username = document.getElementById("username");
var name = document.getElementById("name");
var button = document.getElementById("btn");
button.addEventListener('click', function (event) {
  if (name == "" && username == "") {
    console.log("Formulaire invalide, veuillez renseigner tous les champs.");
  } else {
    console.log("Bienvenu(e)" + username + " " + name + ".");
  }
});