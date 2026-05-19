const user = {
    name: "Peter",
    age: 47,
    address: {
        street: "strassenname",
        number: 22
    }
}

const keysOfObject = Object.keys(user)
const valuesOfObject = Object.values(user)
console.log("keys", keysOfObject) // => keys kommen als array zurück
console.log("values", valuesOfObject)

keysOfObject.map(key => {
    let userData = user[key]
    if (typeof userData === 'object') {
        Object.keys(userData).map(key => {
            console.log(key, userData[key])
        })
    } else {
        console.log(key, userData)
    }
})