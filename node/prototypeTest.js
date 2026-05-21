import { Auto } from "./basics/class.js";

const meinAuto = new Auto("VW", "Polo", "2000")

console.log("mein auto", meinAuto)

Auto.prototype.newPrototypeAction = function(){
    console.log("hallo neuer prototype")
}

meinAuto.newFunction = function(){
    console.log("lakdfjlk", this.marke)
}
//meinAuto.newPrototypeAction()

meinAuto.newFunction()
