import { myColorsArray, myListOfCars } from "../store/store.js"

//variable
let myNumber = 12
myNumber = 22
myNumber = "hallo"

//console.log("myNumber: ", myNumber)

//constante
const myString = "String"
//console.log("myString", myString)

//vergleichen von Werten

const wert1 = 22
const wert2 = "33"
const formatedWert2 = Number(wert2)

const ergebnis = String(wert1) + Number(wert2)
console.log("isNaN", isNaN(formatedWert2))
//console.log("vergleiche", wert1 === wert2, ergebnis)

const street ={
    city: "pörnbach",
    street: "strasse",
    number: 11
}
const object = {
    name: "Peter",
    age: 47,
    street
}
//object?.street?.number || "nicht bekannt"
const object1 = {
    name: "Peter",
    age: 47
}


const object2 = object

object.lastname = "wolf"
object.age = 50
Object.freeze(street)
object.weight = 22323
//console.log("object vergleich", object)


//array
const myArray = new Array() // veraltet und nicht mehr standard
const myArray2 = ["peter", "wolf", 47 ] // empfohlene init definierung
myArray2.push("hallo")

console.log(typeof myArray2) //=> return ist Object
Array.isArray(myArray2) // => return ist Array

const indexOfNumber = myArray2.indexOf(47)
//console.log("array", myArray2, indexOfNumber)

myArray2.splice(indexOfNumber, 1)
//console.log("myArray", myArray2)

console.log("myArray after splice", myArray2)
const joinedString = myArray2.join("/")
console.log("string: ", joinedString)


//interation Array
//map-methode gibt neues array zurück
const myNewListOfCars = myListOfCars.map((car,index)=>{
    return {
        carType: car,
        color: myColorsArray[index]
    }
})

console.log("neue cars liste", myNewListOfCars[2])


for(let i = 0; myNewListOfCars.length > i; i++ ){
    console.log("myCar in for loop", myNewListOfCars[i].carType)

}

//for Each return nur
const newArray =[]
myNewListOfCars.forEach((car)=> {
    newArray.push(car)
    console.log("my Car in forEach", car)
} )


