// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// premier rond de souris
const mousemoveSmall = document.querySelector(".mousemoveSmall")
// second rond de souris
const mousemoveMedium = document.querySelector(".mousemoveMedium")
// 3eme rond de souris
const mousemoveLarge = document.querySelector(".mousemoveLarge")



// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")
window.addEventListener("mousemove", (e) => {  
       
    // coordonnée de la souris
   mousemoveSmall.style.left= e.pageX + "px";
   mousemoveSmall.style.top = e.pageY + "px";  

   mousemoveMedium.style.left= e.pageX + "px";
   mousemoveMedium.style.top = e.pageY + "px";  

   mousemoveLarge.style.top = e.pageY + "px";  
   mousemoveLarge.style.left= e.pageX + "px";
    
});

// si j'avais mis une classe identique au ronds ,j'aurais pu faire un foreach voir corrigé du tp1



// S'assurer que les liens sont clickables


// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
