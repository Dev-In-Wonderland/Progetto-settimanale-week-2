/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/



/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for(let i = 0; i<pets.length; i++){

  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/



/*for(let i = 0; i<pets.length; i++){

  console.log(pets.sort()[i])
}*/


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/


/*let pets2 = pets.reverse()
for(let i = 0; i<pets2.length; i++){

  console.log(pets2[i])

}

//Ho commentato questo per rendere visibile in console solo l'array pets originale

*/
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/


let dog = pets.shift()
pets.push(dog)
for(let i = 0; i<pets.length; i++){
  
  
  console.log(pets[i])
}
  



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]


for(let i = 0; i<cars.length; i++){
  switch(cars[i]){
    case cars[0] : 
Object.assign(cars[0], {LicencePlate: "AA001BB"})
break;
case cars[1] :
    Object.assign(cars[1], {LicencePlate: "AA002BB"})
break;
case cars[2] :
    Object.assign(cars[2], {LicencePlate: "AA003BB"})
break;
}
}
console.log(cars)




/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
//La prima parte dell'esercizio la commento per rendere meglio visibile la seconda
//Object.assign(cars, {brand: '', model: '', color: '', trims: [],LicencePlate: ""})

//console.log(cars)
  
for(let i = 0; i<cars.length; i++){
  switch(cars[i]){
    case cars[0] : 
    delete cars[0].trims[2]
break;
case cars[1] :
  delete cars[1].trims[1]
break;
case cars[2] :
  delete cars[2].trims[2]
break;
}
}
console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

Object.assign(justTrims, [{trims: "titanium"}, {trims: "allure"}, {trims: "life"}])

console.log(justTrims)


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for(let i = 0; i<cars.length; i++){
  if(cars[i].color.slice(0,1)== 'b'){
    console.log('Fizz')
  }else{console.log('Buzz')}
  }



/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0
while ( i<numericArray.length) {
  console.log(numericArray[i])
  if(numericArray[i] == 32){
    break;
    
  }
  i++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const numbers = [7, 12, 19, 21, 4]
const charactersArray = ["g", "n", "u", "z", "d"]

for(i=0; i<charactersArray.length; i++){
switch(charactersArray[i]){
  case "g" : 
  delete charactersArray[i];
  charactersArray.push(numbers[i])
  break;
  case "n" : 
  delete charactersArray[i];
  charactersArray.push(numbers[i])
  break;
  case "u" : 
  delete charactersArray[i];
  charactersArray.push(numbers[i])
  break;
  case "z" : 
  delete charactersArray[i];
  charactersArray.push(numbers[i])
  break;
  case "d" : 
  delete charactersArray[i];
  charactersArray.push(numbers[i])
  default:
    break;
}
}

console.log(charactersArray)