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

/* var contenitore = [];

//crea un ciclo for e chiedi per 6 volte all'utente di inserire un numero

for (var i = 0; i < 6; i++){
  var numero = parseInt(prompt("inserisci un numero"))
 if (numero%2 != 0){
    contenitore.push(numero)
 } 
}

console.log(contenitore); */


//SNACK6
/* 
//utente estrae un numero
var numero_estratto = parseInt(prompt("Inserisci un numero"));
//tutti i numeri precedenti devono essere al cubo
var somma = 0;

for (i=1; i < numero_estratto; i++){
  console.log(i);
  console.log(Math.pow(i,3))
  somma += Math.pow(i, 3);
}
  
console.log(somma);
 */


//snack7


/* var tot_potenza = 0;
var i = 1;

while (tot_potenza < 1000){
  console.log(tot_potenza);
  console.log(i);
  console.log("---------");
  tot_potenza = Math.pow(2, i);
  i++;
}

//correzione

var limite = 1000;
var potenza;
var counterPotenza = 1;

while (potenza < limite){
  console.log(potenza);
  potenza = Math.pow(2, counterPotenza);
  counterPotenza++;
}

//Altra soluzione

While (potenza < limite){
  console.log(potenza);
  potenza +=2;
}
 */

//snack8

/* **JSnack 8**
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
(qui è necessaria una ricerca nella documentazione) */

/* var serie = prompt("Inserisci un numero di quattro cifre");


var somma = 0;
var i = 0;

while(i < 4){
  var n = parseInt(serie.charAt(i));
  somma += n;
  i++;
  console.log(somma);
}
 */


//snack9 Calcola la somma e la media dei primi 10 numeri.
/* 
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
 */