

console.log("hallo") 
function addStreet(obj){
 // 1. fetch strassen packet
 // 2. checken ob user_id existiert
 // 3. merge address mit user object
    let incomingObj = obj

    const streetAddress = {street: "strassenname"}
    const cityAddress = {city: "City"}
    incomingObj.address = {
        ...streetAddress,
        ...cityAddress
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