//interations

//interation Array mit for...of

const fruits = ["bananen", "äpfel", "kirschen"]

for(let fruit of fruits){
    console.log(fruit)
}

//for...in
let person = {name: "peter", age: 47, "1. Buchung": 500, "2. Buchung": 1000}
const array = Object.entries(person)
console.log("array", array)


for(let key in person){
    console.log(key, person[key])
}