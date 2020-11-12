var mail = ["andreaserboli@gmail.com" , "gianlucapesce@gmail.com" , "carlocarli@gmail.com" , "mariomari@gmail.com"]
console.log(mail)
// Chiedi all’utente la sua email
var mailUtente = prompt('Qual è la tua mail?')
console.log(mailUtente)
// controlla che sia nella lista di chi può accedere,
var risultato = false;
for(var i = 0 ; i < mail.length; i++) {

  if (mailUtente == mail[i]) {
    risultato = true;
  }

}

if (risultato === true) {
  alert('CHE FORTUNA! Puoi accedere al sito.');
} else {
  alert('MI DISPIACE! Non puoi accedere al sito.');
}



// stampa un messaggio appropriato sull’esito del controllo.
