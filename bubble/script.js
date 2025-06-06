// déclarer toutes les variables au dessus de la fonction
const counterDisplay = document.querySelector("h3");
// création d'un compteur
let counter = 0;

const bubbleMaker = () => {
//pour ce créer un élément
const bubble = document.createElement('span');
bubble.classList.add("bubble")
// on dit au body qu'il a un enfant bubble
document.body.appendChild(bubble);

// pour randomiser la taille des bubbles entre 100 et 300
// le mathRandom est tjrs entre 0 et 100
const size = Math.random() * 200 + 100 + "px";
bubble.style.height = size;
bubble.style.width = size;
// pour se mettre dans des position différentes il faut que les random soit différents
// sur l'axe top
bubble.style.top = Math.random() * 100 + 50 + "%";
// sur la left
bubble.style.left = Math.random() * 100 + "%";

// pour faire soit plus ,soit moins si random >0,5 tu renvoie 1 sinon tu renvoie -1(if else en ternaire)
const plusMinus = Math.random() > 0.5 ? 1 : -1;
bubble.style.setProperty('--left',Math.random() * 100 * plusMinus + "%");

// pour cliquer sur le bulles
bubble.addEventListener('click',() => {
    counter ++; 
     //il faut maintenanat injecté une valeur à counter(on ecrit du texte dans h3),textcontent pour afficher du text dans une balise
    counterDisplay.textContent = counter  ;  
    bubble.remove();
});


// apres un certain temps ,supprime les bulles
setTimeout(() => {
    bubble.remove();
}, 8000);
};

setInterval(bubbleMaker,1000);


