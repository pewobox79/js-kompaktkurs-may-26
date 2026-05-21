import Link from "next/link";

export default function ContactItem({name, id}:{name:string, id:number}) {

    return <div className="border border-1 p-3 m-2 flex flex-col justify-center">
        <h2>{name}</h2>
        <Link className="border rounded border-1 text-center" href={`contact/${id}`}>DETAILS{id}</Link>
    </div>
}