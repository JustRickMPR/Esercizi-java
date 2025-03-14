//1. **Aggiungere nuovi studenti** con nome, età e corso di studio.
//2. **Visualizzare tutti gli studenti registrati.**
//3. **Trovare uno studente specifico inserendo il suo nome (usando `.filter()`).**

let students = []

function addStudent(name, age, course) {
 let student = {
    name: name,
    age: age,
    course: course
 }
 students.push(student)

}

addStudent("Rick", 16, "2G")
addStudent("Domenico", 16, "3R")
addStudent("Ale", 17, "1S")


for(let student of students) {
    console.log(student)
}


let filter = students.filter(student => student.name == "Ale");

console.log("Studente", filter)