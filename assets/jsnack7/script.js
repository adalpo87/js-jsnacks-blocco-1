
//snack7


var tot_potenza = 0;
var i = 1;

while (tot_potenza < 1000){
  console.log(tot_potenza);
  console.log(i);
  console.log("---------");
  tot_potenza = Math.pow(2, i);
  i++;
}

//correzione

/* var limite = 1000;
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
} */