/* //SNACK 2

var parola1 = prompt("inserisci la prima parola");

var parola2 = prompt("inserisci la seconda parola");

var par1 = parola1.length
var par2 = parola2.length

if (par1 > par2){
  console.log(parola2 + " " + parola1)
 
}
else if (par1 < par2){
  console.log(parola1 + " " + parola2)
}
else {
  console.log("le parole sono lunghe uguali")
}
 */





/* //SNACK 3

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
console.log(somma); */






/* //SNACK4
var nome_invito = prompt('Il tuo nome');

var invitati = [
  "alessandro",
  "giovanni",
  "francesca",
  "giorgio",
  "marta"
]

var presenza = false;

for(var i = 0; i < invitati.length; i++){
  presente = invitati[i]
  if (nome_invito === presente){
    presenza = true;
  }
} 
if (presenza) {
  console.log("Puoi entrare alla festa")
}
else{
  console.log("Non puoi entrare")
}
 */

//SNACK5


//crea un array vuoto

var contenitore = [];

//crea un ciclo for e chiedi per 6 volte all'utente di inserire un numero

for (var i = 0; i < 6; i++){
  var numero = parseInt(prompt("inserisci un numero"))
 if (numero%2 != 0){
    contenitore.push(numero)
 } 
}

console.log(contenitore);