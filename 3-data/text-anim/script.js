//animer l'apparition des lettres en js 
// vidéos from scratch youtube #14

const target = document.getElementById('target');
let array =["développeur","photographe","créatif"];
let wordIndex = 0;
let letterIndex = 0;
//injecté dans le html
// target.textContent = array[0];

//maintenant il faut automatiser 
const createLetter = ()=> {
  const letter = document.createElement('span')
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];
  //pour que les lettres disparaissent
  setTimeout(() =>{
    letter.remove();
  }, 2800);
};

//on joue la fonction
// createLetter();

//pour créer toutes les 2s à l'infini
// setInterval(() =>{
//   letterIndex++;
//   createLetter();
// },200);

//ou soit: pas pratique mais mieux
//le timeout est un compte à rebours
// setTimeout(() =>{
//   letterIndex++;
//   createLetter();
// },200);

//on peur faire une fonction récursive =>
//c'est une fonction qui s'appelle elle même pour changer de mots
const loop = () => {
  //fais moi une lettre toutes les 60 ms
  setTimeout(()=>{
    //pour qu'il redémarre de zéro(dev) apres etre arrivé à créatif
    if(wordIndex >= array.length){
      wordIndex = 0;
      letterIndex = 0;
      loop();
    }else if(letterIndex < array[wordIndex].length){
      createLetter();
      letterIndex++;
      loop();
    }else{
      wordIndex++;
      //et remettre le compteur de lettre a 0 pour changer de mot
      letterIndex = 0;
      //laps de temps qui laisse lire le mot en cours
      setTimeout(() => {
        loop();
      } ,2800);
      
    }
  },60);
};
loop()



