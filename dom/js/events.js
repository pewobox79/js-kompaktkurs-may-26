const divElement = document.getElementById("button")
const listOfInputs = document.querySelectorAll("input")

const INIT_VALUES = {
    vorname: "",
    nachname: "",
    email: "",
}

let inputValue = INIT_VALUES

function handleClick(e) {
    e.preventDefault()
    //request api

    
    listOfInputs.forEach(input => input.value = INIT_VALUES[input.name.toLowerCase()])


}

function handleChange(e) {
    inputValue = {...inputValue, [e.target.name]: e.target.value}
}

divElement.addEventListener("click", handleClick)

listOfInputs.forEach(input=> {
    input.addEventListener("change", handleChange)
    input.setAttribute("value", inputValue[input.name])

})