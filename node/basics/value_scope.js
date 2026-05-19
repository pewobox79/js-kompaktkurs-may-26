// Global vs Function Scope
let name = "Global Name"

function test(){
    var name = "Local Name"
    console.log("test output", name)
}
test()
console.log(name)


// Block Scope
if(true){
    var a = 10 // => wird automatisch in Global Scope verfügbar
    let b = 20 // => ist exklusiv in if-scope verfügbar, nicht ausserhalb
}

console.log(a)
//console.log(b) // => return b ist not defined - weil im if-scope gefangen


// shadowing
let value = 100;
function show(){
    let value = 50
    console.log("show return", value)
}

show()
console.log(value)


// var bei Loops
for(let i = 0; i < 3; i++){
    setTimeout(()=>{
        console.log(i)
    }, 100)
}



