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