const root = document.getElementById("root")

//fetch API
const BASE_URL = "https://jsonplaceholder.typicode.com/"
const BASE_CONFIG = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer 2342342'
    }
}


function createElement(singleToDo) {

    //destructure object mit alias bei title
    const { title: Todo, userId, completed } = singleToDo

    //create Elements in JS
    const section = document.createElement("section")
    const title = document.createElement("h4")
    const pStatus = document.createElement("p")
    const pUserId = document.createElement("p")

    //kontext füllen
    title.innerText = Todo
    pStatus.innerText = completed ? "erledigt" : "offen"
    pUserId.innerText = userId

    //append
    section.append(title, pStatus, pUserId)
    root.append(section)

}

async function returnElements() {
    const data = await getToDosFromApi()
    console.log("list", data)
    if (!Array.isArray(data)) return
    data.forEach(todo => {
        createElement(todo)

    })
}

async function getToDosFromApi() {
    const URL = `${BASE_URL}todos`
    /**
     * SPREAD OPERATOR <...>
     * const config ={
        method: "GET",
        ...BASE_CONFIG
    }*/
    const response = await fetch(URL)
    console.log("res", response)
    if (!response.ok) {
        throw Error("fehler")
    }
    return await response.json()

}