const BASE_URL = 'https://jsonplaceholder.typicode.com/'

export const getUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}users`)
        if (!response.ok) {
            return { msg: "response failed" }
        }
        return await response.json()

    } catch (err) {

        return { msg: "error", err }
    }
}