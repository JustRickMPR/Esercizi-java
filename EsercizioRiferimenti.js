//Crea due variabili che contengano lo stesso oggetto, modifica una proprietà in una variabile e verifica se cambia anche nell'altra.

let sezione1 = {lettera: "A" }
let sezione2 = sezione1
sezione2.lettera = "B"

console.log(sezione2.lettera)