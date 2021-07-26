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


var arrayMine = [];

var mine = mineGenerate(1, 100);

console.log(arrayMine);

function mineGenerate (min, max) {
    for (i = 0; i < 16; i++) {
        arrayMine.push(Math.round(Math.random() * max) + min);
    }
    return Math.round(Math.random() * max) + min
}












  










