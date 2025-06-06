
// Créer un événement au scroll
const nav = document.getElementById("navbar");
const imgImprovise = document.getElementById("imgImprovise")
const popup = document.getElementById("popup")
const closeBtn = document.getElementById("closeBtn")

let playOnePopup = true;

window.addEventListener("scroll",() =>{  
    // effect navbar:
    // Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut    
    if(window.scrollY > 50 ){
        nav.style.height = "45px"
    }else{
        nav.style.height = "90px"
    }
    
   
    // valeur total du body = document.body.offsetheight qui change en fonction de la taille de l'écran
    //niveau de scroll = window.scrollY qui correspond au haut de la barre de scroll en qui est bas 
    //il faut donc enlever la hauteur de la bar de scroll = window.innerHeight (mainteant la hauteur du body est égal au bas de la bar de scroll)
    // scrollValue = pour connaitre la hauteur du scroll de la page en pourcentage ou 0,..
   let scrollValue = (window.scrollY + window.innerHeight)/ document.body.offsetHeight;  
    
    // image
     // Faire apparaitre l'image de la partie improvise

    if (scrollValue > 0.45){
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "none";
        //on ne fait pas de else car on veut que ca reste en place apres
    }

    // console.log(scrollValue); //c'est lui qui me dit ou je suis sur la page (0.45 ou 0.85)

    //popup
    // Faire apparaitre la popup quand on est en bas du site
    // et on rajoute apres le playOnePopup pour qu'il ne la montre que une seule fois si on l'a deja vu

        if (scrollValue > 0.85 && playOnePopup ){
            popup.style.opacity = 1;
            popup.style.transform = "none";
            playOnePopup = false;       //on le rajoute pour ne plus l'afficher
        }

    

    // Bonus : quand on clicke sur la popup elle disparait pour toujours
        
        closeBtn.addEventListener('click', () =>{
            popup.style.opacity = 0;
            popup.style.transform = "translateX(400px)";
        });
   
});

// quand ils ont un id on n'est pas obligé de déclarer car ils sont reconnu d'office avec id
