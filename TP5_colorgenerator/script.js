// 1ere méthode

// setInterval(()=>{
    //créer 3 variables pour stocker 3 chiffres aléatoires du rgb
// pour avoir un nb arrondi entre 0 et 1
// const red = Math.floor(Math.random() * 255);


// const green = Math.floor(Math.random() * 255)

// const blue = Math.floor(Math.random() * 255);

// on se crée une variable pour récuperer toute la couleur rgb

// const color = `rgb(${red}, ${green}, ${blue})`
// console.log(color);

//Donner au body une couleur de fond en rgb()

// on pointe le body
// document.body.style.background = color;

//Montrer sur le body la couleur rgb()
// document.body.innerHTML =`<h2>${color}</h2>`
// //aide
// Math.random() => génére un chiffre entre 0 et un
//Math.floor(Math.random() * 255) => arrondi le chiffre du math.random
// },1000);

// on se crée le set interval a la fin 

// ---------------------------------------------------------------------
// méthode a priviligier
// 2eme méthode dans une fonction car réutilisable a volonté partout
function getColor(){
        //créer 3 variables pour stocker 3 chiffres aléatoires du rgb
// pour avoir un nb arrondi entre 0 et 1
const red = Math.floor(Math.random() * 255);


const green = Math.floor(Math.random() * 255)

const blue = Math.floor(Math.random() * 255);

// on se crée une variable pour récuperer toute la couleur rgb

const color = `rgb(${red}, ${green}, ${blue})`
// console.log(color);

//Donner au body une couleur de fond en rgb()

// on pointe le body
document.body.style.background = color;

//Montrer sur le body la couleur rgb()
document.body.innerHTML =`<h2>${color}</h2>`
}

setInterval(getColor,1000);