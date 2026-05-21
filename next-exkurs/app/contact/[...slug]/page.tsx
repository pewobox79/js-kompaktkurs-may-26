import { getUserById } from "@/lib/placeholder/placeholder"

export default async function SingleContact({params}:{params: Promise<{slug:string}>}){

    const {slug} = await params

    console.log("slug", slug)
    const user = await getUserById(slug)

    if(!user){
        return <div>no user</div>
    }
    
    return <div className="flex flex-col">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>
}