const worker = new Worker('js/webworkeruebung/worker.js')
//Worker geht vom root level aus!!!!!
const calcBtn = document.getElementById("calcBtn")
const bgBtn = document.getElementById("bgBtn")
const result = document.getElementById("result")

//functionen
function handleCalc() {
    worker.postMessage("hallo worker")
}

worker.onmessage = function(res){
    console.log("worker res", res)
    result.innerText=res.data

}

function handleBg() {

    if (document.body.style.background !== "green") {
        document.body.style.background = "green"
    } else {
        document.body.style.background = "yellow"
    }
}





//Event listener
calcBtn.addEventListener("click", handleCalc)
bgBtn.addEventListener("click", handleBg)