//Usa .filter() per ottenere solo i numeri pari da un array di numeri.

let numbers = [1, 2, 6, 7, 11, 14]

let filter = numbers.filter(num => num % 2 === 0 )

console.log("Numeri pari", filter)