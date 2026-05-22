/* import { formatCarList } from "./basics/functions.js";
console.log("aus der indexjs, ", myColorsArray, myListOfCars)
const returnValue = formatCarList("lkajdfs", myColorsArray)
console.log("returnvalue", returnValue) */
//import myStoreValues from './store/store2.js'
//import { myListOfCars, myColorsArray } from "./store/store.js";

import { basename, dirname, extname, join } from 'path'
//import * as path from 'path' // => equvalient via oben, nur über object path e.g. path.extname
import { fileURLToPath } from 'url'
import * as fs from 'fs'

//abfrage aktuell file url um einen pfad zu erstellen

const __filename = fileURLToPath(import.meta.url)
console.log("__filename", __filename) //=> /Users/pewobox79/js-komplettkurs/node/index.js
const __dirname = dirname(__filename)
console.log("__dirname", __dirname) //=> /Users/pewobox79/js-komplettkurs/node/
console.log("extension", extname(__filename)) // => .js
console.log("extension", basename(__filename))// => index.js

const testDir = join(__dirname, 'testDir')
fs.mkdir(testDir, { recursive: true }, err =>{

    if(err) throw err
    console.log("directory erstellt", testDir)

} )

const object ={
    name: "peter",
    age: 47,
    street: "strasse"
}
fs.writeFile(join(testDir, 'zweiteDatei.txt'), JSON.stringify(object), err => {
    if(err) throw err

    console.log("file ist geschrieben")

} )

fs.appendFile(join(testDir, 'zweiteDatei.txt'), 'das ist mein appended text', err => {
    if (err) throw err
    console.log("text ist hinzugefügt")

    fs.readFile(join(testDir, 'zweiteDatei.txt'), 'utf8', (err, data) => {
        if (err) throw err
        console.log("inhalt der datei", data);
    });
})








