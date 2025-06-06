// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// const btn = document.querySelector("#btn");
// js ne reconnait pas les classes avec des -
const sidebar = document.getElementById("side-bar");
const content = document.querySelector('.content');
// comme btn est l'id du button pas besoin de le declarer
// injecte la classe .active au css,puis devant #side-bar car prioritaire
btn.addEventListener('click', () =>{
    sidebar.classList.toggle("active"); 

      
})


// Ranger la sidebar si on click sur le contenu principal
content.addEventListener('click', () => {
    sidebar.classList.remove("active"); 
});


// BONUS
// Créer en css l'hamburger menu qui se transforme en croix
// =>dans le css avec nth-child =nième enfant et du coup pas besoin de id sur les span

// Aide
// Priorités en CSS : id > classe > baliseHtml
