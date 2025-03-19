//Partendo dal codice, vogliamo che la variabile sport sia una variabile 'globale', quale definizione possiamo adottare?.

let personName = "Cosimo"
let sport = " Football";

function canPlay() {

if (true) {
personName = "pippo";
}



console.log(personName + sport);
}


canPlay();

//spostando la variabile sport al di fuori della function.