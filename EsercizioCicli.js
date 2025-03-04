//Scrivi un ciclo while che continui a chiedere all'utente di inserire un numero maggiore di 10 finché non lo fa.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function chiediNumero() {
  rl.question("Inserisci un numero maggiore di 10: ", (input) => {
    let tentativo = parseInt(input);
    
    if (isNaN(tentativo) || tentativo <= 10) {
      console.log("Numero non valido. Riprova.");
      chiediNumero(); 
    } else {
      console.log("Bravo.");
      rl.close(); 
    }
  });
}

chiediNumero(); 
