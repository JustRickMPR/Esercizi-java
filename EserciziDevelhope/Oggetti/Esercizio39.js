let user = {
    name: "Cosimo",
    age: 30,
    };
    
    let newUser = {}; //perché va a modificare ciò che si trova dentro l'oggetto e non la variabile

    for(let keys in user ) {
      newUser[keys] = user[keys]
    }

    
    newUser.name = "Paolo";
    
    console.log(newUser);
    console.log(user);