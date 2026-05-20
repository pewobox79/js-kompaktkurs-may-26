//Math Object


console.log(Math.PI)
console.log(Math.sqrt(16))
console.log(Math.pow(2,3))
console.log(Math.round(4.5)) //=> runden von zahlen nach der mathematischn regel
console.log(Math.floor(4.9)) //=> rundet immmer ab
console.log(Math.ceil(4.3)) //=>rundet immer auf



//Datum und Zeit

let now = new Date()
console.log("now", now)
console.log(now.toDateString())
console.log(now.toLocaleDateString())

//custom
console.log(now.getFullYear())
console.log(now.getMonth() +1)
