//EXO2

let para_One = document.getElementById("para_One");

function createLoremText (){
 return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium pulvinar volutpat. Vivamus odio eros, tincidunt eu felis sit amet, molestie faucibus erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut pulvinar in orci a tincidunt. Curabitur euismod tincidunt mi, in ultrices sem accumsan et. Nam ut felis laoreet, tempor nisl vel, rhoncus turpis. Pellentesque efficitur felis risus, vel porttitor libero vehicula sed. Nullam efficitur ultrices eros, sed lacinia lectus ornare ac. Suspendisse fermentum dapibus sapien, sed lobortis dui. Fusce vel luctus dolor, posuere aliquam mi. Nam eget lacus mattis, auctor mi vitae, efficitur ligula. Phasellus non fringilla ligula. Praesent ultricies sed mi nec ornare. Praesent eget tristique nulla."
}
createLoremText();

let LoremText = createLoremText();

para_One.textContent = LoremText;

//EXO 3

let div_exo3 = document.getElementById("div_exo3");
let btn_exo3 = document.getElementById("btn_exo3");

function createLoremParagraph () {
    return "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium pulvinar volutpat. Vivamus odio eros, tincidunt eu felis sit amet, molestie faucibus erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut pulvinar in orci a tincidunt. Curabitur euismod tincidunt mi, in ultrices sem accumsan et. Nam ut felis laoreet, tempor nisl vel, rhoncus turpis. Pellentesque efficitur felis risus, vel porttitor libero vehicula sed. Nullam efficitur ultrices eros, sed lacinia lectus ornare ac. Suspendisse fermentum dapibus sapien, sed lobortis dui. Fusce vel luctus dolor, posuere aliquam mi. Nam eget lacus mattis, auctor mi vitae, efficitur ligula. Phasellus non fringilla ligula. Praesent ultricies sed mi nec ornare. Praesent eget tristique nulla.</p>"
}

btn_exo3.addEventListener('click',function(e){
    div_exo3.innerHTML += createLoremParagraph();
});

