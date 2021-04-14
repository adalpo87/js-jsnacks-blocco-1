//SNACK 2

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
