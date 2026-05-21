import ContactItem from "./ContactItem"

interface ContactsType {
    data: { name: string, id: number }[]
}

export default function ContactOverview({ data }: ContactsType) {
    const ListOfContacts = data.map((contact) => {
        return <ContactItem key={contact.name} name={contact.name} id={contact.id} />


    })


    return <div className="flex flex-col justify-center items-center">{ListOfContacts}</div>


}