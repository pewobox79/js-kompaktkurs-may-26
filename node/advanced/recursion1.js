//Recursion Übung 1
//Recursion ist eine funktion die sich selbst aufruft

// loop
function countDown(n){
    for(let i = n; i > 0; i--){
        console.log(i)
    }
    console.log("Start")
}
//countDown(4)

// gleiches Beispiel mit Recursion

function countDownRecursion(n){

    if(n <= 0){
        console.log("Start")
        return
    }
    console.log(n)
    countDownRecursion(n-1)
}

countDownRecursion(4)

//Fazit: Recursion bei einem countDown Beispiel ist nicht unbedingt nötig. ein for-loop 
// erfüllt den gleichen zweck