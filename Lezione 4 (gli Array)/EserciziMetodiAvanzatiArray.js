// Crea un array di numeri e usa .map() per raddoppiare ogni numero. Poi usa .filter() per selezionare solo quelli maggiori di 10.

let numbers = [2, 4, 6, 8, 10, 12, 14, 16]

let double = numbers.map(num => num * 2)
let filter = numbers.filter(num => num > 10)

console.log("doppi", double, "maggiori di 10", filter)