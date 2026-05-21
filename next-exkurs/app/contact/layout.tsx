import GlobalImage from "@/components/globals/GlobalImage";
import Wasserbild from '@/assets/images/pixabay-bild.png'
import { ReactNode } from "react";

export default function ContactLayout({children}:{children: ReactNode}){

    console.log("wasserbild", Wasserbild)

    return <div className="border border-1">
        <GlobalImage url={Wasserbild.src} alt="Wasserbild" size="small"/>
        {children}
    </div>
}