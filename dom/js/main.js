const root = document.getElementById("root")

const h1 = document.querySelector("h1")
const allH1 = document.querySelectorAll("h1")

console.log("h1 query", h1) // => nur die erste h1
console.log("all h1", allH1) // => nodeList

//iteration NodeList geht nur mit forEach
allH1.forEach(item=>console.log(item))

//Dynamischen Kontent einfügen
//Element erstellen
const section = document.createElement("section")
const div = document.createElement("div")
const h2 = document.createElement("h2")
const p = document.createElement("p")

//inhalt füllen bei elementen
h2.innerText = "Section 1 Title"
p.innerText = "das ist mein paragraph"

// styling
h2.setAttribute("style", "color: red; border: 1px solid green")
p.className = "meine Klasse"

//bauen gesamtes element
div.append(h2, p)
section.appendChild(div)

root.append(section)
