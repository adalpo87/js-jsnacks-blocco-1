

//snack8

/* **JSnack 8**
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
(qui è necessaria una ricerca nella documentazione) */

var serie = prompt("Inserisci un numero di quattro cifre");


var somma = 0;
var i = 0;

while(i < serie.length){
  var n = parseInt(serie.charAt(i));
  somma += n;
  i++;
  console.log(somma);
}

