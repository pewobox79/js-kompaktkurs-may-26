import ContactOverview from "@/components/ContactOverview/ContactOverview"
import { getUser } from "@/lib/placeholder/placeholder"

export default async function Contact() {
    const contacts = await getUser()
    if(!Array.isArray(contacts)){
        return <h1>daten falsch</h1>
    }
    return <ContactOverview data={contacts}/>
}