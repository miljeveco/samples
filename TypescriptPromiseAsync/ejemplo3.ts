function printPeople(people){
 console.log("*** People ***")
 console.log("Nombre: " + people.name)
 console.log("Color ojos: " + people.eye_color)
 console.log("Carros: " + people.vehicles.length)
}

const myURL = 'https://trainingcenter.cloud.ufps.edu.co/sleep?t=5'
const myURLJson = 'https://swapi.dev/api/people/'

let textPromise = fetch(myURL)
                .then(res => res.text())
textPromise.then(r=>console.log(r))

let jsonPromise = fetch(myURLJson)
                .then(res => res.json())
jsonPromise.then(r=>{
    console.log("Total Registros: " + r.count)
    console.log("Siguiente: " + r.next)
    console.log("Anterior: " + r.previous)
    console.log("Registros de esta Página: " + r.results.length)
    //printPeople(r.results[0])
    r.results.forEach(e => {
     printPeople(e)
    });
})

