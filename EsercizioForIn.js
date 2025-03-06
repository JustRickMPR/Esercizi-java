//Crea un oggetto che rappresenti un libro con proprietà come titolo, autore e anno. Usa for...in per stampare tutte le proprietà spiegando passo passo cosa accade.

let libro = {
    titolo: "Wofof",
    autore: "Rick",
    anno: "2025"
}


for(let chiave in libro) {
console.log("Informazioni " + chiave)
console.log("Risposte " + libro[chiave])
}

// odio le virgole