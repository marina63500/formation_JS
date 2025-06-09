// rappel des types de données

let string = "chaine";
let number = 25;
let boolean = true;
let maVariable = null;

//typeof => nous dit ce que c'est nos variable

//les tableaux
let array = ["bordeaux", "Toulouse", "nantes"];
// console.log(array[1]);

//afficher la lettre D dans bordeaux
// console.log(array[0][3]);

let array2 = ["bordeaux", 24, true, [1, 2], { nom: "denis" }];

//console.log(array2[3][1]); //afficher le chiffre 2 du tableau
//console.log(array2[4].nom); //pour recuperer denis

let objet = {
  pseudo: "denis",
  age: 33,
  technos: ["javascript", "react", "nodeJs"],
  admin: false,
};
//console.log(objet.technos[0][1]);// afficher le a de javascript

//ajouter un element a mon objet:
// objet.adresse = " 22 rue du code";
// console.log(objet);

// les objects sont stockés dans un tableau
let data = [
  {
    pseudo: "denis",
    age: 33,
    technos: ["javascript", "react", "nodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["css", "react", "nodeJs"],
    admin: false,
  },
  {
    pseudo: "nicolas",
    age: 42,
    technos: ["php", "react", "nodeJs"],
    admin: true,
  },
];
//afficher le pseudo de nicolas dans la console:
// console.log(data[2].pseudo);

//---------------------------------------------------------------
//les structures de controle

if (data[0].age > data[1].age) {
  //console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  //valeur si faux
}
//concatenation avec des +

//si on a une seule ligne on peut l'écrire comme :
// if(valeur à tester)
//   valeur si vrai
// else
// valaur si faux

//en ternaire:
// valeur à tester ? si vrai : si faux

//while
let w = 0;

// while (w < 10) {
//   w++;
//   console.log("la valeur de w est : " + w);
// }

//do while
let d = 0;

// do {
//   d++;
//   console.log(d);
// } while(d<5)

//les boucles for :

for (const user of data) {
  //veut dire que chaque element de data(+haut) s'appelle user
  document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
  //si on met juste un egal on écrase ce qu il y avait dans le body avant,
  //or si on met un += on ajoute
}

//for le plus utilisé
let i;
//on déclare la valeur de i
for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i].technos[0]); 
  document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

//switch

document.body.addEventListener('click',(e) => {
  // console.log(e.target.id); // permet de n'avoir que id de celui qui est cliqué
  //e.target= permet de savoir ce que l'on cible
    //mettons une couleur pour chaque language:
    // if (e.target.id === "javascript"){
    //   document.body.style.background = "yellow"
    // }else if (e.target.id === "php"){
    //   document.body.style.background = "purple"
    // }else(e.target.id === "python");{
    //   document.body.style.background = "blue"
    // };

    //pour éviter les if en cascade on met un switch
    switch (e.target.id) {
      case "javascript":
        document.body.style.background = "yellow"; 
        document.body.style.color = "black";       
        break;
      case "php":
         document.body.style.background = "purple";
         document.body.style.color = "pink";         
        break;
      case "python":
         document.body.style.background = "blue";
         document.body.style.color = "white";         
        break;
      default:
        break;
    }
});

//les différentes méthodes
//methode string
let string2 = "Javascript est un langage orienté objet";

console.log(typeof string2); //pour connaitre le type de la variable.
//eval => elle concataine  des nb et des string
//parseInt =>transforme une string en number
console.log(eval(parseInt("1") + 2));
console.log(typeof "42");//string
console.log(typeof (parseInt("42")));//number
//est ce que ce n'est pas un chiffre : isNaN//not a number
console.log(isNaN("string"));//true
//la longeur d'une chaine de caractere
console.log(string2.length);
//caractere 22 d'une chaine
console.log(string2[22]);
//donne moi le t
console.log(string2[string2.length - 1]);
//indexOf => pour trouver ou ca commence par l
console.log(string2.indexOf('langage'));
console.log(string2.indexOf('x'));//retourne -1 s'il ne l'a pas

//pour couper le nb d'element entre paranthese
let newString = string2.slice(2);
console.log(newString);
//slice avec 2 chiffe ( debut 5 et fin à 17)
let newString2 = string2.slice(5, 17);
console.log(newString2);

//split => partout ou tu voit un i tu coupe et tu mets dans un tableau
console.log(string2.split('i'));

//tout mettre en lowercase(minusciule)
console.log(string2.toLowerCase());
//ou en toUpperCase()=>en majuscule

//replace() tous les mots js par php
console.log(string2.replace("Javascript" , "php"));
//------------------------------------------------
//methode pour numbers
let number2 = 42.1234

//réduire son nb  apres la virgule
console.log(number2.toFixed(2));





