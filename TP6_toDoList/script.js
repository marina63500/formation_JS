// créer un form pour taper les todos

// Ajouter sur le dom ce qui est tapé dans l'input à la validation du form
// monInput.value
const form = document.querySelector('form');

// on recuperer ul
const list = document.getElementById("list");



// il faut se stocker les li car sinon qd on ferme le navigateurs les li disparaissent
// fonction pour stocker que l'on fait a la fait mais on la remonte pour la logique
// Stocker dans le local storage la liste
function storeList(){
    window.localStorage.todoList = list.innerHTML;
}

// fonction qui recupere la list stocke dans storage
function getTodos(){
    if(window.localStorage.todoList){
         list.innerHTML = window.localStorage.todoList;
    } else{
        list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
    }
   
}

// getTodos();
// meilleur pratique que getTodos()
window.addEventListener("load",getTodos);

// add element (pour ajouter un element li)
form.addEventListener("submit",(e)=>{
    // pour ne pas recharger la page on met e.preventdefault
   e.preventDefault()
   
    list.innerHTML +=`<li>${item.value}</li>`
    // il faut concatener les li et le =seul lui les écrase alors il faut mettre += à la place

    // pour remettre le input à vide apres l'envoi du form
    item.value = "";    

    // qd le form est valider ,on stocke la li donc il faut appeler la fonction
    // aller voir dans inspecter/appli/local storage/http,puis taper dans input pour voir afficher
    storeList();
})
// pour récuperer ce qu'il y a dans un balise = .textContent
// par contre dans un input = .value



// Supprimer un todo lorsque l'on clique dessus(.remove())
// remove un element(pour supprimer un element lorsqu'il est fait)
list.addEventListener("click",(e)=>{
    // e.target = nous dit sur quoi on clique
    // ca supprime le li demander
    // e.target.remove();

    // maintenant si on veut checker d'abord
    // on ajoute d'abord une class
    // contains()=méthode qui sert à savoir si la class existe
    if (e.target.classList.contains("checked")){
        // s'il a deja la classe checked ,tu le supprime
         e.target.remove();
    }else{
         e.target.classList.add("checked")
    }
    // on appelle la fonction qd on supprime,pour qu elle enleve
    storeList();
    
})





// Consulter le local storage au lancement de l'application pour rajouter les todos