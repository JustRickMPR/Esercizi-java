//Scrivi un programma che controlli se un utente ha sia il login attivo sia un abbonamento premium utilizzando &&.
let login = true
let subscription = false

if(login && subscription){
    console.log("premium subscriber")
}

else if(login === false){
  console.log("non-user")

}
else {
    console.log("free plan")
}

// svolto correttamente in totale autonomia.