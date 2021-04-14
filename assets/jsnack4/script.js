//SNACK4
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
