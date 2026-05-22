import { getUsers } from "../mvc/posts/model.js"

export const userMiddleware = async (req, res, next) => {

    const users = await getUsers()
    if (!users) {
        console.log("error")
        res.send("middleware error")
    }

    console.log("next runs")
    res.myData = users
    next() //=> verlässt dann die middleware und geht in     oder auch weitere middleware



}