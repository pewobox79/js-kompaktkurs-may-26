//bind

const user = {
    name: "Peter",
    age: 47,
    intro() {
        console.log(`hello, my name is ${this.name}. I am ${this.age} years young`)
    }
}

const user2 = {
    name: "user 2",
    age: 100
}

user.intro(44, "heinz")
user.intro()
const fn = user.intro.bind(user2)
fn()


//call
//im kontext einer function wird call angewendet
function greet() {
    console.log(`Begrüße bitte ${this.name}! ${this.age ? `Du bist ${this.age} Jahre alt` : ""}`)
}

greet.call({ name: "Maria" })
greet.call({ name: "Heinz", age: 44 })


//legacy Konstructor function (ES5)

function AutoOld(marke, modell, baujahr) {
    this.marke = marke
    this.modell = modell
    this.baujahr = baujahr

}

const auto1 = new AutoOld("bmw", "3er", "2020")
const auto2 = new AutoOld("mercedes", "sklasse", "2018")

console.log("auto1", auto1, "auto2", auto2)

//class

class Auto {
    constructor(marke, modell, baujahr) {
        this.marke = marke
        this.modell = modell
        this.baujahr = baujahr
    }

    static startCar(){
        console.log(`ich starte meinen ${this.marke}`)
    }

    stopCar(){
        console.log('stop the car')
    }
}
Object.freeze(Auto.prototype)
const auto3 = new Auto("Porsche", "911", "2015")
console.log("auto3", auto3.hasOwnProperty("startCar"))
console.log("prototype auto3", Object.getPrototypeOf(auto3))
console.log("auto3", auto3)

auto3.stopCar()

//changeCar wird mit der folgenden Schreibweise zu einem Property und kann NICHT auf THIS zugreifen!
auto3.changeCar = ()=>{
    console.log("changed the car")
}
console.log("nach changeCar", auto3)

//über Prototyping kann die changeCarProto auf THIS zugreifen. ist aber kein Property von AUTO class
//declaration der neuen prototype funciton MUSS folgenden Syntax haben : function(){} und darf keine 
//Arrow Funktion sein
// 
Auto.prototype.changeCarProto = function(){
    console.log(`changed the car via proto ${this.marke}`)
}

console.log(auto3)
auto3.changeCarProto()

