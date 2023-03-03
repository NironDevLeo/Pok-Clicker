let button = document.getElementById("evolution");
let mainevo = document.getElementById("mainevo");

button.addEventListener('click',()=>{

  mainevo.style.display = "flex"
  mainevo.style.opacity = "1";
  mainevo.style.animation = "arrivagemainevo 25000ms"

  annimationEvolution();
  annimationTexteEvolution();
  setTimeout(()=> {
    text1evo.style.display = "none";
  }, "16990");
  setTimeout(()=> {
    annimationTexteEvolution2();
  }, "16990");
  setTimeout(()=> {
    mainevo.style.display = "none";
  }, "24700");
})

function annimationEvolution(){
  let evo1 = document.getElementById("evo1");
  let evo2 = document.getElementById("evo2");
  setTimeout(()=> {
    evo1.style.animation = "evolutionPokemon1 10000ms";
  }, "7000")
  setTimeout(()=> {
    evo2.style.animation = "evolutionPokemon2 10000ms";
  }, "7000")
  setTimeout(()=> {
    evo1.style.display = "none"
  }, "16990")
  setTimeout(()=> {
    evo2.style.width = "20%"
  }, "16990");
}

let message = "QUOI ? PIKACHU évolue !";
I = -15 ;
function annimationTexteEvolution() {
  character = message.substring(I, I=I+1) ;
  text1evo.innerHTML += character;
  if ( I < message.length ) setTimeout(annimationTexteEvolution, 100); 
  }
let message2 = "Félicitation ! PIKACHU évolue en RAICHU !";   
V = -15 ;
function annimationTexteEvolution2(){  
character = message2.substring(V, V=V+1) ;
text2evo.innerHTML += character;
if ( V < message2.length ) setTimeout(annimationTexteEvolution2,100);
}

