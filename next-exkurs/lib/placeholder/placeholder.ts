const BASE_URL ='https://jsonplaceholder.typicode.com/'


export async function getUser(){

    try{
        const response = await fetch(`${BASE_URL}users`)
        if(!response.ok){
            throw Error("response error")
        }

        return await response.json()

    }
    catch(err){

        console.log("something went wrong", err)

    }

}

export async function getUserById(id:string | number){
    try{

        const response = await fetch(`${BASE_URL}users/${id}`)
        if (!response.ok) {
            throw Error("response error")
        }

        return await response.json()

    }catch(err){

        console.log("catched request", err)

    }
}