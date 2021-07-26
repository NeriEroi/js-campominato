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



// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.

function getRandomNumber (min,max)
{
  var newRandomNumber = Math.floor(Math.random() * max - min + 1) + min;
  return newRandomNumber;
}


// I numeri non possono essere duplicati.

function checkNumber (array, element)
{
  var trovato = false; 

  for (var i = 0; i < array.length; i++)
  {
    if (array[i] == element)
    {
      trovato = true;
    }
  }
  return trovato;
}



var bombe = [];

while (bombe.length < 16)
{
  
  var newCpuNumber = getRandomNumber(1, 100);

  
  if (bombe.includes(newCpuNumber) == false)  
  {
    bombe.push(newCpuNumber);
  }
}

console.log(bombe);


















  










