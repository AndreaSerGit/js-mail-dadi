// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
var numeroUtente = Math.floor(Math.random() *6 + 1);
document.getElementById('dadoUtente').innerHTML =
numeroUtente
console.log(numeroUtente)

var numeroPC = Math.floor(Math.random() *6 + 1);
document.getElementById('dadoPC').innerHTML =
numeroPC
console.log(numeroPC)
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (numeroUtente > numeroPC) {
  document.getElementById('risultato').innerHTML =
  'HAI VINTO'
} else if (numeroUtente < numeroPC) {
  document.getElementById('risultato').innerHTML =
  'HAI PERSO'
} else if (numeroUtente = numeroPC) {
  document.getElementById('risultato').innerHTML =
  'PAREGGIO'
}
