

console.log("hallo") 
function addStreet(obj){
 // 1. fetch strassen packet
 // 2. checken ob user_id existiert
 // 3. merge address mit user object
    let incomingObj = obj
    incomingObj.address = {
        street: "strassenamen",
        city: "Ingolstadt"
    }
    return incomingObj
}

export default function getData() {

    const user = {
        name: "Peter",
        age: 47,

    }
    return addStreet(user)

}