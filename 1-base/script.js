// alert("salut js");

// **operateurs d'affectations**

let total = 0;
total++; // total = total + 1
total += 5; // total = total + 5
total -= 2; // total = total - 2        
total *= 3; // total = total * 3
total /= 2; // total = total / 2    
// console.log(total);

// **operateurs de controle**

let x = 10;
let y = 10;

// if (x > y) {
//     alert("x est plus grand que y");
// }
// else if (x < y) {
//     alert("x est plus petit que y");
// }else{
//     alert("x est égal à y");
// }


// **=== test l'égalité en TYPE et en VALEUR**

if (x === y) {
    console.log("x est égal à y");
}
else  {
    console.log("pas égal");
}

// **== test l'inégalité de VALEUR sans prendre en compte le type**
let a= 10;
let b = "10";
if (a == b) {
    console.log("x est égal à y");
}   else {
    console.log("pas égal");
}


// **les fonctions**

// **Fonction classique à l'ancienn**
function fairequelquesChose() {
    console.log("Je fais quelque chose");
    console.log(5+6);
    alert("calcul terminé")
    
};
// il faut appeler la fonction pour qu'elle fonctionne,qu'eele se joue
fairequelquesChose();


// **Fonction fléchée**
const fairequelquesChose2 = () => {
    console.log("Je fais quelque chose");
    console.log(5+6);
    alert("calcul terminé")
};

const calculer = (c, d) => {
    console.log(c+d);    
};
calculer(5, 6);
// il faut lui passer les deux paramètres pour qu'elle fonctionne

// **la portée des variables**

function add2(){
    let num = 5; // variable locale
   console.log(4 + num); // 9   
    
}

console.log(num); // ReferenceError: num is not defined
add2(); // Appel de la fonction add2
