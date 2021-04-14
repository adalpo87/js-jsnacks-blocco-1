
//SNACK6

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