var mail = ["andreaserboli@gmail.com" , "gianlucapesce@gmail.com" , "carlocarli@gmail.com" , "mariomari@gmail.com"]
console.log(mail)
// Chiedi all’utente la sua email
var mailUtente = prompt('Qual è la tua mail?')
console.log(mailUtente)
// controlla che sia nella lista di chi può accedere,
for(var i = 0 ; i < mail.length; i++) {

  if (mailUtente == mail[i]) {
    console.log(mail[i])
    alert('CHE FORTUNA! Puoi accedere al sito.');
  } else if (mailUtente != [i])  {
    console.log(mail[i])
    alert('MI DISPIACE! Non puoi accedere al sito.');
  }

}


// stampa un messaggio appropriato sull’esito del controllo.
