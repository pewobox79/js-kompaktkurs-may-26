import { userMiddleware } from './middleware/defaultMiddleware.js'
import { getUsers } from './mvc/posts/model.js'

import express from 'express'
const app = express()
const PORT = 3000


//app.use(defaultMiddleware)


app.get('/', (req, res) => {
    res.send("Hallo Express")
})

//API posts von placeholder API
app.get("/api/ph/v1/users", userMiddleware, async (req, res) => {
    const users = await getUsers()

    if(!users) {
        res.status(500).json({msg: "fehler in response"})
    }
    const newList = res.myData.map(user => {
        const { name, username, id, phone } = user
        return {
            name,
            id,
            username,
            phone
        }
    })

    res.status(200).json(newList)
})

app.post("/api/ph/v1/posts", (req, res)=>{

    res.send("hallo POST auf posts api")
})
app.listen(PORT, () => console.log(`Server runs on port ${PORT}`))

export default app