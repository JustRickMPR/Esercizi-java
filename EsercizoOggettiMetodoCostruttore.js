//Crea un costruttore Auto con proprietà marca, modello e anno e usalo per creare due auto diverse.

function auto(marca, modello, anno) {
    this.marca = marca
    this.modello = modello
    this.anno = anno
}

let auto1 = new auto("Ferrari", "stradale", 2023)
let auto2 = new auto("Pinuzza", "GTB", 2043)

console.log(auto1, auto2)