
//SNACK 3

var x1 = parseInt(prompt('Inserisci il primo numero'));

var x2 = parseInt(prompt('Inserisci il secondo numero'))

var x3 = parseInt(prompt('Inserisci il terzo numero'))

var x4 = parseInt(prompt('Inserisci il quarto numero'))

var x5 = parseInt(prompt('Inserisci il quinto numero'))

var x6 = parseInt(prompt('Inserisci il sesto numero'))

var x7 = parseInt(prompt('Inserisci il settimo numero'))

var x8 = parseInt(prompt('Inserisci il ottavo numero'))

var x9 = parseInt(prompt('Inserisci il nono numero'))

var x10 = parseInt(prompt('Inserisci il decimo numero'))

console.log(x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9 + x10);


//snack 3 (soluzione)

//creo una variabile per la somma
var somma = 0;
//creo un ciclo con 10 iterazioni dove chiedo il prompt e sommo i dati
for (var i = 0; i < 5; i++){
  var nuovoNumero = parsInt(prompt("Inserisci un numero"));
  somma += nuovoNumero;
}
//output
console.log(somma);