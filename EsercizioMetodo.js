//Crea un oggetto cane con una proprietà nome e un metodo abbaia che stampi "Woof! Woof!".

let cane = {
    nome: "Argo",
    verso: function() {
        console.log("Woof Woof! Sono un cane parlante e il mio nome è " + this.nome)
    }
}

cane.verso()