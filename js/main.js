// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.

function mine() {
    n = 16;
    if (n > 0 && n <= 100) {
      str = "";
      for (i = 0; i < n; i++) {
           num = Math.round(Math.random() * 100 + 1);
           if (i > 0) {
              str = str + ", ";
           }
           str = str + num;
        }
        document.getElementById("casuali").innerHTML = "Mine: " + str;
    } 
    else {
        document.getElementById("casuali").innerHTML = "Inserisci un numero maggiore di 0 e inferiore a 100";
    }
}


  










