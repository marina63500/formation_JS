
// récupérer la navbar
const nav = document.getElementById("navbar");
let lastScroll = 0 // on récupère la position (le dernier scroll)

//Créer un événément au scroll
window.addEventListener("scroll",() =>{
   // comparaison a faire avant
       if ( window.scrollY < lastScroll ) {   
        // Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte    
        nav.style.top = 0 ;
    }else {
        nav.style.top = "-60px";
    }
    
// Connaitre niveau de scroll (window.scrollY)
    lastScroll = window.scrollY;  //de la barre de défilement en pixels 
 
// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

});

