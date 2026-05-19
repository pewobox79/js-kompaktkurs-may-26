/* import { formatCarList } from "./basics/functions.js";


console.log("aus der indexjs, ", myColorsArray, myListOfCars)

const returnValue = formatCarList("lkajdfs", myColorsArray)

console.log("returnvalue", returnValue) */

import auto from './store/store2.js'
console.log("stored values", auto)

import store1Values from "./store/store.js";
console.log("store 1 values", store1Values)

import express from 'express'
const app = express()
const PORT = 3000

app.get('/', (req, res)=>{
    res.send("Hallo Express")
})
app.listen(PORT, () => console.log(`Server runs on port ${PORT}`))







