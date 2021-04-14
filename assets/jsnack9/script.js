//snack9 Calcola la somma e la media dei primi 10 numeri.

var serie = "0123456789";


var somma = 0;
var i = 0;

while(i < 10){
  var n = parseInt(serie.charAt(i));
  console.log("numero")
  console.log(i);
  somma += n;
  i++;
  console.log("Totale")
  console.log(somma);
  console.log("Media")
  console.log(somma / i);
  console.log("-------")
}
