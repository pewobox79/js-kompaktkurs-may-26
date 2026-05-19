//closure Funktion
//beispiel ohne closure function
let foo = 1
function add(){
    foo += 1
    return foo
}
console.log(add())
console.log(add())
console.log(add())
foo = 9999
console.log(add())
console.log(add())

//beispiel mit closure

function getAdd(n = 1){
    let foo = n; // private variable
    return function (){
        foo += 1
        return foo
    }
}

const add2 = getAdd()
const add3 = getAdd(10)
console.log(add2())
console.log(add2())
console.log(add2())
console.log(add3())
console.log(add3())
console.log(add3())