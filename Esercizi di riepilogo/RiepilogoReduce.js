//Crea un array con 5 numeri e usa .reduce() per calcolare la loro somma.

let numbers = [1, 2, 3, 4, 5]

let somma = numbers.reduce((acc, num) => acc + num)
console.log(somma)