//IIFE
(
    function () {
        console.log("guten morgen")
    }
)()


//functions
mySecondFunction()
//arrow function
const myFirstFunction = (name, age, height) => {

    //guard clause
    if (!name) {
        console.log("Name ist nicht da")
        return
    }

    //template string
    const extra = `Du bist ${age} Jahre und ${height} cm groß`
    const message = `hallo ${name}`

    console.log(message, age && height ? extra : "")

}

myFirstFunction()

//functions declaration

function mySecondFunction() {

    console.log("second function")

}


// formatierung

export const formatCarList = (carList, colorList) => {
    const colors = Array.isArray(colorList)
    const cars = Array.isArray(carList)

    if (!colors || !cars) {
        console.log("cars", cars, "colors", colors)
        return
    }

    return carList?.map((car, index) => {
        return {
            carType: car,
            color: colorList[index]
        }
    })

    //return newList // function returned neuen wert
}