missions = []

function addmission(mission) {
let goal = {
    mission : mission

}

missions.push(goal) 

}

addmission("Kill T. without being spotted")
addmission("Steal the secret sandwitch")
addmission("Beat Paige on the game Budokai Tenkaichi 3")

function missionsviewer() {
for(let mission of missions)
    console.log(mission)
}


function completemission() {
    missions.pop()
}

function missionmodifier(index, newmission) {
missions [index] = newmission

}

missionmodifier(0, "Prova")

//missionsviewer()
//completemission()

console.log(missions)

