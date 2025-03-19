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
for(let mission in missions)
    console.log(missions)
}


function completemission() {
    missions.pop()
}

function missionmodifier(index, newmission) {
    index = { (addmission())
    newmission: newmission
    }



}



//missionsviewer()
//completemission()

console.log(missions)

