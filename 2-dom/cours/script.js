//selecteurs
// document.querySelector("h4").style.background= "red";

// const baliseHTML = document.querySelector("h4");

// console.log(baliseHTML);

// click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p")


// le premier paramètre correspond à l'évement,le deuxieme à la fonction qui sera exécutée lors de l'évement

questionContainer.addEventListener("click", () => {
    // console.log("click!")

    // pas recommande mieux vaut injecté une classe
    // questionContainer.style.backgroundColor = "red";
    // questionContainer.style.border = "3px solid teal";

    // on ajoute une classe meilleur facon de faire pour le style que l'on crée dans le css(class injecté)
    questionContainer.classList.toggle("question-clicked");
    // toggle permet de faire un add ou un remove de la classe
});

btn1.addEventListener("click", () => {
    response.classList.add("show-response");       
    response.style.backgroundColor = "green";
});

btn2.addEventListener("click", () => {
 response.classList.add("show-response");
 response.style.backgroundColor = "red";
})

// priorité des évenements:<div style = >#id>.class>baliseHTML
// --------------------------------------------------
// mouse events

const mousemove = document.querySelector(".mousemove");
// pour que le rond suive la souris on utilise l'évenement mousemove
//se récuperer l'event e en parametre de la fonction(donnée de l'évenement)
window.addEventListener("mousemove", (e) => {
   mousemove.style.left= e.pageX + "px";
    mousemove.style.top = e.pageY + "px";  
    
});

window.addEventListener("mousedown", () => {
   mousemove.style.transform = "scale(2) translate(-25%, -25%)"; // scale pour agrandir le rond,translate pour rappeler le css car il existe déjà dans propriete css sinon il écrase la propriété
    
});
window.addEventListener("mouseup", () => {
   mousemove.style.transform = "scale(1) translate(-50%, -50%)"; 
    
});

// qd la souris survole une zone
// pour entrer dans la zone on utilise mouseenter
questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0, 0, 0, 0.6)";

});
// pour sortir de la zone on utilise mouseout
questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink";
});

// pour survoler un élément on utilise mouseover
response.addEventListener("mouseover", () => {
    response.style.transform="rotate(2deg)";
});
// -------------------------------------------------
// keypress event

// on identifie le conteneur de la keypress

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

// ajouter un son
const ring=() => {
    const audio = new Audio();  
    audio.src = "./Enter.mp3"; // on met le son dans une variable
    audio.play(); // on joue le son
}
// si plusieurs sons à jouer ,mettre en dynamique le son à jouer

const sound = (key) => {
    const sound = key + ".mp3"; // on met le son dans une variable
    sound.play(); // on joue le son
}


// on ajoute l'évenement keypress
document.addEventListener("keypress", (e) => {
//    on aimerait savoir sur quelle touche on appuie
    // console.log(e.key); e.key permet de savoir quelle touche on a appuyé 
    key.textContent = e.key // on injecte la valeur de la touche dans le conteneur  
    if (e.key === "j"){
        keypressContainer.style.background = "pink";
    }else if(e.key==="h"){
        keypressContainer.style.background = "teal";
    }else{
        keypressContainer.style.background = "red";
    }
    ring(); // on appelle la fonction pour jouer le son
    if (e.key === "Enter")  sound(e.key);
    
});
// -------------------------------------------------
// scroll event 
// il faut lui dire que qd la nav bar atteind un certain niveau de scroll, on veut qu'elle s'affiche
const nav= document.querySelector("nav");

window.addEventListener("scroll", () => {
    console.log(window.scrollY); // on récupère la position de la barre de défilement en pixels

    if (window.scrollY > 120) { // si la position de la barre de défilement est supérieure à 100 pixels
        nav.style.top = "0"; // on affiche la nav bar
    } else {
        nav.style.top = "-50px"; // sinon on cache la nav bar
    }
    
});

// -------------------------------------------------
// form event

const inputName = document.querySelector("input[type='text']");
const select = document.querySelector("select");
const form = document.querySelector('form')

let pseudo =""  // on récupère l'input de type text
let language = ""; // on récupère la valeur du select


inputName.addEventListener("input", (e) => {
    // console.log(e.target.value); // on récupère la valeur de l'input
    pseudo = e.target.value; // on met la valeur de l'input dans la variable pseudo
    console.log(pseudo); // on affiche la valeur de la variable pseudo      
});

select.addEventListener("input", (e) => {
   language = e.target.value
    console.log(language);    
});


form.addEventListener('submit', (e) =>{
    e.preventDefault()  // methode obligatoire pour un formulaire ,pour éviter que le navigeur change de page
  
    // on veut que cvg soit cocher avant de valider
    // on a pas besoin de declarer de variables pour checkbox et bouton car js connait
    if(cvg.checked ) {
        // on affiche le contenu des variables dans la div vide
        // methode innerHTML pour injecter du html texte et balise
        document.querySelector('form > div').innerHTML = `
        <h3> Pseudo : ${pseudo}</h3>
        <h4> Langage préféré : ${language}</h4>
        `;

    }else{
        alert('Veuillez accepter les CVG')
    }
    
});

// -----------------------------------------
// load event
// il se declenche qd la page est charger

window.addEventListener('load',()=>{
    console.log('doc chargé!!!!!!');    
});

// ------------------------------------------------
// les foreach

// pour plusieurs elements qui s'appelle pareils exemple les .box
// const boxes = document.getElementsByClassName('box');
const boxes = document.querySelectorAll('.box')
console.log(boxes);

// le premier parametre est comment je vais les appeler individuellement.
    boxes.forEach((box) => {
    box.addEventListener('click',(e) => {
        e.target.style.transform= "scale(0.7)";
        
    })
});
// --------------------------------------------------
// addEventListener vs onClick

// 2eme méthode mais pas recommandé:

// document.body.onclick = () =>{
//     console.log('clic!!!');
    
// };

// bubbling (pr declencher a la fin ,de base le eventlistener est parametrer en mode bubbling)
document.body.addEventListener("click", () =>{
    console.log('click 1!');    
},false);
// usecapture
document.body.addEventListener("click", () =>{
    console.log('click 2!');    
},true);

// --------------------------------------------------
// quelques méthodes

// stop propagation pour arreter que clic1 et clic2 se déclenche
questionContainer.addEventListener('click',(e) =>{
    alert('test!!!!!')
    e.stopPropagation();
});

// remove Eventlistener

// ----------------------------------------------------
// BOM = browser objet model
// pour savoir la hauteur de la fenetre,il existe la largeur,le scrollX
// console.log(window.innerHeight);
// console.log(window.scrollY);

// pour ouvrir une nouvelle fenetre au dimension choisie
// window.open("http://google.com", "cours js", "height=600","width=800");

//window.close()  pour fermer la fenetre
// les evenement adossés a window
// window.alert('hello');

// confirm (comme alert mais avec annuler)
btn2.addEventListener('click',()=>{
    confirm('voulez-vous vraiment vous tromper?');
});

// prompt attend une réponse
let answer 
btn1.addEventListener("click",()=>{
    answer= prompt('Entrez votre nom!')
    questionContainer.innerHTML  += "<h3>bravo " + answer + "</h3>";
})
// += pour ne pas ecraser


// pour executer du code en différé,timer,compte àrebours
setTimeout(() => {
    // ici on ecrit la logique à excuteravant de déclencher
    questionContainer.style.borderRadius = "300px"
}, 2000);
// 'temps en millisecondes avant de déclencher'

// let interval = setInterval(() =>{
//     document.body.innerHTML +=
//     `<div class = 'box'>
//          <h2>Nouvelle boite !</h2>
//     </div>` 
// }, 1000);
// // pour stopper set interval il faut mettre dans une variable puis faire le clearInterval
// document.body.addEventListener('clic',() =>{
    // e.target.remove() pour retirer un element du dom
//     clearInterval(interval);
// })


// objet location pour rediriger 
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);

// location.replace("http://lequipe.fr")
// pour rediger vers un autre site ou page

// window.onload = ()=>{
//     location.href = "http://twitter.fr";
// }

// objet navigator
// console.log(navigator.userAgent);

// voir la doc pour obtenir la localisation de l'utilisateur:
// https://developper.mozilla.org/fr/docs/Web/api/geolocalisation/getCurrentPosition


// history
// pour connaitre son historique
// console.log(history);
// pour revenir sur la page precedente
// window.History.back();

// ---------------------------------------------------
// setProporty

window.addEventListener('mousemove',(e) =>{
    // console.log(e);
    
    nav.style.setProporty('--x',e.layerX + "px");
    nav.style.setProporty('--y',e.layerY + "px");
});