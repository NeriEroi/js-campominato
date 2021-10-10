// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.

// function mine() {
//     n = 16;
//     if (n > 0 && n <= 100) {
//       str = "";
//       for (i = 0; i < n; i++) {
//            num = Math.round(Math.random() * 100 + 1);
//            if (i > 0) {
//               str = str + ", ";
//            }
//            str = str + num;
//         }
//         document.getElementById("casuali").innerHTML = "Mine: " + str;
//     } 
//     else {
//         document.getElementById("casuali").innerHTML = "Inserisci un numero maggiore di 0 e inferiore a 100";
//     }
// }



// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.


// var arrayMine = [];

// var mine = mineGenerate(1, 101);

// console.log(arrayMine);

// function mineGenerate (min, max) {
//     for (i = 0; i < 16; i++) {
//         arrayMine.push(Math.round(Math.random() * (max - min)) + min);
//     }
//     return Math.round(Math.random() * (max - min)) + min;
// }



// function randomNumbers (min, max){
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // difficoltà
// var level = parseInt(prompt("Scegli il livello di difficoltà: [0/1/2]"));
// var limit;
// switch (level) {

//   case 1:
      
//       limit = 80;
//       break;

//   case 2:
     
//       limit = 50;
//       break;

//   default:
     
//       limit = 100;
//       break;
// }
// console.log(limit);

// // array da 16 numeri generati casualmente
// var bombs = [];


// while (bombs.length < 16){
//   var pcNumber = randomNumbers(1, limit)
  
//   if (!bombs.includes(pcNumber)){
//       bombs.push(pcNumber)
//   }

// }
// console.log(bombs);


// var userArray = [];


// for (i = 1; i <= (limit - 16); i ++){
//   var userNumber = parseInt(prompt("Inserisci un numero tra uno e " + limit + "."))
  
 
//   while (userNumber < 1 || userNumber > limit || isNaN(userNumber)){
//       alert("Inserisci un numero valido!")
//       userNumber = parseInt(prompt("Inserisci un numero tra uno e " + limit + "."))
//   }

  
//   if (!userArray.includes(userNumber)){
//       if(bombs.includes(userNumber)){
//           alert("Bomba! Hai perso! Il tuo punteggio è:" + userArray.length);
//           break;
//       }
//       userArray.push(userNumber);
//       console.log(userArray);

//   } else {
//       alert("Numero già inserito!");
//       i--;
//   }

// }


// if(userArray.length === (limit - 16)) {
//   alert("Hai vinto! Punteggio:" + userArray.length);
// }

// CAMPO MINATO

// dati
const array_bomb = [];
let bombs_number;
let array_giocate = [];
let giocate;

// difficoltà 
const how_difficult = parseInt(prompt("Choose Difficult: 0 = Easy ; 1 = Medium ; 2 = Hard"));
if (how_difficult == 0) {
    bombs_number = 5;
    giocate = 1;
} else if (how_difficult == 1) {
    bombs_number = 10;
    giocate = 2;
} else if (how_difficult == 2) {
    bombs_number = 15;
    giocate = 3;
};


for(i = 0; i < bombs_number; i++) {
    random_bomb = Math.floor(Math.random() * 100) + 1;
    if (array_bomb.indexOf(random_bomb) === -1) {
        array_bomb.push(random_bomb);
    } else {
        i--
        random_bomb;
        array_bomb.push(random_bomb);
    }
};

console.log(array_bomb);

// richiesta delle giocate e verifica se il numero inserito coincida con una bomba oppure no
for(i = 0; i < giocate; i++) {
    playing_request = parseInt(prompt("Inserisci un numero e spera che non coincida con una bomba :)"));
    if (array_bomb.includes(playing_request)) {
        console.log("BOOOM!!! Hai perso!");
        console.log("Numero di giocate utili: " + array_giocate.length);
        break;
    } else {
        if (array_giocate.indexOf(playing_request) === -1) {
            alert("Pfiuuuh!!! Sei ancora vivo!");
            array_giocate.push(playing_request);
        } else {
            alert("Non si possono inserire per due volte gli stessi numeri!");
            i-- //per fare in modo che non si conteggi il ciclo in cui è stato inserito lo stesso numero per due volte
            playing_request;
            if (array_giocate.indexOf(playing_request) === -1) {
                alert("Pfiuuuh!!! Sei ancora vivo!");
                array_giocate.push(playing_request);
            }
        }
        if (array_giocate.length == giocate) {
            console.log("Sììììì!!! Sei rimasto vivo e quindi HAI VINTO!");
        }
    }
};



















  










