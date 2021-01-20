////VARIABLES//////////////
// on récupère l'icone panier et le nombre d'éléments présents dans le panier
let shop_bag = document.getElementById ("shop_bag");
let nb_product_shop = document.getElementById("nb_product_shop")
let  nb_product_shop_number = 0;

// on récupère l'affichage du panier et le bouton quitter
let shop_out = document.getElementById("shop_out");
let x_btn = document.getElementById("close");

//on récupère les prix des produits proposés à l'achat et on convertit l'élément en nombre
let price_product_one = document.getElementById("price_product_one");
let price_product_one_nb = Number(price_product_one.textContent);
let price_product_two = document.getElementById("price_product_two");
let price_product_two_nb = Number(price_product_two.textContent);
let price_product_three = document.getElementById("price_product_three");
let price_product_three_nb = Number(price_product_three.textContent);
let price_product_four = document.getElementById("price_product_four");
let price_product_four_nb = Number(price_product_four.textContent);

// on récupère les boutons acheter des produits
let product_one = document.getElementById("product_one");
let product_two = document.getElementById("product_two");
let product_three = document.getElementById("product_three");
let product_four = document.getElementById("product_four");

// on récupère le click acheter de chaque produit pour faire appaitre sa ligne dans le panier
let shop_one = document.getElementById("shop_one");
let shop_two = document.getElementById("shop_two");
let shop_three = document.getElementById("shop_three");
let shop_four = document.getElementById("shop_four");

//on récupère les boutons + de la fenêtre panier
let more_product_one = document.getElementById("more_product_one");
let more_product_two = document.getElementById("more_product_two");
let more_product_three = document.getElementById("more_product_three");
let more_product_four = document.getElementById("more_product_four");

//on récupère les boutons - de la fenêtre panier
let less_product_one = document.getElementById("less_product_one");
let less_product_two = document.getElementById("less_product_two");
let less_product_three = document.getElementById("less_product_three");
let less_product_four = document.getElementById("less_product_four");

// on récupère la quantité de produit demandés de la fenêtre panier
let qty_product_one = document.getElementById("qty_product_one");
let qty_product_two = document.getElementById("qty_product_two");
let qty_product_three = document.getElementById("qty_product_three");
let qty_product_four = document.getElementById("qty_product_four");

//on récupère les prix total par produit et on convertis les éléments en nombre
let total_price_product_one = document.getElementById("total_price_product_one");
let total_price_product_one_nb =  total_price_product_one.textContent;
let total_price_product_two = document.getElementById("total_price_product_two");
let total_price_product_two_nb = total_price_product_two.textContent;
let total_price_product_three = document.getElementById("total_price_product_three");
let total_price_product_three_nb = total_price_product_three.textContent;
let total_price_product_four = document.getElementById("total_price_product_four");
let total_price_product_four_nb = total_price_product_four.textContent;

// on récupère les boutons delete par produit
let delete_product_one = document.getElementById("delete_product_one");
let delete_product_two = document.getElementById("delete_product_two");
let delete_product_three = document.getElementById("delete_product_three");
let delete_product_four = document.getElementById("delete_product_four");

//on récupère le prix total pour le mettre à jour
let total_price_shopbag = document.getElementById('total_price_shopbag');
let total_price_shopbag_nb = Number (total_price_shopbag.textContent);



/////////////////////////////////
//action dans la fenêtre principale

// on s'occupe de gérer l'affichage du panier lors du click sur l'icone panier 
shop_bag.addEventListener('click', function(){
    shop_out.style.display = "flex";
});

//on écoute les boutons de la page principale d'achat
product_one.addEventListener('click', function(event){
    nb_product_shop_number++;
    nb_product_shop.textContent= nb_product_shop_number;// on implémente le nombre de produits présents dans le panier à chaque click sur acheter des différents produits
    shop_one.style.display="flex";//on affiche la ligne correspondant au produit ajouté dans la fenetre panier
    qty_product_one.value++;//on augment la quantité du produit de 1 à chaque click
    total_price_product_one_nb = price_product_one_nb * qty_product_one.value; // on calcule le prix total du produit 1 avec des nombres
    total_price_product_one.textContent = String (total_price_product_one_nb); // on transforme le nombre en string pour afficher

    total_price_shopbag_nb = total_price_shopbag_nb + price_product_one_nb ; // on calcule le prix total du panier
    total_price_shopbag.textContent = String (total_price_shopbag_nb); //on transforme le nombre en string pour afficher
}); 
product_two.addEventListener('click', function(event){
    nb_product_shop_number++;
    nb_product_shop.textContent= nb_product_shop_number
    shop_two.style.display="flex";
    qty_product_two.value++;
    total_price_product_two_nb = price_product_two_nb * qty_product_two.value;
    total_price_product_two.textContent = String (total_price_product_two_nb);
    total_price_shopbag_nb = total_price_shopbag_nb + price_product_two_nb ;
    total_price_shopbag.textContent = String (total_price_shopbag_nb);
});
product_three.addEventListener('click', function(event){
    nb_product_shop_number++;
    nb_product_shop.textContent= nb_product_shop_number;
    shop_three.style.display="flex";
    qty_product_three.value++;
    total_price_product_three_nb = price_product_three_nb * qty_product_three.value;
    total_price_product_three.textContent = String (total_price_product_three_nb);
    total_price_shopbag_nb = total_price_shopbag_nb + price_product_three_nb ;
    total_price_shopbag.textContent = String (total_price_shopbag_nb);

});
product_four.addEventListener('click', function(event){
    nb_product_shop_number++;
    nb_product_shop.textContent= nb_product_shop_number;
    shop_four.style.display="flex";
    qty_product_four.value++;
    total_price_product_four_nb = price_product_four_nb * qty_product_four.value; 
    total_price_product_four.textContent = String (total_price_product_four_nb);
    total_price_shopbag_nb = total_price_shopbag_nb + price_product_four_nb ;
    total_price_shopbag.textContent = String (total_price_shopbag_nb);
});

//on fixe les limites numérique des quantité articles panier pour ne pas avoir de valeurs négatives 
///NB IL FAUT RAJOUTER UN ECOUTEUR SUR LE NB PANIER //PAS BESOIN !!!
// if (nb_product_shop.textContent<1){
//     nb_product_shop=0;
//     nb_product_shop.textContent= nb_product_shop_number;
// }


/////////////////////////////////////////////
//actions dans la fenêtre panier

//on s'occupe de quitter l'affichage du panier lors du click sur le bouton X
x_btn.addEventListener('click', function(){
    shop_out.style.display = "none";
});

//on écoute les boutons de la fenêtre panier PAR LIGNE
////////////////////////////////////////////
//on écoute les boutons + de chaque ligne produit
more_product_one.addEventListener('click', function(event){
    qty_product_one.value++;
    nb_product_shop_number++;
    nb_product_shop.textContent= nb_product_shop_number;
    total_price_product_one_nb = price_product_one_nb * qty_product_one.value;
    total_price_product_one.textContent = String (total_price_product_one_nb);
    total_price_shopbag_nb = total_price_shopbag_nb + price_product_one_nb;
    total_price_shopbag.textContent = String (total_price_shopbag_nb);
});

more_product_two.addEventListener('click', function(event){
    qty_product_two.value++;
    nb_product_shop_number++;
    nb_product_shop.textContent= nb_product_shop_number;
    total_price_product_two_nb = price_product_two_nb * qty_product_two.value;
    total_price_product_two.textContent = String (total_price_product_two_nb);
    total_price_shopbag_nb = total_price_shopbag_nb + price_product_two_nb;
    total_price_shopbag.textContent = String (total_price_shopbag_nb);
});

more_product_three.addEventListener('click', function(event){
    qty_product_three.value++;
    nb_product_shop_number++;
    nb_product_shop.textContent= nb_product_shop_number;
    total_price_product_three_nb = price_product_three_nb * qty_product_three.value;
    total_price_product_three.textContent = String (total_price_product_three_nb);
    total_price_shopbag_nb = total_price_shopbag_nb + price_product_three_nb;
    total_price_shopbag.textContent = String (total_price_shopbag_nb);
});

more_product_four.addEventListener('click', function(event){
    qty_product_four.value++;
    nb_product_shop_number++;
    nb_product_shop.textContent= nb_product_shop_number;
    total_price_product_four_nb = price_product_four_nb * qty_product_four.value;
    total_price_product_four.textContent = String (total_price_product_four_nb);
    total_price_shopbag_nb = total_price_shopbag_nb + price_product_four_nb;
    total_price_shopbag.textContent = String (total_price_shopbag_nb);
});

////////////////////////////////////////////////
//on écoute les boutons - de chaque ligne produit
less_product_one.addEventListener('click', function(event){
    qty_product_one.value--;
    nb_product_shop_number--;
    nb_product_shop.textContent= nb_product_shop_number;
    // on test les quantités produits pour gérer l'affichage des lignes produits et ne pas allez dans des valeurs négatives
    if (qty_product_one.value< 1) {
        shop_one.style.display="none";
        qty_product_one.value = 0;
    }
    total_price_product_one_nb = price_product_one_nb * qty_product_one.value;
    total_price_product_one.textContent = String (total_price_product_one_nb);
    total_price_shopbag_nb = total_price_shopbag_nb - price_product_one_nb;
    total_price_shopbag.textContent = String (total_price_shopbag_nb);
});
less_product_two.addEventListener('click', function(event){
    qty_product_two.value--;
    nb_product_shop_number--;
    nb_product_shop.textContent= nb_product_shop_number;
    // on test les quantités produits pour gérer l'affichage des lignes produits et ne pas allez dans des valeurs négatives
    if (qty_product_two.value< 1) {
        shop_two.style.display="none";
        qty_product_two.value = 0;
    }
    total_price_product_two_nb = price_product_two_nb * qty_product_two.value;
    total_price_product_two.textContent = String (total_price_product_two_nb);
    total_price_shopbag_nb = total_price_shopbag_nb - price_product_two_nb;
    total_price_shopbag.textContent = String (total_price_shopbag_nb);
});

less_product_three.addEventListener('click', function(event){
    qty_product_three.value--;
    nb_product_shop_number--;
    nb_product_shop.textContent= nb_product_shop_number;
    // on test les quantités produits pour gérer l'affichage des lignes produits et ne pas allez dans des valeurs négatives
    if (qty_product_three.value< 1) {
        shop_three.style.display="none";
        qty_product_three.value = 0;
    }
    total_price_product_three_nb = price_product_three_nb * qty_product_three.value;
    total_price_product_three.textContent = String (total_price_product_three_nb);
    total_price_shopbag_nb = total_price_shopbag_nb - price_product_three_nb;
    total_price_shopbag.textContent = String (total_price_shopbag_nb);
});

less_product_four.addEventListener('click', function(event){
    qty_product_four.value--;
    nb_product_shop_number--;
    nb_product_shop.textContent= nb_product_shop_number;
    // on test les quantités produits pour gérer l'affichage des lignes produits et ne pas allez dans des valeurs négatives
    if (qty_product_four.value< 1) {
        shop_four.style.display="none";
        qty_product_four.value = 0;
    }
    total_price_product_four_nb = price_product_four_nb * qty_product_four.value;
    total_price_product_four.textContent = String (total_price_product_four_nb);
    total_price_shopbag_nb = total_price_shopbag_nb - price_product_four_nb;
    total_price_shopbag.textContent = String (total_price_shopbag_nb);
});

///////////////////////////////
//on ecoute le bouton delete par produit

delete_product_one.addEventListener('click',function(event){
    shop_one.style.display="none";
    nb_product_shop_number = nb_product_shop_number - qty_product_one.value;
    nb_product_shop.textContent= nb_product_shop_number;
    total_price_shopbag_nb = total_price_shopbag_nb - total_price_product_one_nb;
    total_price_shopbag.textContent = String (total_price_shopbag_nb);
    qty_product_one.value = 0;
    total_price_product_one.textContent = 0;
    total_price_product_one_nb = 0;
});

delete_product_two.addEventListener('click',function(event){
    shop_two.style.display="none";
    nb_product_shop_number = nb_product_shop_number - qty_product_two.value;
    nb_product_shop.textContent= nb_product_shop_number;
    total_price_shopbag_nb = total_price_shopbag_nb - total_price_product_two_nb;
    total_price_shopbag.textContent = String (total_price_shopbag_nb);
    qty_product_two.value = 0;
    total_price_product_two.textContent = 0;
    total_price_product_two_nb = 0;
});

delete_product_three.addEventListener('click',function(event){
    shop_three.style.display="none";
    nb_product_shop_number = nb_product_shop_number - qty_product_three.value;
    nb_product_shop.textContent= nb_product_shop_number;
    total_price_shopbag_nb = total_price_shopbag_nb - total_price_product_three_nb;
    total_price_shopbag.textContent = String (total_price_shopbag_nb);
    qty_product_three.value = 0;
    total_price_product_three.textContent = 0;
    total_price_product_three_nb = 0;
});

delete_product_four.addEventListener('click',function(event){
    shop_four.style.display="none";
    nb_product_shop_number = nb_product_shop_number - qty_product_four.value;
    nb_product_shop.textContent= nb_product_shop_number;
    total_price_shopbag_nb = total_price_shopbag_nb - total_price_product_four_nb;
    total_price_shopbag.textContent = String (total_price_shopbag_nb);
    qty_product_four.value = 0;
    total_price_product_four.textContent = 0;
    total_price_product_four_nb = 0;
    
});

