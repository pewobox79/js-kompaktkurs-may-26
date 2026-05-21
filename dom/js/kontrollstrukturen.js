//If-Else

let temperature = 32

if (temperature > 30) {
    console.log("Es ist sehr heiß!")
} else if (temperature > 20) {
    console.log("heute ist es nicht so heiß")
} else if (temperature > 10 && temperature < 5) {
    if(temperature === 11){
        console.log(temperature)
    }else{
        console.log("heute ist es sehr kühl")
    }
} else {
    console.log("sehr kalt heute")
}


//switch statement

switch (true) {
    case temperature > 30: {
        console.log("Es ist sehr heiß!")
        break;
    };
    case temperature > 20: {
        console.log("heute ist es nicht so heiß")
        break;
    };
    default: console.log("default")
}

let weekDay = "Montag"

switch(weekDay){
    case "Montag": {
        console.log(`es ist ${weekDay}`)
        break;
    }
    default: console.log("Wochenende!!")
}


//schleifen
//for-schleife
for (let i = 0; i < 5; i++) {
    console.log(i)
}


//while-schleife

let count = 0

while (count < 3) {
    console.log("Zähler", count)
    count++
}

//do-while

let number = 5

do {
    console.log("Zahl ist", number)
    number--
} while (number < 3)


