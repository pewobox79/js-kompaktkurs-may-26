'use client'
import { useState, useEffect, ReactNode } from "react"
import { getUser } from "@/lib/placeholder/placeholder"
import GlobalImage from "./globals/GlobalImage"
import image from '@/assets/images/pixabay-bild.png'

export default function ClientComponent({children}:{children: ReactNode}) {
    console.log("client component")
    const [users, setUsers] = useState([])

    useEffect(()=>{
        getUser().then(res => {
            setUsers(res)
            console.log("users in effect", users)
        })
    }, [])

    console.log("users ausserhalb effect", users)

    return <>
        <h1>client component{JSON.stringify(users)}</h1>
        <GlobalImage url={image.src} alt=""/>
        {children}
        
        </>
}