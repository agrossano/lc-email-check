// 1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;


// dichiaro le variabili
var mailList, userMail, check, msg;

// creo lista email
mailList = ['usermail1@domain.com', 'usermail2@domain.com', 'usermail3@domain.com', 'usermail4@domain.com'];
console.log(mailList);

// chiedo mail all'utente
userMail = prompt('Qual è la tua mail?');

// setto la variabile check come false
check = false;

// verifico che la mail sia all'interno della lista
for (var i = 0; i < mailList.length; i++) {
  if (userMail === mailList[i]) {
    check = true;
  }
}

//  valorizziamo il messaggio a seconda che la mail sia stata trovata o meno
if (check) {
  msg = 'Accesso consentito';
} else {
  msg = 'Accesso non consentito';
}

// stampo un messaggio a video di benvenuto o rifiuto

document.getElementById('mail-check').innerHTML = msg;
