const user = {
    name: "Peter",
    age: 47,
    documents(){
        return ["doc1", "doc2"]
    },
    greet(){
        console.log(`Hallo ${this.name}`)
    }
}
user.greet()
user.name = "klaus"
console.log("user", user)
user.greet()
const userDocs = user.documents()
console.log("docs", userDocs)