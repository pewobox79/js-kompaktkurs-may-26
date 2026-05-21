import ClientComponent from "@/components/ClientComponent";
import GlobalImage from "@/components/globals/GlobalImage";
import image from '@/assets/images/pixabay-bild.png'
export default function ClientTest(){

    return <ClientComponent>
        <GlobalImage url={image.src} alt="jalfdkj"/>
    </ClientComponent>

}